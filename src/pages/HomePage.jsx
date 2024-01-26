import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import SelectBank from './SelectBank/SelectBank'
import AccountName from './AccountName/AccountName'
import AccountNumber from './AccountNumber/AccountNumber'
import Amount from './Amount/Amount'
import Generator from './QrGenerator/QrGenerator'
import QrCodeImage from './QrCodeImage/QrCodeImage'
import QrTemplate from './QrTemplate/QrTemplate'

function Homepage() {

  const [bankSelected, setBankSelected] = useState('')
  const [accName, setAccName] = useState('')
  const [accNumber, setAccNumber] = useState('')
  const [amount, setAmount] = useState('')
  const [qrTemplate, setTemplate] = useState('')
  const [result, setResult] = useState('')
  const handleBankSelected = (data) => {
    setBankSelected(data)
  }
  const handleAccName = (data) => {
    setAccName(data)
  }
  const handleAccNumber = (data) => {
    setAccNumber(data)
  }
  const handleAmount = (data) => {
    setAmount(data)
  }
  const handleTemplate = (data) => {
    setTemplate(data)
  }
  const handleResult = (data) => {
    setResult(data)
  }
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh', bgcolor: (theme) => theme.palette.primary.main }}>
      <Box
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          padding: '100px 0 0 0',
          gap: 10
        }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 2
        }}>
          <SelectBank getData={handleBankSelected}/>
          <AccountName getData={handleAccName}/>
          <AccountNumber getData={handleAccNumber}/>
          <Amount getData={handleAmount}/>
          <QrTemplate getData={handleTemplate}/>
          <Generator data={{ bankSelected, accName, accNumber, amount, qrTemplate }} getData={handleResult}/>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}>
          {result !== '' && <QrCodeImage data={result} /> }
        </Box>
      </Box>
    </Container>
  )
}

export default Homepage
