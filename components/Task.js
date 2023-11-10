const Task = () => {
  return (
    <div className="md:w-56 md:h-56 h-32 w-32 cursor-pointer overflow-y-auto no-scrollbar relative bg-black rounded-lg shadow-lg hover:scale-105 transition-all duration-200 flex items-start justify-start flex-col p-2 md:p-3 overflow-hidden">
      <span className="flex items-center justify-between w-full">
        <h1 className="text-sm md:text-lg w-3/4 overflow-hidden">Title</h1>
        <p className="text-[8px] md:text-xs flex-wrap flex  py-1  px-2 text-gray-300 bg-yellow-500/80 rounded-xl">
          pending
        </p>
      </span>
      <p className="text-[10px] md:text-sm flex-wrap flex  p-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem
        ullam aliquid ex totam molestias sunt, expedita nam perspiciatis
        tenetur.
      </p>
    </div>
  );
};

export default Task;
