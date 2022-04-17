require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/18rGCVCO1I83CKKg-eZQEI5yxWt-m5Fk',
      accounts: ['e69bcc0db6081021b786685d9ab50a34039b979c7494c93da8e2fb94dcd0c5e4'],
    },
  },
};