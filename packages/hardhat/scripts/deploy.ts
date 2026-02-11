import { ethers } from "hardhat";

async function main() {
  const Owner = await ethers.getContractFactory("Owner");
  const owner = await Owner.deploy();
  await owner.waitForDeployment();

  console.log("Owner deployed to:", await owner.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
