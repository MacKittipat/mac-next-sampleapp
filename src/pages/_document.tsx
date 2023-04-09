import Menu from '@/components/menu'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div>
          <Menu />
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
