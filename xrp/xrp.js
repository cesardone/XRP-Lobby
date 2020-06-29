const { Wallet, XrpClient, XrplNetwork } = require('xpring-js');

// TestNet Wallet Generation
const seedWallet = Wallet.generateWalletFromSeed(
  'saDe53yvd9LNCA1pWymNDQuGssoQs'
);

const remoteURL = 'test.xrp.xpring.io:50051'; //Testnet URL
const xrpClient = new XrpClient(remoteURL, XrplNetwork.Test);

const genWallet = () => {
  // Generate Random Wallet
  const newWallet = Wallet.generateRandomWallet();
  const newWalletAddy = newWallet.wallet.getAddress();
  // console.log('New Wallet Details: ', newWallet);
  // console.log('New Wallet Address: ', newWalletAddy);
  return { newWalletAddy, newWallet };
};

const fundWallet = async (newWalletAddy) => {
  // PREFUND XRP Wallet Function 20-XRP
  // eslint-disable-next-line no-undef
  const amount = BigInt('300000000');
  const transHash = await xrpClient.send(amount, newWalletAddy, seedWallet);
  console.log(seedWallet);
  console.log('Pre-funded Wallet with 300 XRP!');
  console.log('Transaction Hash: ', transHash);
};

const getInfo = async (newWalletAddy, newWallet) => {
  // Display Random Wallet Balance
  const newWalletBalance = await xrpClient.getBalance(newWalletAddy);

  return {
    walletAddress: newWalletAddy,
    balance: Number(newWalletBalance.value) / 1000000,
    walletData: newWallet,
  };
};

const getBalance = async (walletAddy) => {
  const newWalletBalance = await xrpClient.getBalance(walletAddy);
  return Number(newWalletBalance.value) / 1000000;
};

const displayTestNetBalance = async () => {
  const testNetAddress = seedWallet.getAddress();
  const testNetBalance = await xrpClient.getBalance(testNetAddress);
  console.log('Test Net Balance: ', Number(testNetBalance.value));
};

const generateNFund = async () => {
  const { newWalletAddy, newWallet } = genWallet();
  await fundWallet(newWalletAddy);
  return getInfo(newWalletAddy, newWallet);
};

const sendXRP = async (amount, sendingWallet, recievingAddress) => {
  // eslint-disable-next-line no-undef
  const bigAmount = BigInt(amount * 1000000);
  sendingWallet = Wallet.generateWalletFromMnemonic(sendingWallet.mnemonic);
  try {
    const transHash = await xrpClient.send(
      bigAmount,
      recievingAddress,
      sendingWallet
    );
    return transHash;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  genWallet,
  fundWallet,
  getInfo,
  displayTestNetBalance,
  generateNFund,
  sendXRP,
  getBalance,
};
