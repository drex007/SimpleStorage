const {ethers} = require("hardhat")
const {expect, assert} = require("chai")

//We use the describe keyword fro the testing 
describe("SimpleStorage", function(){
    let SimpleStorageFactory, simplestorage
    // Before|Each is for the called while deploying the contract before carrying out the testing  
    beforeEach(async function(){ 
        SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simplestorage = await SimpleStorageFactory.deploy()
    }) 


    it("Favourite number as 0", async function (){
        // The test you want to run
        const currentValue = await simplestorage.retrieve()
        // The result you are expecting
        const expectedValue = "0"
        
    assert.equal(currentValue.toString(), expectedValue)
    })

})