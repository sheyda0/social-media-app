import Header from "@/components/header/Header";
import RightSidebar from "@/components/right_sidebar/RightSidebar";
import Sidebar from "@/components/sidebar/Sidebar";
import Providers from "../providers";

export default function MainLayout({ children }) {
  return (
    <Providers>
      <div className="flex flex-col-reverse md:flex-row w-full h-[100vh] md:h-full justify-between">
        <Sidebar />
        <div className="flex flex-col px-[1rem] md:px-[1.875rem] w-full h-full md:w-[60%] pb-[5rem] md:pb-0">
          <Header />
          <div>{children}</div>
        </div>
        <RightSidebar />
      </div>
    </Providers>
  );
}
