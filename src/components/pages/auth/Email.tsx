import React from "react";
import EmailLogin from "./login/EmailLogin";
import EmailSignup from "./signup/EmailSignup";

export default function Email(props: { login: string }) {
  return props.login === "login" ? <EmailLogin /> : <EmailSignup />;
}
