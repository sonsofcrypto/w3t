const Web3Token = artifacts.require("Web3Token");

module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(Web3Token);
    const token = await Web3Token.deployed();
    console.log("Web3Token addresss:", token.address);
};

