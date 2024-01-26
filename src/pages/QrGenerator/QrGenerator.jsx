import { vietQR } from '~/config/enviroments'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { toast } from 'react-toastify'

function Generator({ data: { bankSelected, accName, accNumber, amount, qrTemplate }, getData }) {
  const generateImage = async () => {
    // 5624624028
    const data = {
      bank: bankSelected,
      accountName: accName,
      accountNumber: accNumber,
      amount: amount,
      memo: '',
      template: qrTemplate
    }
    return vietQR.genQRCodeBase64(data)
  }
  const getImage = async () => {
    try {
      const result = await generateImage()
      if (result.data.desc === 'Gen VietQR successful!') {
        getData(result.data.data.qrDataURL)
      } else throw result
    } catch (error) {
      toast(error.data.desc)
      console.log('Error: ', error)
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
