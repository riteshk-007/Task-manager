import AddTaskHeader from "@/components/AddTaskHeader";
import Header from "@/components/Header";

const page = () => {
  return (
    <div className="text-white w-full md:w-[calc(100%-256px)] h-screen p-2 px-3 items-center justify-center">
      <Header />
      <AddTaskHeader />
    </div>
  );
};

export default page;
