import Image from "next/image";
import Username from "../Username";
import Link from "next/link";

const PostUserProfile = ({ user }) => {
  return (
    <Link href="/" className="flex gap-[1rem]">
      <Image
        src={user.profile}
        width={60}
        height={60}
        className="rounded-full"
        alt=""
      />
      <div className="mt-[1rem]">
        <Username>{user.name}</Username>
        <span className="text-gray font-semibold text-[0.75rem] capitalize">
          5 minutes ago
        </span>
      </div>
    </Link>
  );
};

export default PostUserProfile;
