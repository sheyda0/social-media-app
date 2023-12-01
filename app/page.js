"use client";

import Registration from "@/components/register/Registration";
import { redirect } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

export default function Home() {
  useEffect(() => {
    const isAuth = false;
    if (isAuth) {
      redirect("/home");
    }
  }, []);

  return <Registration />;
}
