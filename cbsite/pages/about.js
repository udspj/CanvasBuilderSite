import Page from '../layouts/main'
import Home from '../src/pages/AboutPage'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
        <title>关于</title>
    </Head>
    <Home/>
  </Page>
)