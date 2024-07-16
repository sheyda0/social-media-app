import Header from "@/components/header/Header";
import RightSidebar from "@/components/right_sidebar/RightSidebar";
import Sidebar from "@/components/sidebar/Sidebar";
// import Providers from "../providers";

export default function MainLayout({ children }) {
  return (
    // <Providers>
    <div className="flex flex-col-reverse lg:flex-row w-full lg:h-full justify-between">
      <Sidebar />
      <div className="flex flex-col px-[1rem] lg:px-[1.875rem] w-full lg:w-[60%] pb-[5rem] lg:pb-0 z-[10]">
        <Header />
        <div className="w-full">{children}</div>
      </div>
      <RightSidebar />
    </div>
    // </Providers>
  );
}
