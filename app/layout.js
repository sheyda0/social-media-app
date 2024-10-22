import "../assets/styles/globals.css";
import "../assets/styles/colors.css";
import ReduxProvider from "@/redux/provider";
import Script from "next/script";
import BackgroundShadows from "@/components/utils/BackgroundShadows";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="font-alata">
        {/* <Cursor /> */}
        {/* <div className="cursor"></div>
        <div className="cursor2"></div> */}
        <div className="main"></div>
        {/* <AbsoluteShadow cln="top-[20rem] left-[30rem] absolute-shadow-purple w-[10rem] h-[10rem]" />
        <AbsoluteShadow cln="top-[15rem] left-[20rem] absolute-shadow-blue w-[6rem] h-[6rem]" />

        <AbsoluteShadow cln="top-[45%] left-[60%] absolute-shadow-light-blue w-[3rem] h-[3rem]" />
        <AbsoluteShadow cln="top-[80%] left-[35%] absolute-shadow-light-blue w-[3rem] h-[3rem]" />

        <AbsoluteShadow cln="bottom-[5rem] right-[15rem] absolute-shadow-purple-sm w-[5rem] h-[5rem]" />
        <AbsoluteShadow cln="bottom-[5rem] right-[26rem] absolute-shadow-blue-sm w-[3rem] h-[3rem]" /> */}

        <BackgroundShadows />

        <ReduxProvider>{children}</ReduxProvider>
      </body>
      <Script src="https://accounts.google.com/gsi/client" async></Script>
    </html>
  );
}
