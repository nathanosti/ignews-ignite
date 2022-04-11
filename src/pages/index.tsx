import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Styles from "../styles/home.module.scss";

import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
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
            Get acces to all publictations <br />
            <b>
              for{" "}
              {product.amount.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}{" "}
              month
            </b>
          </p>

          <SubscribeButton priceId={product.priceId} />
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

export async function getServerSideProps() {
  const price = await stripe.prices.retrieve("price_1KnRjpL7w3tH3GgELii0LXZ6");

  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100,
  };

  return {
    props: {
      product,
    }, // will be passed to the page component as props
  };
}
