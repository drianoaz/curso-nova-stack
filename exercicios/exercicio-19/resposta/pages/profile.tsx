import Head from "next/head";
import Image from "next/image";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <h1>Adriano de Azevedo</h1>
      <Image src="/images/profile.jpg" alt="Adriano de Azevedo" width={144} height={144} />
    </>
  );
}
