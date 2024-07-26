import { useState } from "react";
import PostSingleComment from "./PostSingleComment";

// const comments = [
//   {
//     id: 1,
//     username: "shey",
//     user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
//     created_at: "2023-14-03",
//     content:
//       "We are thrilled to have you as a supporter! Thank you for recommending our platform!",
//     replies: [
//       {
//         id: 2,
//         comment_id: 1,
//         username: "rose",
//         user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
//         created_at: "2023-14-03",
//         content: "Follow for more Amazing tips",
//       },
//       {
//         id: 3,
//         comment_id: 1,
//         username: "hana",
//         user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
//         created_at: "2023-14-03",
//         content: "Follow for more Amazing tips",
//       },
//     ],
//   },
//   {
//     id: 6,
//     username: "shey",
//     user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
//     created_at: "2023-14-03",
//     content:
//       "We are thrilled to have you as a supporter! Thank you for recommending our platform!",
//     replies: [
//       {
//         id: 7,
//         comment_id: 6,
//         username: "rose",
//         user_image: "/images/wepik-export-20231128203407BKL1.jpeg",
//         created_at: "2023-14-03",
//         content: "Follow for more Amazing tips",
//       },
//     ],
//   },
// ];

const PostComments = ({ comments }) => {
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  const handleShowReplyInput = (id) => {
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
            showReplyInput={selectedCommentId === comment.id}
            handleShowReplyInput={() => handleShowReplyInput(comment.id)}
            username={comment.username}
            userProfile={comment.user_image}
            content={comment.content}
          />
          {/* comment replies */}
          {comment.replies.map((rep) => (
            <PostSingleComment
              key={rep.id}
              showReplyInput={selectedCommentId === rep.id}
              handleShowReplyInput={() => handleShowReplyInput(rep.id)}
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
