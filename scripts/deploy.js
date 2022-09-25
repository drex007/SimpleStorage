const {ethers, run, network} = require("hardhat");



async function main() {
const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
console.log("Deploying  contract........ ")
const simplestorage = await  SimpleStorageFactory.deploy()
await simplestorage.deployed( )
console.log(simplestorage.address)

//Check the chainId ypu are deploying to and check if ypur ether_apik_key exist
if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY){
  await simplestorage.deployTransaction.wait(6) // This code forces the blockchain to ait after 6 mining blocks before verifying our contracts
  await verify(simplestorage.address, [])


}

const currentValue = await simplestorage.retrieve()
console.log(`Current value is ${currentValue}`)

const transactionResponse = await simplestorage.store(7)
await transactionResponse.wait(1)

const updatedValue = await simplestorage.retrieve()
console.log(`Updated Value is : ${updatedValue}`)


}


async function verify(contractAdress, args){
  console.log("verifying contract..................")
  //Why we are using try catch is to check if the contract is already verified because alot of p-ersons have worked on this project, if we dont use the try catch our deploy script will break , but the try catch and the if helpsthe contract to contibue if it has already being deployed
try{
  //using the hardhat run method and the ether-scan verify task task 
  await run("verify:verify",{
    address:contractAdress,
    constructorArguments:args
  })

} catch(e){
  if(e.message.toLowerCase().includes("already verified")){
    console.log("Already verified")
  } else{
    console.log(e.message)
  }
  
}

}


main().then(() => process.exit(0)).catch((error) => {
  console.error(error);
  process.exit(1);
}); 