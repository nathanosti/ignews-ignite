import Head from "next/head";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>IG News - Home</title>
      </Head>
      <div className={styles.title}>Hello World</div>
    </>
  );
}
