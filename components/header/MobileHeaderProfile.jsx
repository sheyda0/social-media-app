import Image from "next/image";
import Link from "next/link";
import ProfileImage from "../../assets/images/wepik-export-20231128203407BKL1.jpeg";

const MobileHeaderProfile = () => {
  return (
    <Link
      href="/profile"
      className="w-[3.7rem] h-[3.7rem] mr-[1rem] items-center justify-center flex md:hidden"
    >
      <Image
        src={ProfileImage}
        width={60}
        height={60}
        className="rounded-full"
        alt=""
      />
    </Link>
  );
};

export default MobileHeaderProfile;
