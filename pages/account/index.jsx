import React from "react";
import Router from "next/router";
import { useSession } from "next-auth/react";

const AccountPage = () => {
  const { data, status } = useSession();
  console.log(status);
  // if (status === "unauthenticated") {
  //   Router.replace("/");
  // }

  return <div>{data.user.email}</div>;
};

export default AccountPage;
