import "../styles/globals.css"
import { getBaseLayout } from "@/containers/layouts"
import { AppPropsWithLayout } from "@/types"

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? getBaseLayout
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
