import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Produto.module.css'

export default function HarryPote() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Harry pote ⚡️</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Image src="/01.jpeg" width="500" height="500" alt="Imagem" />

          <div>
            <h1 className={styles.title}>Harry pote ⚡️</h1>
            <h2 className={styles.price}>R$ 111,66</h2>
          </div>
        </div>
      </main>
    </div>
  )
}
