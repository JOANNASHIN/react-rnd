import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Layout, { siteTitle } from '@/components/layout';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>홈 {siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>안녕하세요, 신지은입니다.</p>
        <p>
          소개글
        </p>
      </section>
    </Layout>
  )
}