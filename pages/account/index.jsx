import React from "react";
import Router from "next/router";
import { useSession } from "next-auth/react";

const AccountPage = () => {
  const { data, status } = useSession();
  // console.log(status);

  return <div></div>;
};

export default AccountPage;
