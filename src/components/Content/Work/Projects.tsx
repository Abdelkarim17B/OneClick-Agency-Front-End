import SectionLayout from "../../Shared/SectionLayout";
import youtube from "/projects/youtube.png";
import tiktok from "/projects/tiktok.png";
import meta from "/projects/meta.png";
import Project from "./Project";

import { useState } from "react";
import ProjectPopUp from "./ProjectPopUp";
type Project =  {
  id: number,
  title: string,
  thumbnail: string,
  description: string,
  images?: string[]
}



const projects: Project[] = [
  {id: 1, title: "tiktok logo", thumbnail: youtube, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sint velit facere! Cum ipsa voluptatum veritatis aliquid autem illo quidem itaque optio vel, illum aperiam labore nobis fugiat, voluptate nesciunt dolores maxime unde omnis dolor numquam iure voluptatem mollitia. Distinctio dolore doloribus vitae quia sunt harum atque veritatis fuga reiciendis totam? Placeat numquam doloribus libero asperiores deleniti nobis eligendi. Corporis reprehenderit minima quia, dolorum suscipit eos laboriosam ut molestiae dignissimos. Eligendi rem, error dolore eos a quod nihil ex. Magni nisi, dicta cum, ipsam nam autem corporis sunt perspiciatis tempora a veniam voluptatem ipsa sed necessitatibus exercitationem velit ratione at!"},
  {id: 2, title: "Meta Logo logo", thumbnail: tiktok, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sint velit facere! Cum ipsa voluptatum veritatis aliquid autem illo quidem itaque optio vel, illum aperiam labore nobis fugiat, voluptate nesciunt dolores maxime unde omnis dolor numquam iure voluptatem mollitia. Distinctio dolore doloribus vitae quia sunt harum atque veritatis fuga reiciendis totam? Placeat numquam doloribus libero asperiores deleniti nobis eligendi. Corporis reprehenderit minima quia, dolorum suscipit eos laboriosam ut molestiae dignissimos. Eligendi rem, error dolore eos a quod nihil ex. Magni nisi, dicta cum, ipsam nam autem corporis sunt perspiciatis tempora a veniam voluptatem ipsa sed necessitatibus exercitationem velit ratione at!"},
  {id: 3, title: "Youtube logo", thumbnail: meta, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sint velit facere! Cum ipsa voluptatum veritatis aliquid autem illo quidem itaque optio vel, illum aperiam labore nobis fugiat, voluptate nesciunt dolores maxime unde omnis dolor numquam iure voluptatem mollitia. Distinctio dolore doloribus vitae quia sunt harum atque veritatis fuga reiciendis totam? Placeat numquam doloribus libero asperiores deleniti nobis eligendi. Corporis reprehenderit minima quia, dolorum suscipit eos laboriosam ut molestiae dignissimos. Eligendi rem, error dolore eos a quod nihil ex. Magni nisi, dicta cum, ipsam nam autem corporis sunt perspiciatis tempora a veniam voluptatem ipsa sed necessitatibus exercitationem velit ratione at!"},
  {id: 4, title: "tiktok logo2", thumbnail: youtube, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sint velit facere! Cum ipsa voluptatum veritatis aliquid autem illo quidem itaque optio vel, illum aperiam labore nobis fugiat, voluptate nesciunt dolores maxime unde omnis dolor numquam iure voluptatem mollitia. Distinctio dolore doloribus vitae quia sunt harum atque veritatis fuga reiciendis totam? Placeat numquam doloribus libero asperiores deleniti nobis eligendi. Corporis reprehenderit minima quia, dolorum suscipit eos laboriosam ut molestiae dignissimos. Eligendi rem, error dolore eos a quod nihil ex. Magni nisi, dicta cum, ipsam nam autem corporis sunt perspiciatis tempora a veniam voluptatem ipsa sed necessitatibus exercitationem velit ratione at!"},
  {id: 5, title: "Meta Logo logo2", thumbnail: tiktok, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sint velit facere! Cum ipsa voluptatum veritatis aliquid autem illo quidem itaque optio vel, illum aperiam labore nobis fugiat, voluptate nesciunt dolores maxime unde omnis dolor numquam iure voluptatem mollitia. Distinctio dolore doloribus vitae quia sunt harum atque veritatis fuga reiciendis totam? Placeat numquam doloribus libero asperiores deleniti nobis eligendi. Corporis reprehenderit minima quia, dolorum suscipit eos laboriosam ut molestiae dignissimos. Eligendi rem, error dolore eos a quod nihil ex. Magni nisi, dicta cum, ipsam nam autem corporis sunt perspiciatis tempora a veniam voluptatem ipsa sed necessitatibus exercitationem velit ratione at!"},
  {id: 6, title: "Youtube logo2", thumbnail: meta, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sint velit facere! Cum ipsa voluptatum veritatis aliquid autem illo quidem itaque optio vel, illum aperiam labore nobis fugiat, voluptate nesciunt dolores maxime unde omnis dolor numquam iure voluptatem mollitia. Distinctio dolore doloribus vitae quia sunt harum atque veritatis fuga reiciendis totam? Placeat numquam doloribus libero asperiores deleniti nobis eligendi. Corporis reprehenderit minima quia, dolorum suscipit eos laboriosam ut molestiae dignissimos. Eligendi rem, error dolore eos a quod nihil ex. Magni nisi, dicta cum, ipsam nam autem corporis sunt perspiciatis tempora a veniam voluptatem ipsa sed necessitatibus exercitationem velit ratione at!"},
  {id: 7, title: "tiktok logo3", thumbnail: youtube, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sint velit facere! Cum ipsa voluptatum veritatis aliquid autem illo quidem itaque optio vel, illum aperiam labore nobis fugiat, voluptate nesciunt dolores maxime unde omnis dolor numquam iure voluptatem mollitia. Distinctio dolore doloribus vitae quia sunt harum atque veritatis fuga reiciendis totam? Placeat numquam doloribus libero asperiores deleniti nobis eligendi. Corporis reprehenderit minima quia, dolorum suscipit eos laboriosam ut molestiae dignissimos. Eligendi rem, error dolore eos a quod nihil ex. Magni nisi, dicta cum, ipsam nam autem corporis sunt perspiciatis tempora a veniam voluptatem ipsa sed necessitatibus exercitationem velit ratione at!"},
  {id: 8, title: "Meta Logo logo3", thumbnail: tiktok, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sint velit facere! Cum ipsa voluptatum veritatis aliquid autem illo quidem itaque optio vel, illum aperiam labore nobis fugiat, voluptate nesciunt dolores maxime unde omnis dolor numquam iure voluptatem mollitia. Distinctio dolore doloribus vitae quia sunt harum atque veritatis fuga reiciendis totam? Placeat numquam doloribus libero asperiores deleniti nobis eligendi. Corporis reprehenderit minima quia, dolorum suscipit eos laboriosam ut molestiae dignissimos. Eligendi rem, error dolore eos a quod nihil ex. Magni nisi, dicta cum, ipsam nam autem corporis sunt perspiciatis tempora a veniam voluptatem ipsa sed necessitatibus exercitationem velit ratione at!"},
  {id: 9, title: "Youtube logo3", thumbnail: meta, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sint velit facere! Cum ipsa voluptatum veritatis aliquid autem illo quidem itaque optio vel, illum aperiam labore nobis fugiat, voluptate nesciunt dolores maxime unde omnis dolor numquam iure voluptatem mollitia. Distinctio dolore doloribus vitae quia sunt harum atque veritatis fuga reiciendis totam? Placeat numquam doloribus libero asperiores deleniti nobis eligendi. Corporis reprehenderit minima quia, dolorum suscipit eos laboriosam ut molestiae dignissimos. Eligendi rem, error dolore eos a quod nihil ex. Magni nisi, dicta cum, ipsam nam autem corporis sunt perspiciatis tempora a veniam voluptatem ipsa sed necessitatibus exercitationem velit ratione at!"},
]


export default function Projects() {
  const projectsPerPage = 3; 
  const [currentPage, setCurrentPage] = useState(1); 
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);


  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleOpenPopUp = (project) => {
    setSelectedProject(project);
    setOpenPopUp(true);
    
  }

  const handleClosePopUp = () => {
    setOpenPopUp(false);
  }

  return (
    <>
    <SectionLayout PatternModel={2}>
      <div className="w-full h-screen absolute left-0 top-0 translate flex flex-col gap-20 items-center justify-center  ">
        <ul className="flex items-center justify-center gap-16 relative w-full pt-20 duration-300">
          {currentProjects.map((project) => (
            <Project key={project.id} project={project}  handleOpenPopUp={handleOpenPopUp} />
          ))}
        </ul>

          <div className="flex items-center gap-5">
            {currentPage > 1 && (
          <button type="button" className=" relative  text-white font-bold text-3xl cursor-pointer" onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
            )}
            {currentPage < currentProjects.length && (
          <button type="button" className=" relative  text-white font-bold text-3xl cursor-pointer" onClick={nextPage} disabled={indexOfLastProject >= projects.length}>
            Next
          </button>
            )}
            </div>
      </div>
    </SectionLayout>
      {openPopUp && selectedProject && (
        <ProjectPopUp project={selectedProject} handleClosePopUp={handleClosePopUp} />
      )}
    </>
  )
}
