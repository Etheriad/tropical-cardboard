// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";

contract TropicalCardboardCoin is ERC1155, Ownable, ERC1155Burnable {
    uint256 private inCirculation = 0;
    uint256 private constant MAX_SUPPLY = 1444;
    // Title of collection on OpenSea
    string public name = "Tropical Cardboard Tokens";

    constructor() ERC1155("https://ipfs.io/ipfs/QmeqzsbwCc9qHP54M1oXvvhfece6i7kBtFaBb574cDqnrt") {}

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function burn(
        address account,
        uint256 id,
        uint256 amount
    ) public override virtual {
        require(
            account == msg.sender || isApprovedForAll(account, msg.sender),
            "ERC1155: caller is not owner or not approved"
        );

        _burn(account, id, amount);
        inCirculation -= amount;
    }

    function count() public view returns (uint256) {
        return inCirculation;
    }

    function getBalance(address account) public view returns (uint256) {
        return balanceOf(account, 0);
    }

    function payToMint(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public payable {
        require(inCirculation + amount <= MAX_SUPPLY, "Max supply reached");
        require (msg.value >= amount * (0.0025 ether), "Need to pay up!");
        
        _mint(account, id, amount, data);
        inCirculation += amount;
    }

    function withdrawAll() external onlyOwner {
        require(payable(msg.sender).send(address(this).balance));
    }
}
