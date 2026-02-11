import { ethers } from "hardhat";

async function main() {
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy();
  await greeter.waitForDeployment();

  console.log("Owner deployed to:", await greeter.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
