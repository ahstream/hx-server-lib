import { Wallet } from 'ethers';

export function createWallet(privateKey = null) {
  return privateKey ? new Wallet(privateKey) : Wallet.createRandom();
}
