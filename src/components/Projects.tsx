"use client";
import projectsList from "@/projects";
import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

export function Projects() {
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const [loaded, setLoaded] = useState<boolean>(false);

	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		initial: 0,
		loop: true,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		},
		slides: {
			spacing: 15,
		},
	});

	return (
		<div className="w-full px-8 sm:p-0 sm:max-w-[1120px] my-0 mx-auto min-h-[100vh] flex items-center justify-center flex-col">
			<div className="text-4xl font-bold mainText text-brand">My projects</div>
			<div className="text-lg text-center text-gray-400 mt-8 max-w-[650px]">
				Take a peek at some of the projects I created during my development
				career. You can click/hover on project to see a brief description 😉.
			</div>

			<div ref={sliderRef} className="keen-slider mt-8">
				{projectsList.map((project) => {
					return (
						<div
							key={project.id}
							className="keen-slider__slide flex flex-col items-center justify-center gap-8"
						>
							<div className="text-3xl mainText font-semibold uppercase">
								{project.name}
							</div>
							<div
								className="w-auto h-[350px] sm:w-[1120px] sm:h-[500px] rounded-md object-cover bg-no-repeat bg-cover bg-center"
								style={{
									backgroundImage: `url(${project.urlImage})`,
								}}
							>
								<div className="h-[350px] sm:h-[500px] flex items-start justify-center flex-col rounded-md px-16 text-xl opacity-0 hover:opacity-100 active:opacity-100 hover:bg-black active:bg-black hover:bg-opacity-80 active:bg-opacity-80 transition ease-in">
									<span className="text-xl sm:text-2xl text-brand font-bold">
										About the project:
									</span>
									<p className="text-base sm:text-lg">{project.description}</p>
								</div>
							</div>
							<div className="flex flex-row items-center justify-center gap-8">
								<a
									href={project.urlRepo}
									target="_blank"
									rel="noopener noreferrer"
									title="Open GitHub repository"
								>
									<GithubLogo
										weight="fill"
										size={40}
										className="hover:text-brand transition ease-linear"
									/>
								</a>

								<a
									href={project.urlProject}
									target="_blank"
									rel="noopener noreferrer"
									title="Open deployed demo"
								>
									<ArrowSquareOut
										weight="fill"
										size={40}
										className="hover:text-brand transition ease-linear"
									/>
								</a>
							</div>
						</div>
					);
				})}
			</div>
			{loaded && instanceRef.current && (
				<div className="dots mt-4">
					{[
						...Array(instanceRef.current.track.details.slides.length).keys(),
					].map((idx) => {
						return (
							<button
								type="button"
								key={idx}
								onClick={() => {
									instanceRef.current?.moveToIdx(idx);
								}}
								className={`dot${currentSlide === idx ? " active" : ""}`}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
}
