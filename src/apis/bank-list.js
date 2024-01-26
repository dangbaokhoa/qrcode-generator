import { VietQR } from 'vietqr'

const vietQR = new VietQR({
  clientID: '8c361f04-db80-4f06-af05-045777b1e1cb',
  apiKey: '3c1a39a5-7604-4fed-8359-d6f5f157f90c'
})

const getBankList = async () => {
  try {
    const banks = await vietQR.getBanks()
    return banks.data
  } catch (error) {
    console.log(error)
  }
}

export const bankList = await getBankList()
