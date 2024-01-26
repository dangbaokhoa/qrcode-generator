import { useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

function QrTemplate({ getData }) {
  const [template, setTemplate] = useState('')

  const handleChange = (event) => {
    setTemplate(event.target.value)
    getData(event.target.value)
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
        >Template</InputLabel>
        <Select
          label="Template"
          onChange={handleChange}
          value={template}
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
          <MenuItem value={'compact'}>Compact</MenuItem>
          <MenuItem value={'compact2'}>Compact 2</MenuItem>
          <MenuItem value={'qr_only'}>QR Only</MenuItem>
          <MenuItem value={'compact'}>Compact</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default QrTemplate
