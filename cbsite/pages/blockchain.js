import Page from '../layouts/main'
import Home from '../src/pages/BlockchainPage'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
        <title>区块链</title>
    </Head>
    <Home/>
  </Page>
)