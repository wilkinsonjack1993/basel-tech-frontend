import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/Common/Navbar'
import { Footer } from '../components/Common/Footer'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import { DEFAULT_LOCALE } from '../lib/constants'

const englishMessages = {
  'hello-world': 'Hello, World!',
}

const germanMessages = {
  'hello-world': 'Hallo, Welt!',
}

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()
  const messages = locale && locale === 'en' ? englishMessages : germanMessages

  return (
    <IntlProvider
      messages={messages}
      locale={locale || DEFAULT_LOCALE}
      defaultLocale={DEFAULT_LOCALE}
    >
      <div className="flex min-h-screen flex-col items-center justify-center">
        <NavBar />
        <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </IntlProvider>
  )
}

export default MyApp
