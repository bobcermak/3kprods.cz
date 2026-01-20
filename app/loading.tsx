import { ImSpinner2 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 w-full">
      <ImSpinner2 className="text-blue animate-spin" size={60}/>
    </div>
  );
};
export default Loading;