// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Wallet {
    struct User {
        uint balance;
        bool exists;
    }

    mapping(address => User) private users;

    function withdraw(uint amount) public {
        require(users[msg.sender].exists, "User does not exist");
        require(amount <= users[msg.sender].balance, "Insufficient balance");

        users[msg.sender].balance -= amount;
        payable(msg.sender).transfer(amount);
    }

    function getBalance() public view returns (uint) {
        require(users[msg.sender].exists, "User does not exist");
        return users[msg.sender].balance;
    }
}
