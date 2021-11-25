require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn punch gesture industry success session'; 
let testAccounts = [
"0x30aad1111a5b97a323746c40db476bc208856e2485cdd632db2736211154b454",
"0xae4d51cd046cc9a40a02d8b0700ce80fcc9c8594aadb76e04aba02dbb0fd6439",
"0xc45cd7f53dd7186994b29714f7b58d32093d1653bdd01780fd772b70f1a45e07",
"0xd5123aa46af94e01f02fcc38a4a80b892a26190d0b5d956fb63d144a650bfdcb",
"0x2b5604e5746ae3fbe165195a24d998283994a654e7c07ee9f2496a37dcc77a35",
"0xa81871d152820501abb35e54adc03b1c2d1b66d08c9dcd8c2b7a5e15989f0d2e",
"0xa796b0ec7d2c592cfcb8ab5da6729d25460c1b084fe6c2a3bed251de575e614d",
"0x4df15fa83bbc1e16250b5582df8ed521d767cd942f3386fadd50031b66efb48a",
"0xc5c5849ff3880577a1e301335b279065765de7e3b8ec934ac2569ee037bd9faf",
"0x0aa156752c01d44af8275d587542ad126a7d65c7b0d4913eecb17ac14f0c66ee"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


