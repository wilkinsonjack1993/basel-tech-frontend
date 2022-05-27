import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/Common/Navbar'
import { Footer } from '../components/Common/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <NavBar />
      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
