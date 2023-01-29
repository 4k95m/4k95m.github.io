import Head from'next/head'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  // console.log((router.pathname).replace("/",""))
  return(
    <>
      <Head>
        <title>{`4k95m - ${(router.pathname).replace("/","")}`}</title>
      </Head>
      <h1>4k95m.github.io{router.pathname}</h1>
      <hr />
      <br />
        <div>Writeups
	  <li><a href="https://material-paneer-4f8.notion.site/TsukuCTF22-Writeup-423203c585444494bdbc2dec05fe08b2">TsukuCTF22</a></li>
          <li><a href="https://material-paneer-4f8.notion.site/UECTF2022-Writeup-424cfdca7e6e4d0e83faefc1a7bcea45">UECTF2022</a></li>
          <li><a href="https://material-paneer-4f8.notion.site/taskctf22-Writeup-b66e944e918a42ce9d86cce35199d95d">taskctf22</a></li>
	  <li><a href="/writeups/HHC2022.pdf">SANS Holiday Hack Challenge 2022</a></li>
        </div>
    </>
  )
}
