const { keyStores } = require('near-api-js');


export const nearConfig = { 
    networkId: 'testnet', 
    keyStore: new keyStores.BrowserLocalStorageKeyStore(), 
    // keyStore: new keyStores.InMemoryKeyStore(),
    nodeUrl: 'https://rpc.testnet.near.org',
    walletUrl: 'https://wallet.testnet.near.org',  
    helperUrl: 'https://helper.testnet.near.org',  
    explorerUrl: 'https://explorer.testnet.near.org',
  }; 
