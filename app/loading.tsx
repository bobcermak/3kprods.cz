const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-svh gap-4">
      <div className="relative flex h-16 w-16 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-light-blue opacity-20 duration-1000"></span>
        <span className="absolute inline-flex h-[80%] w-[80%] animate-ping rounded-full bg-light-blue opacity-40 duration-1000 delay-150"></span>
        <span className="relative inline-flex h-7 w-7 rounded-full bg-light-blue shadow-lg shadow-light-blue-blue-500/50"></span>
      </div>
    </div>
  );
};
export default Loading;