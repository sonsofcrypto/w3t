const SkuskaToken = artifacts.require("Web3Token");

module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(SkuskaToken);
    const token = await SkuskaToken.deployed();
    console.log("Web3Token addresss:", token.address);
};

