import Username from "../Username";
import SmallProfileImage from "../SmallProfileImage";

const PostSingleComment = ({
  cln,
  isReply,
  username,
  userProfile,
  content,
  handleShowReplyInput,
}) => {
  return (
    <div className={`${cln} mt-[1rem] flex gap-[0.5rem]`}>
      {/* user profile */}
      <SmallProfileImage img={userProfile} />

      <div className="w-full">
        <div className="w-full h-max bg-[#0C1323] rounded-lg rounded-tl-none px-[1rem] py-[0.5rem]">
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
          <button
            className="px-[0.5rem] rounded-md light-gray-hover"
            onClick={handleShowReplyInput}
          >
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
