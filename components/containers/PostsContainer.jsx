const PostsContainer = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full mt-[3rem] gap-[1rem]">
      {children}
    </div>
  );
};

export default PostsContainer;
