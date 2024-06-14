import { useState } from "react";
import PostSingleComment from "./PostSingleComment";
import PostAddComment from "./PostAddComment";

const comments = [
  {
    id: 1,
    username: "shey",
    user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
    created_at: "2023-14-03",
    content:
      "We are thrilled to have you as a supporter! Thank you for recommending our platform!",
    replies: [
      {
        id: 2,
        username: "ali",
        user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
        created_at: "2023-14-03",
        content: "Follow for more Amazing tips",
      },
      {
        id: 3,
        username: "hana",
        user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
        created_at: "2023-14-03",
        content: "Follow for more Amazing tips",
      },
    ],
  },
  {
    id: 1,
    username: "shey",
    user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
    created_at: "2023-14-03",
    content:
      "We are thrilled to have you as a supporter! Thank you for recommending our platform!",
    replies: [
      {
        id: 2,
        username: "ali",
        user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
        created_at: "2023-14-03",
        content: "Follow for more Amazing tips",
      },
    ],
  },
];

const PostComments = () => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  const handleShowReplyInput = (id) => {
    setShowReplyInput(true);
    setSelectedCommentId(id);
  };

  return (
    <div className="mt-[0.5rem]">
      <h3 className="text-dark-gray dark:text-[#d6d6d6] font-semibold text-[1.125rem] mt-[1rem]">
        Comments
      </h3>
      {comments?.map((comment) => (
        <div key={comment.id}>
          <PostSingleComment
            showReplyInput={showReplyInput}
            handleShowReplyInput={() => handleShowReplyInput(comment.id)}
            username={comment.username}
            userProfile={comment.user_image}
            content={comment.content}
          />
          {/* comment replys */}
          {comment.replies.map((rep) => (
            <PostSingleComment
              key={rep.id}
              showReplyInput={showReplyInput}
              handleShowReplyInput={() => handleShowReplyInput(rep.id)}
              isReply={true}
              cln="ml-[4rem]"
              username={rep.username}
              userProfile={rep.user_image}
              content={rep.content}
            />
          ))}
          {showReplyInput && <PostAddComment cln="mb-[1.5rem] ml-[4rem]" />}
        </div>
      ))}
    </div>
  );
};

export default PostComments;
