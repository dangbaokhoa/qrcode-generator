import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
function Amount({ getData }) {
  const handleChange = (event) => {
    getData(event.target.value)
  }
  return (
    <Box>
      <TextField
        sx={{
          width: (theme) => theme.generator.boardWidth,
          color: 'white',
          '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '.MuiSvgIcon-root': { color: 'white' },
          '& .MuiInputLabel-root': { color: 'white' },
          '& .MuiInputBase-input': { color: 'white', borderColor: 'white' },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          '& label.Mui-focused': { color: 'white' }
        }}
        label="Amount"
        variant="outlined"
        onChange={handleChange}
      />
    </Box>
  )
}

export default Amount
