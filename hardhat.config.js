// https://eth-rinkeby.alchemyapi.io/v2/tMdOJzyiH9m3B9gtj9w3OAWp3WgXbCG4

require('@nomiclabs/hardhat-waffle');
 
module.exports={
  solidity: '0.8.0',
  networks:{
    rinkeby:{
      url:'https://eth-rinkeby.alchemyapi.io/v2/tMdOJzyiH9m3B9gtj9w3OAWp3WgXbCG4',
      accounts:['ac4657e0bcead2e3ee1e8c26927767eeacbccae59c278e3abd495ce62b8d034e']
    },
    goerli:{
      url:'https://eth-goerli.alchemyapi.io/v2/52mLa5SFSjq7wibeGgn8vfkdWzcJoLnW',
      accounts:['ac4657e0bcead2e3ee1e8c26927767eeacbccae59c278e3abd495ce62b8d034e']
    }
  } 
}