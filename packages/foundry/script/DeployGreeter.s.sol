// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

import "forge-std/Script.sol";
import "../src/Greeter.sol";

contract DeployGreeter is Script {
    function run() external returns (Greeter deployed) {
        uint256 pk = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(pk);

        deployed = new Greeter();

        vm.stopBroadcast();
    }
}
