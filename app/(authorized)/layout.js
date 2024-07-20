import MiddlePart from "@/components/home/MiddlePart";
import RightSidebar from "@/components/right_sidebar/RightSidebar";
import Sidebar from "@/components/sidebar/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full lg:h-full justify-between">
      <Sidebar />
      <MiddlePart>{children}</MiddlePart>
      <RightSidebar />
    </div>
  );
}
