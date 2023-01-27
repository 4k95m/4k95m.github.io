import Link from 'next/link'
import Head from 'next/head'

const Index = () => {
  return (
    <>
      <Head>
	<title>4k95m - home</title>
      </Head>
      <h1>4k95m.github.io</h1>
      <hr />
      <br />
      <div>Welcome to 4k95m.github.io!</div>
      <li><a href="/about">About me</a></li>
      <li><a href="/writeups">Writeups</a></li>
    </>
  )
}

export default Index
