require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note ridge prosper install fork tattoo ghost'; 
let testAccounts = [
"0x554fc8e60e867e18bfde0d45a06afd71393aa35c87565e44aef0756d557a95e7",
"0x6567e4f7b3854e931a8ccad49e5dfb028eedbccce040891ac8b14bee3b7e61fd",
"0x81209fc81957f1119b4d6194378852827d0459090c58ffd5d131644b860745e8",
"0xd66c28893f947b1290c8aa0975a665fce359cb6e52b6c6a1ec15f3d88736d1d4",
"0x61ffe249c73c62b73feae58cefcd15b82795560552e92e57a225a6cd48d61273",
"0x76bf574adcc3e87f2f462a89c1bfa1abf8abd70eb7011cc0c7ab5ed1da74e7bb",
"0x1a5c5eb5a3422e0158a97139700ec3082a36274f1d5049aed2221ec4b444fa8b",
"0x78cd943a2417f8b1995257128fed451aefe4411d57bd63fbe75fb344f0e75460",
"0xc97a0352717ff680a4742799ce38d2503070d6e4612b7a81f17ebc4b2296163f",
"0x183dd4a9f0cbefb0f7b862aab61dbcd2f24e0eb77bc9119da2b74ec8beb4e916"
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


