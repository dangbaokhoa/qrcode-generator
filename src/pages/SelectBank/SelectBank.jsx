import { useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { bankList } from '~/apis/bank-list'
function SelectBank({ getData }) {
  const [bank, setBank] = useState('')

  const handleChange = (event) => {
    // console.log(event.target)
    setBank(event.target.value)
    getData(event.target.value.bin)
  }
  return (
    <Box>
      <FormControl
        sx={{
          m: 1,
          minWidth: theme => theme.generator.boardWidth
        }}>
        <InputLabel
          sx={{
            color: 'white',
            '&.Mui-focused': { color: 'white' }
          }}
        >Bank</InputLabel>
        <Select
          label="Bank"
          onChange={handleChange}
          value={bank}
          sx={{
            width: (theme) => theme.generator.boardWidth,
            color: 'white',
            '&.Mui-focused': { color: 'white' },
            '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            '.MuiSvgIcon-root': { color: 'white' }
          }}
        >
          {bankList?.map(bank => <MenuItem key={bank.id} value={bank}>{bank.shortName} - {bank.name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectBank
