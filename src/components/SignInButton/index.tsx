import { FaGithub } from "react-icons/fa";
import Styles from "./styles.module.scss";
import { signIn, useSession } from "next-auth/react";

export function SignInButton() {
  const isUserLoggedIn = false;

  const { data: session, status } = useSession();

  console.log({ session }, `Status: ${status}`);

  const username = "Nathan Osti";

  return (
    <>
      <button
        className={Styles.signButton}
        type="button"
        onClick={status !== "authenticated" && (() => signIn("github"))}
      >
        <FaGithub
          style={{ marginRight: "16px" }}
          color={status === "authenticated" ? "#04D361" : "#EBA417"}
          size={24}
        />
        {status === "authenticated"
          ? `${session.user.name}`
          : "Sigin using GitHub"}
      </button>
    </>
  );
}
