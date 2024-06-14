import Image from "next/image";
import Link from "next/link";

const MobileHeaderProfile = () => {
  return (
    <Link
      href="/profile"
      className="min-w-[3.7rem] h-[3.7rem] mr-[1rem] items-center justify-center flex md:hidden relative"
    >
      <Image
        src="/images/wepik-export-20231128203407BKL1.jpeg"
        fill
        className="rounded-full"
        alt=""
      />
    </Link>
  );
};

export default MobileHeaderProfile;
