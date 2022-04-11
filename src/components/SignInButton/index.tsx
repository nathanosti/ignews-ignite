import { FaGithub } from "react-icons/fa";
import Styles from "./styles.module.scss";

export function SignInButton() {
  const isUserLoggedIn = true;

  const username = "Nathan Osti";

  return (
    <>
      <button className={Styles.signButton} type="button">
        <FaGithub
          style={{ marginRight: "16px" }}
          color={isUserLoggedIn ? "#04D361" : "#EBA417"}
          size={24}
        />
        {isUserLoggedIn ? `${username}` : "Sigin using GitHub"}
      </button>
    </>
  );
}
