import Header from "@/components/header/Header";
import RightSidebar from "@/components/right_sidebar/RightSidebar";
import Sidebar from "@/components/sidebar/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full h-[100vh] md:h-full justify-between">
      <Sidebar />
      <div className="flex flex-col px-[1.875rem] w-[60%]">
        <Header />
        <div>{children}</div>
      </div>
      <RightSidebar />
    </div>
  );
}
