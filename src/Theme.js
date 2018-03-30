import React from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import PropTypes from 'prop-types'

import indigo from 'material-ui/colors/indigo'
import pink from 'material-ui/colors/pink'

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
  },
})

const Theme = ({ children }) => (
  <MuiThemeProvider theme={theme}>{ children }</MuiThemeProvider>
)

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Theme
