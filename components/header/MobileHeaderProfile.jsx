import Image from "next/image";
import ProfileImage from "../../assets/images/wepik-export-20231128203407BKL1.jpeg";

const MobileHeaderProfile = () => {
  return (
    <div>
      <Image
        src={ProfileImage}
        width={160}
        height={160}
        className="rounded-full"
        alt=""
      />
    </div>
  );
};

export default MobileHeaderProfile;
