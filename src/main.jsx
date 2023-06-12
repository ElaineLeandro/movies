import React from 'react'
import ReactDOM from 'react-dom/client'
// import {Home} from './pages/Home'clea
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import Global from './styles/global'
import { NewMovies } from './pages/NewMovies'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global/>
      {/* <Home /> */}
      <NewMovies/>
    </ThemeProvider>
  </React.StrictMode>
)
