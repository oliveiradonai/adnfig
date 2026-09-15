import projectsList from "@/projects";
import { ProjectCarousel } from "./project-carousel";
import { ScrollReveal } from "./scroll-reveal";

type ProjectsProps = {
	content: {
		eyebrow: string;
		title: string;
		description: string;
		caseStudy: string;
		repository: (project: string) => string;
		liveProject: (project: string) => string;
		previous: string;
		next: string;
		slides: string;
		showProject: (project: string) => string;
		descriptions: Record<string, string>;
	};
};

export function Projects({ content }: ProjectsProps) {
	const localizedProjects = projectsList.map((project) => ({
		...project,
		description: content.descriptions[project.id] ?? project.description,
		liveProjectLabel: content.liveProject(project.name),
		repositoryLabel: content.repository(project.name),
		showLabel: content.showProject(project.name),
	}));

	return (
		<section
			id="projects"
			className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-8 sm:py-24"
		>
			<ScrollReveal className="max-w-3xl">
				<p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
					{content.eyebrow}
				</p>
				<h2 className="mainText mt-4 text-4xl font-bold text-white sm:text-6xl">
					{content.title}
				</h2>
				<p className="mt-6 text-base leading-8 text-neutral-300 sm:text-lg">
					{content.description}
				</p>
			</ScrollReveal>

			<ScrollReveal delay={80}>
				<ProjectCarousel
					projects={localizedProjects}
					content={{
						caseStudy: content.caseStudy,
						previous: content.previous,
						next: content.next,
						slides: content.slides,
					}}
				/>
			</ScrollReveal>
		</section>
	);
}
