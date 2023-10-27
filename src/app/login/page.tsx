"use client";

import { signIn } from "next-auth/react";
import React, { useEffect } from "react";
import { css } from "../../../styled-system/css";
import { getServerSession } from "next-auth";
import { useRouter } from "next/router";

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
