const { Wallet, XrpClient, XrplNetwork, Utils } = require('xpring-js');
const {
  TakerGets,
} = require('xpring-js/build/XRP/Generated/web/org/xrpl/rpc/v1/common_pb');
const seedWallet = Wallet.generateWalletFromSeed(
  'saDe53yvd9LNCA1pWymNDQuGssoQs'
);
const remoteURL = 'test.xrp.xpring.io:50051'; //Testnet URL
const xrpClient = new XrpClient(remoteURL, XrplNetwork.Test);

async function createNewWallet() {
  // Random Wallet Generation
  try {
    // Generate Random Wallet
    const newWallet = Wallet.generateRandomWallet();
    const newWalletAddy = newWallet.wallet.getAddress();
    console.log('New Wallet Details: ', newWallet);
    console.log('New Wallet Address: ', newWalletAddy);

    // PREFUND XRP Wallet Function 20-XRP
    const amount = BigInt('20000000');
    const transHash = await xrpClient.send(amount, newWalletAddy, seedWallet);
    console.log('Pre-funded Wallet with 20 XRP!');
    console.log('Transaction Hash: ', transHash);

    // Display Main Wallet Balance
    const testNetAddress = seedWallet.getAddress();
    const testNetBalance = await xrpClient.getBalance(testNetAddress);
    console.log('Test Net Balance: ', Number(testNetBalance.value));

    // Display Random Wallet Balance
    const newWalletBalance = await xrpClient.getBalance(newWalletAddy);
    console.log('New Wallet Balance: ', Number(newWalletBalance.value));
  } catch (error) {
    console.log(error);
  }
}

createNewWallet();
