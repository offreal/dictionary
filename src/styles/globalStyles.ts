import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    height: 100%;
  }

  #root {
    min-height: 100%;
  }
`

export default GlobalStyle
