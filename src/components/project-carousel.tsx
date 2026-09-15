"use client";

import {
	IconArrowLeft,
	IconArrowRight,
	IconBrandGithub,
	IconExternalLink,
} from "@tabler/icons-react";
import Image from "next/image";
import { memo, useCallback, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import type { Project } from "@/projects";

type ProjectCarouselProps = {
	projects: Array<
		Project & {
			liveProjectLabel: string;
			repositoryLabel: string;
			showLabel: string;
		}
	>;
	content: {
		caseStudy: string;
		previous: string;
		next: string;
		slides: string;
	};
};

const iconClassName =
	"rounded-full border border-white/10 bg-white/5 p-3 text-white transition-[border-color,background-color,color,transform] duration-150 ease-[var(--ease-out)] hover:border-brand hover:bg-brand hover:text-black active:scale-[0.97]";

export function ProjectCarousel({ projects, content }: ProjectCarouselProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const projectCount = projects.length;
	const activeProject = projects[activeIndex];
	const previousIndex = activeIndex === 0 ? projectCount - 1 : activeIndex - 1;
	const nextIndex = activeIndex === projectCount - 1 ? 0 : activeIndex + 1;

	const slideStyle = useMemo(
		() => ({ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }),
		[activeIndex],
	);

	const goToPrevious = useCallback(() => {
		setActiveIndex((currentIndex) =>
			currentIndex === 0 ? projectCount - 1 : currentIndex - 1,
		);
	}, [projectCount]);

	const goToNext = useCallback(() => {
		setActiveIndex((currentIndex) =>
			currentIndex === projectCount - 1 ? 0 : currentIndex + 1,
		);
	}, [projectCount]);

	const goToSlide = useCallback((index: number) => {
		setActiveIndex(index);
	}, []);

	if (!activeProject) {
		return null;
	}

	return (
		<div className="mt-12">
			<div className="overflow-hidden rounded-lg border border-white/10 bg-neutral-950 shadow-2xl shadow-brand/10">
				<div
					className="flex will-change-transform transition-transform duration-[250ms] ease-[var(--ease-in-out)] motion-reduce:transition-none"
					style={slideStyle}
				>
					{projects.map((project, index) => (
						<ProjectSlide
							key={project.id}
							project={project}
							caseStudy={content.caseStudy}
							priority={index === 0}
							shouldLoadImage={
								index === activeIndex ||
								index === previousIndex ||
								index === nextIndex
							}
						/>
					))}
				</div>
			</div>

			<div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
				<div aria-live="polite">
					<p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
						{String(activeIndex + 1).padStart(2, "0")} /{" "}
						{String(projectCount).padStart(2, "0")}
					</p>
					<h3 className="mainText mt-2 text-2xl font-bold text-white">
						{activeProject.name}
					</h3>
				</div>

				<div className="flex items-center gap-3">
					<a
						href={activeProject.urlRepo}
						target="_blank"
						rel="noopener noreferrer"
						title={activeProject.repositoryLabel}
						aria-label={activeProject.repositoryLabel}
						className={cn(iconClassName)}
					>
						<IconBrandGithub size={22} stroke={1.8} />
					</a>
					<a
						href={activeProject.urlProject}
						target="_blank"
						rel="noopener noreferrer"
						title={activeProject.liveProjectLabel}
						aria-label={activeProject.liveProjectLabel}
						className={cn(iconClassName)}
					>
						<IconExternalLink size={22} stroke={1.8} />
					</a>
					<button
						type="button"
						onClick={goToPrevious}
						title={content.previous}
						aria-label={content.previous}
						className={cn(iconClassName)}
					>
						<IconArrowLeft size={22} stroke={1.8} />
					</button>
					<button
						type="button"
						onClick={goToNext}
						title={content.next}
						aria-label={content.next}
						className={cn(iconClassName)}
					>
						<IconArrowRight size={22} stroke={1.8} />
					</button>
				</div>
			</div>

			<nav className="mt-6 flex gap-2" aria-label={content.slides}>
				{projects.map((project, index) => (
					<button
						key={project.id}
						type="button"
						onClick={() => goToSlide(index)}
						aria-label={project.showLabel}
						aria-current={activeIndex === index ? "true" : undefined}
						className={cn(
							"group h-2.5 flex-1 rounded-full bg-white/10 p-[3px] transition-transform duration-150 ease-[var(--ease-out)] active:scale-[0.98]",
						)}
					>
						<span
							className={cn(
								"block h-full origin-left rounded-full transition-[background-color,transform] duration-150 ease-[var(--ease-out)]",
								activeIndex === index
									? "scale-x-100 bg-brand"
									: "scale-x-0 bg-brand group-hover:scale-x-100",
							)}
						/>
					</button>
				))}
			</nav>
		</div>
	);
}

const ProjectSlide = memo(function ProjectSlide({
	project,
	caseStudy,
	priority,
	shouldLoadImage,
}: {
	project: Project;
	caseStudy: string;
	priority: boolean;
	shouldLoadImage: boolean;
}) {
	return (
		<article className="grid w-full shrink-0 bg-neutral-950 lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)]">
			<div className="relative min-h-[260px] min-w-0 overflow-hidden sm:min-h-[340px] lg:h-full lg:min-h-0">
				{shouldLoadImage ? (
					<Image
						src={project.urlImage}
						alt={`${project.name} screenshot`}
						fill
						priority={priority}
						unoptimized
						sizes="(max-width: 1024px) 100vw, 680px"
						className="object-cover"
					/>
				) : (
					<div className="h-full w-full bg-neutral-900" aria-hidden="true" />
				)}
			</div>

			<div className="min-w-0 border-t border-white/10 p-6 sm:p-8 lg:flex lg:flex-col lg:justify-between lg:gap-10 lg:border-l lg:border-t-0 lg:p-10">
				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
						{caseStudy}
					</p>
					<h3 className="mainText mt-4 text-2xl font-bold text-white sm:text-3xl">
						{project.name}
					</h3>
					<p className="mt-5 text-base leading-8 text-neutral-300">
						{project.description}
					</p>
				</div>

				<ul className="mt-8 flex flex-wrap gap-3 text-4xl text-brand lg:mt-0">
					{project.technologies.map((technology) => (
						<li key={`${project.id}_${technology}`} className="leading-none">
							<i className={technology} aria-hidden="true" />
						</li>
					))}
				</ul>
			</div>
		</article>
	);
});
