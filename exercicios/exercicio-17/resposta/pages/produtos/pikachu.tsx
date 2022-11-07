import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Produto.module.css'

export default function Pikachu() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pikachu 🥵</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Image src="/04.jpeg" width="500" height="500" alt="Imagem" />

          <div>
            <h1 className={styles.title}>Pikachu 🥵</h1>
            <h2 className={styles.price}>R$ 666,66</h2>
          </div>
        </div>
      </main>
    </div>
  )
}
