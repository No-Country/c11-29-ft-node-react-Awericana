import '../styles/globals.css'
import { SessionProvider } from '@/context/SessionProvider'

export default function App ({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
