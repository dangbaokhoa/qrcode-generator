import { createTheme } from '@mui/material/styles'

const BOARD_WIDTH = '500px'

const theme = createTheme({
  generator: {
    boardWidth: BOARD_WIDTH
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: 'white'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth: '0.5px',
          '&:hover': { borderWidth: '0.5px' }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: () => ({
          fontSize: '0.875rem'
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: () => {
          return {
            fontSize: '0.875rem',
            '.MuiOutlinedInput-notchedOutline': {
            },
            '&:hover': {
              '.MuiOutlinedInput-notchedOutline': {
              }
            },
            '& fieldset': { borderWidth: '0.5px !important' },
            '&:hover fieldset': { borderWidth: '1px !important' },
            '&.Mui-focused fieldset': { borderWidth: '1px !important' }
          }
        }
      }
    }
  }
})
export default theme
