const hre = require("hardhat");

async function main() {

    const hamSupportX_factory = await hre.ethers.getContractFactory("HamSupportX");
    const hamsToken_factory = await hre.ethers.getContractFactory("HamsToken");

    const hamSupportX = await hamSupportX_factory.deploy();

    const hamsSupportX_address = await hamSupportX.getAddress();

    const hamsToken = await hamsToken_factory.deploy(hamsSupportX_address);

    console.log("HamSupportX deployed to :", await hamSupportX.getAddress());
    console.log("HamsToken deployed to :", await hamsToken.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
