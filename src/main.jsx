import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from './pages/Home'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import Global from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global/>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
