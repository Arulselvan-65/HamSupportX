// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";

contract HamsToken is ERC721, ERC721URIStorage {
    uint256 private _nextTokenId;
    address private _hamsSupportXAddress;

    constructor(address _contractAddress)
    ERC721("HamsToken", "HMS")
    {
        _hamsSupportXAddress = _contractAddress;
    }

    modifier onlyContract {
        require(msg.sender == _hamsSupportXAddress, "Not allowed");
        _;
    }

    function safeMint(address to, string memory _uri) external onlyContract {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, _uri);
    }

    //Overrides
    function tokenURI(uint256 tokenId)
    public
    view
    override(ERC721, ERC721URIStorage)
    returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721, ERC721URIStorage)
    returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}

