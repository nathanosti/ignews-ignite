import Head from "next/head";
import Image from "next/image";
import Styles from "../styles/home.module.scss";

import { SubscribeButton } from "../components/SubscribeButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>IG News - Home</title>
      </Head>

      <main className={Styles.mainWrapper}>
        <section>
          <span>👏 Hey, welcome</span>

          <h1>
            News about the <b>React</b> world
          </h1>

          <p>
            Get acces to all publictations <br /> <b>for $9,90 month</b>
          </p>

          <SubscribeButton />
        </section>

        <div className={Styles.imageWrapper}>
          <Image
            layout="fill"
            src="/assets/avatar.svg"
            alt="IG News Ilustration"
            objectFit="contain"
          />
        </div>
      </main>
    </>
  );
}
