const PostsContainer = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full mt-[3rem] gap-[1.5rem]">
      {children}
    </div>
  );
};

export default PostsContainer;
