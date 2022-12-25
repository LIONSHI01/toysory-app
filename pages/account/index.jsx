import React from "react";
import { useSession } from "next-auth/react";

const AccountPage = () => {
  const { data, status } = useSession();

  return <div></div>;
};

export default AccountPage;
