import Image from "next/image";
import { Technologies } from "./technologies";

type HeroProps = {
	content: {
		eyebrow: string;
		description: string;
		stack: string;
		experience: string;
		languages: string;
		projectsCta: string;
		trajectoryCta: string;
		technologies: string;
	};
};

export function Hero({ content }: HeroProps) {
	return (
		<section
			id="top"
			className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl flex-col justify-center px-6 pb-16 pt-10 sm:px-8"
		>
			<div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
						{content.eyebrow}
					</p>
					<h1 className="mainText mt-5 text-5xl font-black leading-[1.02] text-white sm:text-7xl">
						Adonai Figueiredo
					</h1>
					<p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-2xl sm:leading-10">
						{content.description}
					</p>

					<div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-neutral-200">
						<span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
							{content.experience}
						</span>
						<span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
							{content.stack}
						</span>
						<span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
							{content.languages}
						</span>
					</div>

					<div className="mt-10 flex flex-wrap gap-4">
						<a
							href="#projects"
							className="rounded-full bg-brand px-6 py-3 font-semibold text-black transition-transform duration-200 ease-out active:scale-[0.97]"
						>
							{content.projectsCta}
						</a>
						<a
							href="#about"
							className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition-[border-color,color,transform] duration-200 ease-out hover:border-brand hover:text-brand active:scale-[0.97]"
						>
							{content.trajectoryCta}
						</a>
					</div>
				</div>

				<div className="relative mx-auto w-full max-w-105">
					<div className="absolute inset-4 rounded-full border border-brand/30" />
					<Image
						src="https://github.com/oliveiradonai.png"
						alt="Adonai Figueiredo"
						width={420}
						height={420}
						priority
						className="relative aspect-square rounded-full border border-white/10 object-cover"
						sizes="(max-width: 1024px) 80vw, 420px"
					/>
				</div>
			</div>

			<Technologies />
			<p className="mt-8 text-sm uppercase tracking-[0.2em] text-neutral-500">
				{content.technologies}
			</p>
		</section>
	);
}
