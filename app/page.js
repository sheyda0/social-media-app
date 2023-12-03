"use client";

import Registration from "@/components/register/Registration";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const token = useSelector(selectCurrentToken);

  useEffect(() => {
    if (token) {
      redirect("/home");
    }
  }, [token]);

  return <Registration />;
}
