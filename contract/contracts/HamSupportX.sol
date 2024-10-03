// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "./HamsToken.sol";

contract HamSupportX {
    address public owner;
    HamsToken public hamsToken;

    // Creator details structure
    struct Creator {
        uint256 monthlyPrice;
        uint256 yearlyPrice;
        uint256 remainingBalance;
        bool isRegistered;
    }

    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Not a owner");
        _;
    }

    modifier onlyCreator {
        require(creators[msg.sender].remainingBalance > 0, "Not enough balance");
        _;
    }

    // Manage user subscriptions
    mapping(address => mapping(address => uint256)) public userSubscriptions;

    // Manage creator information
    mapping(address => Creator) public creators;

    // Assign NFT token contract address
    function setHamsTokenAddress(address _addr) external onlyOwner {
        hamsToken = HamsToken(_addr);
    }

    // Register a new creator
    function registerCreator(uint256 _monthlyPrice, uint256 _yearlyPrice) public {
        require(!creators[msg.sender].isRegistered, "Creator is already registered");

        creators[msg.sender] = Creator({
            monthlyPrice: _monthlyPrice,
            yearlyPrice: _yearlyPrice,
            remainingBalance: 0,
            isRegistered: true
        });
    }

    // Subscribe to a creator's membership
    function subscribe(address _creator, bool _isYearly, string calldata nftURI) public payable {
        Creator memory creator = creators[_creator];
        require(creator.isRegistered, "Creator not registered");

        uint256 subscriptionPrice = _isYearly ? creator.yearlyPrice : creator.monthlyPrice;
        require(msg.value == subscriptionPrice, "Incorrect payment");
        creators[_creator].remainingBalance = subscriptionPrice;

        uint256 duration = _isYearly ? 365 days : 30 days;
        uint256 expiryTimestamp = block.timestamp + duration;

        userSubscriptions[msg.sender][_creator] = expiryTimestamp;

        hamsToken.safeMint(msg.sender, nftURI);
    }

    // Check if a subscription is valid
    function isSubscriptionValid(address _creator) public view returns (bool) {
        require(userSubscriptions[msg.sender][_creator] > 0, "User does not exist");
        uint256 remainingTime = userSubscriptions[msg.sender][_creator];
        return block.timestamp <= remainingTime;
    }

    // Update membership prices for creators
    function updateSubscriptionPrices(uint256 _monthlyPrice, uint256 _yearlyPrice) public {
        require(creators[msg.sender].isRegistered, "You must be a registered creator");
        creators[msg.sender].monthlyPrice = _monthlyPrice;
        creators[msg.sender].yearlyPrice = _yearlyPrice;
    }

    // Withdraw funds from the contract
    function withdrawFunds(uint256 _amt) external onlyCreator {
        assert(creators[msg.sender].remainingBalance >= _amt);
        creators[msg.sender].remainingBalance -= _amt;
        (bool s, ) = msg.sender.call{value: _amt}("");
        require(s, "Transfer Failed");
    }

    // Get remaining balance of a creator
    function getBalance(address _addr) external view returns(uint256) {
        return creators[_addr].remainingBalance;
    }
}
