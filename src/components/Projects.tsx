import { PortfolioDataModel } from "../model/PortfolioDataModel";

type ProjectsProps = Pick<PortfolioDataModel, "myProjects">;

export default function Projects({ myProjects: myProjects }: ProjectsProps) {
  return (
    <section className="flex flex-col gap-4 rounded-2xl mx-2">
      {myProjects.map((project, index) => {
        return (
          <article
            key={index}
            className="p-4 rounded-2xl border-2 border-onSecondary"
          >
            <header className="flex flex-col max-w-64 md:max-w-full sm:max-w-full">
              <h3 className="text-sm text-onSurface text-opacity-80 tracking-wider font-semibold">
                {project.name}
              </h3>

              <footer className="flex flex-row mt-2">
                <img
                    key={index}
                    className="h-8"
                    src={`${project.techList}&theme=dark`}
                    alt={`${project.name} icon`}
                    loading="lazy"
                  />
              </footer>
            </header>

            <div className="flex flex-row w-full justify-between mt-4 gap-2">
              {project.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  className="rounded-lg overflow-scroll"
                  src={screenshot}
                  alt={`${project.name} icon`}
                />
              ))}
            </div>

            <footer className="mt-6">
              <p className="text-sm mb-2 text-onSurface text-opacity-80">
                {project.description}
              </p>
              <a
                href={project.link}
                className="transition-all text-sm text-primary hover:font-semibold"
                target="_blank"
                rel="noreferrer"
              >
                Ver en GitHub
              </a>
            </footer>
          </article>
        );
      })}
    </section>
  );
}
