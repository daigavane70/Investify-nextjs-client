import { Button } from 'antd'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="text-center">
      <Head>
        <title>Investify</title>
      </Head>
      <h1 className="text-2xl text-blue-400">Hello</h1>
      <Button type='primary'>Primary Button</Button>
    </div>
  )
}
