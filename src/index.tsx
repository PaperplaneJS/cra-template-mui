import CssBaseline from '@mui/material/CssBaseline'
import { zhCN } from '@mui/material/locale'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { LocalizationProvider, zhCN as zhCNXDateLocal } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import zhCNDateFns from 'date-fns/locale/zh-CN'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import ReactDOM from 'react-dom/client'

import RouterEntry from './router'

import '@/styles/app.scss'

const theme = createTheme(zhCN)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.Fragment>
    <CssBaseline />
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      adapterLocale={zhCNDateFns}
      localeText={zhCNXDateLocal.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <RouterEntry />
        </SnackbarProvider>
      </ThemeProvider>
    </LocalizationProvider>
  </React.Fragment>
)
