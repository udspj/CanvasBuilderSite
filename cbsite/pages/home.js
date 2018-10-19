import Page from '../layouts/main'
import Home from '../src/pages/HomePage'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
        <title>首页</title>
    </Head>
    <Home/>
  </Page>
)