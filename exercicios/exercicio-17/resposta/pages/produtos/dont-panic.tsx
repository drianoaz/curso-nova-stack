import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Produto.module.css'

export default function Mario() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Don&apos;t panic 😱</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Image src="/03.jpeg" width="500" height="500" alt="Imagem" />

          <div>
            <h1 className={styles.title}>Don&apos;t panic 😱</h1>
            <h2 className={styles.price}>R$ 333,33</h2>
          </div>
        </div>
      </main>
    </div>
  )
}
