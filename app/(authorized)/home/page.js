import Home from "@/components/home/Home";

const page = () => {
  // const supabase = createClient();
  // const router = useRouter();

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
};

export default page;
