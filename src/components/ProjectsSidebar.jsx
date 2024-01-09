import Button from "./Button";

export default function ProjectsSidebar({
  onAddStartProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 py-4 px-4 bg-stone-900 rounded-lg mt-10">
      <h2 className="text-stone-100">My Projects</h2>
      <Button onClick={onAddStartProject}> + Add Projects </Button>
      <ul className="my-2">
        {projects.map((project) => {
          let cssCls =
            "rounded-sm w-full px-2 py-1 text-left my-1 hover:text-stone-200 hover:bg-stone-800";

          if (project.id === selectedProjectId) {
            cssCls += " bg-stone-800 text-stone-200";
          } else {
            cssCls += " bg-stone-800 text-stone-400";
          }
          return (
            <>
              <li key={project.id}>
                <button
                  className={cssCls}
                  onClick={() => onSelectProject(project.id)}
                >
                  {project.title}
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </aside>
  );
}
