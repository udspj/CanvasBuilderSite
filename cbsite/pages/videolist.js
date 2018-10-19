import Page from '../layouts/main'
import Home from '../src/pages/VideoListPage'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
        <title>视频教学</title>
    </Head>
    <Home/>
  </Page>
)