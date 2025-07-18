import { IoMdClose } from "react-icons/io";

interface Project {
  title: string;
  thumbnail: string;
  description: string;
}

interface ProjectPopUpProps {
  project: Project;
  handleClosePopUp: () => void;
}

export default function ProjectPopUp({ project, handleClosePopUp }: ProjectPopUpProps) {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0  z-99  backdrop-filter backdrop-blur-lg bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-[70%] h-[65%] rounded-sm flex justify-between">
        <div className="w-[40%] h-full p-2">
          <img className="w-full h-full object-cover" src={project.thumbnail} alt={project.title} />
        </div>
        <div className="w-[55%] flex flex-col justify-between py-10">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center  pr-10">
              <h2 className="text-[#3EB397] font-bold text-3xl capitalize">{project.title}</h2>
              <IoMdClose className="text-5xl cursor-pointer" onClick={handleClosePopUp} />
            </div>
          <p className="text-xl leading-[34px] text-[#1D1D1D99]">{project.description}</p>
          </div>
          <button className="text-left  text-[#3EB397] text-xl font-bold capitalize">see more</button>
        </div>
      </div>
    </div>
  );
}
