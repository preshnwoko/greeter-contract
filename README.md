### Contract Addresses

Foundry (CELO): 0x15bB867b2816D02213cd7D657434E311F675dA49

Hardhat (CELO): 0x8C4b105513132D779E46a571F5c631fa177020e8

## Repository Structure

This is a monorepo containing two parallel implementations of the same Owner smart contract, deployed using different Ethereum development frameworks.

### packages/foundry

Foundry-based implementation using Rust tooling for fast, efficient smart contract development.

- `src/` - Solidity contracts (Owner.sol)
- `script/` - Deployment scripts
- `test/` - Forge test suite
- `lib/` - Dependencies (forge-std)
- `foundry.toml` - Foundry configuration

### packages/hardhat

Hardhat-based implementation using TypeScript for a familiar Node.js development experience.

- `contracts/` - Solidity contracts (Owner.sol)
- `scripts/` - Deployment scripts
- `test/` - Hardhat test suite
- `ignition/` - Hardhat Ignition deployment modules
- `hardhat.config.ts` - Hardhat configuration

Both packages deploy identical Owner contracts that provide basic ownership management functionality with the ability to transfer ownership and query the current owner.
