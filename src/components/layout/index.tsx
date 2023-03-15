import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

const name = 'joanna';
export const siteTitle = "react rnd";

export default function Layout({ children, home = false }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
      
      <header className={styles.header}>
        <nav>
          <Link href="/">home</Link>&nbsp;|&nbsp;
          <Link href="/daily">daily</Link>
        </nav>
      </header>

      <main>
        {children}
      </main>
      
      <footer>
        footer
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </footer>
    </div>
  )
}