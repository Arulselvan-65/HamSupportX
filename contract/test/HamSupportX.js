const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HamSupportX Contract", function () {
    let HamSupportX, hamsToken, hamSupportX, owner, addr1, addr2;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();

        HamSupportX = await ethers.getContractFactory("HamSupportX");
        hamSupportX = await HamSupportX.deploy();

        const HamsToken = await ethers.getContractFactory("HamsToken");
        hamsToken = await HamsToken.deploy(hamSupportX.target);

        await hamSupportX.setHamsTokenAddress(hamsToken.target);
    });

    it("Should allow to register a creator", async function () {
        await hamSupportX.connect(addr1).registerCreator(ethers.parseEther('0.01'), ethers.parseEther('0.1'));
        const creator = await hamSupportX.creators(addr1.address);

        expect(creator.isRegistered).to.equal(true);
        expect(creator.monthlyPrice).to.equal(ethers.parseEther("0.01"));
        expect(creator.yearlyPrice).to.equal(ethers.parseEther("0.1"));
    });

    it("Should allow a user to subscribe to a creator's membership", async function () {
        await hamSupportX.connect(addr1).registerCreator(ethers.parseEther("0.01"), ethers.parseEther("0.1"));
        await hamSupportX.connect(addr2).subscribe(addr1.address, false, "ipfs://sampleURI", { value: ethers.parseEther("0.01") });

        const subscription = await hamSupportX.userSubscriptions(addr2.address,addr1);
        let dt = Date.now();
        expect(subscription).to.lt(dt);
    });

    it("Should mint an NFT when a user subscribes", async function () {
        await hamSupportX.connect(addr1).registerCreator(ethers.parseEther("0.01"), ethers.parseEther("0.1"));
        await hamSupportX.connect(addr2).subscribe(addr1.address, false, "ipfs://sampleURI", { value: ethers.parseEther("0.01") });
        const balance = await hamsToken.balanceOf(addr2.address);
        expect(balance).to.equal(1);
    });

    it("Should fail if a non-creator tries to withdraw funds", async function () {
        await expect(hamSupportX.connect(addr2).withdrawFunds(ethers.parseEther("0.01"))).to.be.revertedWith("Not enough balance");
    });

    it("Should allow a creator to withdraw funds", async function () {
        await hamSupportX.connect(addr1).registerCreator(ethers.parseEther("0.01"), ethers.parseEther("0.1"));
        await hamSupportX.connect(addr2).subscribe(addr1.address, false, "ipfs://sampleURI", { value: ethers.parseEther("0.01") });


        await expect(() => hamSupportX.connect(addr1).withdrawFunds(ethers.parseEther("0.01")))
            .to.changeEtherBalances([addr1], [ethers.parseEther("0.01")]);
    });
});
