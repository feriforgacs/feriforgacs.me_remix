interface ProjectCardProps {
  projectName: string;
  projectURL?: string;
  projectImage: string;
  projectDateOfLaunch: string;
  projectStatus: string;
  children: React.ReactNode;
}

export default function ProjectCard({
  projectName = "Default Project Name",
  projectURL = "",
  projectImage = "",
  projectDateOfLaunch = "",
  projectStatus = "",
  children,
}: ProjectCardProps) {
  return (
    <div className="bg-slate-900 mb-10 p-10 rounded-sm">
      <img
        src={`/assets/projects/${projectImage}`}
        alt={`${projectName} logo`}
        width={100}
        height={100}
        className="mb-10 rounded-lg mx-auto"
      />

      <h3 className="text-lg font-bold mb-10">{projectName}</h3>
      <div className="mb-10 leading-loose space-y-5">{children}</div>
      <p className="mb-5">
        <strong>Date of launch:</strong>{" "}
        <span className="bg-blue-800 rounded-2xl py-1 px-3">
          {projectDateOfLaunch}
        </span>
      </p>
      <p className="mb-5">
        <strong>Status:</strong> {projectStatus}
      </p>
      {projectURL ? (
        <a
          href={projectURL}
          target="_blank"
          rel="noreferrer"
          className="text-green-400 hover:underline"
        >
          View {projectName}
        </a>
      ) : (
        ""
      )}
    </div>
  );
}
