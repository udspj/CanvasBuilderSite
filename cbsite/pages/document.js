import Page from '../layouts/main'
import Home from '../src/pages/DocumentPage'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
        <title>文档</title>
    </Head>
    <Home/>
  </Page>
)