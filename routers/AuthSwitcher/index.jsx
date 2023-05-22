import React, { useState } from "react";
import AuthRouter from "../AuthRouter";
import { useLoginUser } from "../../hooks/useLoginUser";
import AppNavigator from "../AppNavigator";

const AuthSwitch = () => {
  const { login } = useLoginUser();

  if (login) {
    return <AppNavigator />;
  }
  return <AuthRouter />;
};

export default AuthSwitch;
