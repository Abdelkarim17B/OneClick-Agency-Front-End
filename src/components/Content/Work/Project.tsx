interface ProjectType {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  [key: string]: unknown; // For any additional properties
}

export default function Project({ project, handleOpenPopUp }: { 
  readonly project: ProjectType; 
  readonly handleOpenPopUp: (project: ProjectType) => void; 
}) {
  return (
    <div className="w-[25%] h-[670px] bg-white flex flex-col gap-5 p-2 rounded-sm shadow-md drop-shadow-md">
      <div className="w-full  h-[60%]">
        <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
      </div>
      <div className="w-full px-6  flex flex-col gap-2 h-[30%]">
        <h2 className="capitalize text-[#3EB397] text-3xl font-bold">{project.title}</h2>
        <p className="line-clamp-4 text-[#1D1D1D99] w-[80%] text-[21px] font-semibold">{project.description}</p>
      </div>
      <div className="px-6 w-full  text-lg h-[10%] flex flex-col justify-center items-start">
        <button className="text-[#3EB397] font-bold capitalize text-[21px]" onClick={() => handleOpenPopUp(project)}>see more</button>
      </div>
    </div>
  )
}
