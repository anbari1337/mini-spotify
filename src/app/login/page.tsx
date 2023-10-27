"use client";

import { signIn } from "next-auth/react";
import { css } from "../../../styled-system/css";

const Login = () => {
  return (
    <div
      className={css({
        minH: "100vh",
        minW: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <button onClick={() => signIn("google", { callbackUrl: "/" })}>
        Login
      </button>
    </div>
  );
};

export default Login;
