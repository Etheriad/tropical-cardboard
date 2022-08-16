// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";

contract TropicalCardboardCoin is ERC1155, Ownable, ERC1155Burnable {
    uint256 private totalSupply = 0;
    uint256 private constant MAX_SUPPLY = 1444;

    constructor() ERC1155("ipfs://QmVXvnBWC1AgR3QFNwdDxfcd7RuFdfso9hE6kW7k4VadQy") {}

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public onlyOwner {
        require(totalSupply + amount <= MAX_SUPPLY, "Max supply reached");
        _mint(account, id, amount, data);
        totalSupply += amount;
    }

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public onlyOwner {
        _mintBatch(to, ids, amounts, data);
    }

    function burn(
        address account,
        uint256 id,
        uint256 amount
    ) public override virtual {
        require(
            account == _msgSender(),
            "ERC1155: caller is not owner"
        );

        _burn(account, id, amount);
        totalSupply -= amount;
    }

    function count() public view returns (uint256) {
        return totalSupply;
    }

    function payToMint(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public payable {
        require(totalSupply + amount <= MAX_SUPPLY, "Max supply reached");
        require (msg.value >= 0.05 ether, "Need to pay up!");
        
        _mint(account, id, amount, data);
        totalSupply += amount;
    }
}
