import { VietQR } from 'vietqr'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useState } from 'react'
const vietQR = new VietQR({
  clientID: '8c361f04-db80-4f06-af05-045777b1e1cb',
  apiKey: '3c1a39a5-7604-4fed-8359-d6f5f157f90c'
})

function Generator({ data: { bankSelected, accName, accNumber, amount }, getData }) {
  const generateImage = async () => {
    // 5624624028
    const data = {
      bank: bankSelected,
      accountName: accName,
      accountNumber: accNumber,
      amount: amount,
      memo: ''
    }
    return vietQR.genQRCodeBase64(data)
  }
  const getImage = async () => {
    try {
      const result = await generateImage()
      // console.log('result: ', result.data.data.qrDataURL)
      getData(result.data.data.qrDataURL)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Box>
      <Button
        variant="contained"
        color="success"
        onClick={getImage}
      >Generate</Button>
    </Box>
  )
}

export default Generator
