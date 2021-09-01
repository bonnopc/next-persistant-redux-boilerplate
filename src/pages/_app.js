/* eslint-disable react/prop-types */
import { PersistGate } from "redux-persist/integration/react"
import Head from "next/head"
import BaseLayout from "layouts/BaseLayout"
import { wrapper } from "store"
import { ReactReduxContext } from "react-redux"
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <ReactReduxContext.Consumer>
        {({ store }) => (
          <PersistGate
            persistor={store?.__PERSISTOR}
            loading={<div>Loading..</div>}
          >
            <BaseLayout>
              <Component {...pageProps} />
            </BaseLayout>
          </PersistGate>
        )}
      </ReactReduxContext.Consumer>
    </>
  )
}

export default wrapper.withRedux(MyApp)