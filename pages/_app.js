/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
	  return (
		      <div>
		        <nav className="border-b p-6">
		          <p className="text-4xl font-bold">MaximArt NFT Marketplace for HPB - Connect using Metamask set to HPB Network</p>
		          <div className="flex mt-4">
		            <Link href="/">
		              <a className="mr-4 text-pink-500">
		                Home
		              </a>
		            </Link>
		            <Link href="/create-item">
		              <a className="mr-6 text-pink-500">
		                Sell NFT Asset
		              </a>
		            </Link>
		            <Link href="/my-assets">
		              <a className="mr-6 text-pink-500">
		                My Purchased NFT Assets
		              </a>
		            </Link>
		            <Link href="/creator-dashboard">
		              <a className="mr-6 text-pink-500">
		                Creator NFT Dashboard
		              </a>
		            </Link>
		          </div>
		        </nav>
		        <Component {...pageProps} />
		      </div>
		    )
}

export default MyApp
