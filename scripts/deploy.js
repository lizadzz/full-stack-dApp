async function main() {
    const Wallet = await ethers.getContractFactory("Wallet");
    const wallet = await upgrades.deployProxy(Wallet);

    console.log("Wallet deployed to:", wallet.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
