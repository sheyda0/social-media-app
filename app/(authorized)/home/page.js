"use client";

import Home from "@/components/home/Home";
import { isLogin } from "@/utils/supabase/authActions";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const supabase = createClient();
  const router = useRouter();

  // useEffect(() => {
  //   isLogin()
  //     .then((isLoggedIn) => {
  //       if (!isLoggedIn) {
  //         router.push("/");
  //       }
  //       console.log("isLoggedIn", isLoggedIn);
  //     })
  //     .catch((error) => {
  //       console.error("Error checking login status:", error);
  //     });
  // }, [supabase, router]);

  return <Home />;
}
