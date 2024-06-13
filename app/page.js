"use client";

import Registration from "@/components/register/Registration";
import { isLogin } from "@/utils/supabase/authActions";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RegistrationPage() {
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    isLogin()
      .then((isLoggedIn) => {
        if (isLoggedIn) {
          router.push("/home");
        }
      })
      .catch((error) => {
        console.error("Error checking login status:", error);
      });
  }, [supabase, router]);

  return <Registration />;
}
