import projects from "@/lib/projects";
import ProjectCard from "../components/projectCard";

function Projects() {
  const projectsData = projects;
  return (
    <div className="text-white border-y p-8 flex flex-col justify-center gap-4">
      <h2 className="text-lg font-semibold">Top Crypto Creators and Projects to Follow</h2>
      <p className="text-md text-gray-400">Answers to your crypto doubts, straight from the experts</p>
      <ul className="flex justify-around items-center gap-1">
        {projectsData.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
    </div>
  );
}

export default Projects;
