import { useState } from "react";
import PostSingleComment from "./PostSingleComment";
import ProfileImage from "../../assets/images/wepik-export-20231128203407BKL1.jpeg";
import ProfileImage2 from "../../assets/images/handsome-confident-smiling-man-with-hands-crossed-chest.jpg";
import ProfileImage3 from "../../assets/images/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg";
import { comment } from "postcss";

const comments = [
  {
    id: 1,
    username: "shey",
    user_image: ProfileImage,
    created_at: "2023-14-03",
    content:
      "We are thrilled to have you as a supporter! Thank you for recommending our platform!",
    replies: [
      {
        id: 2,
        username: "ali",
        user_image: ProfileImage2,
        created_at: "2023-14-03",
        content: "Follow for more Amazing tips",
      },
      {
        id: 3,
        username: "hana",
        user_image: ProfileImage3,
        created_at: "2023-14-03",
        content: "Follow for more Amazing tips",
      },
    ],
  },
  {
    id: 1,
    username: "shey",
    user_image: ProfileImage,
    created_at: "2023-14-03",
    content:
      "We are thrilled to have you as a supporter! Thank you for recommending our platform!",
    replies: [
      {
        id: 2,
        username: "ali",
        user_image: ProfileImage2,
        created_at: "2023-14-03",
        content: "Follow for more Amazing tips",
      },
    ],
  },
];

const PostComments = () => {
  const [showReply, setShowReply] = useState(false);

  const handleShowReply = () => {
    setShowReply(true);
  };

  return (
    <div className="mt-[0.5rem]">
      <h3 className="text-dark-gray dark:text-[#d6d6d6] font-semibold text-[1.125rem] mt-[1rem]">
        Comments
      </h3>
      {comments?.map((comment) => (
        <div key={comment.id}>
          <PostSingleComment
            showReply={showReply}
            handleShowReply={handleShowReply}
            username={comment.username}
            userProfile={comment.user_image}
            content={comment.content}
          />
          {/* comment replys */}
          {comment.replies.map((rep) => (
            <PostSingleComment
              key={rep.id}
              showReply={showReply}
              handleShowReply={handleShowReply}
              isReply={true}
              cln="ml-[4rem]"
              username={rep.username}
              userProfile={rep.user_image}
              content={rep.content}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PostComments;
