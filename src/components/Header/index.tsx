import { SignInButton } from "../SignInButton";
import Image from "next/image";

import Styles from "./styles.module.scss";

export function Header() {
  return (
    <>
      <header className={Styles.headerContainer}>
        <div className={Styles.headerContent}>
          <Image
            width={"100%"}
            height={'100%'}
            src="/assets/logo.svg"
            alt="IG News - Logo"
          />

          <nav>
            <a className={Styles.active} href="/index" target="_blank">
              Home
            </a>
            <a href="/posts" target="_blank">
              Posts
            </a>
          </nav>

          <SignInButton />
        </div>
      </header>
    </>
  );
}
