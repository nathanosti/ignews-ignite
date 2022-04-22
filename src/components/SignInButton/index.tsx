import { FaGithub } from "react-icons/fa";
import Styles from "./styles.module.scss";
import { signIn, useSession } from "next-auth/react";

export function SignInButton() {
  const { data: session } = useSession();

  return (
    <>
      <button
        className={Styles.signButton}
        type="button"
        onClick={!session && (() => signIn("github"))}
      >
        <FaGithub
          style={{ marginRight: "16px" }}
          color={session ? "#04D361" : "#EBA417"}
          size={24}
        />
        {session ? `${session.user.name}` : "Sigin using GitHub"}
      </button>
    </>
  );
}
