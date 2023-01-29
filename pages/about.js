import Head from 'next/head'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  
  return(
    <>
      <Head>
        <title>{`4k95m - ${(router.pathname).replace("/","")}`}</title>
      </Head>
      <h1>4k95m.github.io/about</h1>
      <hr />
      <br />
        <div>About me
          <li><a href="https://twitter.com/4k95m">Twitter</a></li>
        </div>
    </>
  )
}


