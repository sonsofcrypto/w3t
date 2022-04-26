// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";

contract Web3Token is ERC20PresetFixedSupply {

    address payable private _owner;

    constructor() ERC20PresetFixedSupply(
        "Web3Token",
        "W3T",
        100000000000000000000000000,
        msg.sender
    ) {
        _owner = payable(msg.sender);
    }
}