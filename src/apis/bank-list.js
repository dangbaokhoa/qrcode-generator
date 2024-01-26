import { vietQR } from '~/config/enviroments'

const getBankList = async () => {
  try {
    const banks = await vietQR.getBanks()
    return banks.data
  } catch (error) {
    console.log('Error Banks List: ', error)
  }
}

export const bankList = await getBankList()
