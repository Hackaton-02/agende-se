import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../store'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Agende-se</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
