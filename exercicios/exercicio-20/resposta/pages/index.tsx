import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mundo Geek</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mundo Geek 🤓
        </h1>

        <div className={styles.grid}>
          <Link href="/produtos/harry-pote" className={styles.card}>
            <h2>Harry pote ⚡️</h2>
            <Image src="/01.jpeg" width="250" height="250" alt="Imagem" />
          </Link>

          <Link href="/produtos/mario" className={styles.card}>
            <h2>Mário 😈</h2>
            <Image src="/02.jpeg" width="250" height="250" alt="Imagem" />
          </Link>

          <Link
            href="/produtos/dont-panic"
            className={styles.card}
          >
            <h2>Don&apos;t panic 😱 &rarr;</h2>
            <Image src="/03.jpeg" width="250" height="250" alt="Imagem" />
          </Link>

          <Link
            href="/produtos/pikachu"
            className={styles.card}
          >
            <h2>Pikachu 🥵</h2>
            <Image src="/04.jpeg" width="250" height="250" alt="Imagem" />
          </Link>
        </div>
      </main>
    </div>
  )
}
