import Image from "next/image";
import ProfileImage from "../../assets/images/wepik-export-20231128203407BKL1.jpeg";
import Username from "../Username";

const PostSingleComment = ({
  cln,
  isReply,
  username,
  userProfile,
  content,
}) => {
  return (
    <div className={`${cln} mt-[1rem] flex gap-[0.5rem]`}>
      {/* user profile */}
      <div className="min-w-[3.5rem] h-[3.5rem] relative">
        <Image
          src={userProfile}
          fill
          className="rounded-full object-cover w-full h-full"
          alt=""
        />
      </div>

      <div className="w-full">
        <div className="w-full h-max bg-lighter-gray dark:bg-[#41414b] rounded-lg rounded-tl-none px-[1rem] py-[0.5rem]">
          {/* user info */}
          <div className="flex gap-[0.5rem]">
            <Username>{username}</Username>
            <div className="flex items-center gap-[0.5rem] text-gray">
              <span>•</span>
              <span>2nd</span>
            </div>
          </div>
          {/* comment content */}
          <div className="mt-[0.5rem] text-dark-gray dark:text-[#d6d6d6] text-[1.125rem]">
            {content}
          </div>
        </div>

        <div
          className="text-gray flex gap-[1rem] mt-[0.5rem]"
          // onClick={handlePostComment}
        >
          <button className="px-[0.5rem] rounded-md light-gray-hover">
            Reply
          </button>
          {!isReply && (
            <>
              <span>•</span>
              <span>1 Reply</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostSingleComment;
