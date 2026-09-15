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
			className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl flex-col justify-center px-6 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-10"
		>
			<div className="grid items-center justify-between gap-12 lg:grid-cols-[1.1fr_0.9fr]">
				<div>
					<p className="hero-load-item text-sm font-semibold uppercase tracking-[0.2em] text-brand">
						{content.eyebrow}
					</p>
					<h1 className="hero-load-item hero-delay-1 mainText mt-5 text-5xl font-black leading-[1.02] text-white sm:text-7xl">
						Adonai Figueiredo
					</h1>
					<p className="hero-load-item hero-delay-2 mt-6 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-2xl sm:leading-10">
						{content.description}
					</p>

					<div className="hero-load-item hero-delay-3 mt-8 flex flex-wrap gap-3 text-sm font-medium text-neutral-200">
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

					<div className="hero-load-item hero-delay-4 mt-10 flex flex-wrap gap-4">
						<a
							href="#projects"
							className="rounded-full bg-brand px-6 py-3 font-semibold text-black transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
						>
							{content.projectsCta}
						</a>
						<a
							href="#about"
							className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition-[border-color,color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-brand hover:text-brand active:scale-[0.97]"
						>
							{content.trajectoryCta}
						</a>
					</div>
				</div>

				<div className="relative mx-auto w-full max-w-70 sm:max-w-90 lg:ml-auto lg:max-w-105">
					<div className="hero-ring absolute inset-3 rounded-full border border-brand/30 sm:inset-4" />
					<Image
						src="https://github.com/oliveiradonai.png"
						alt="Adonai Figueiredo"
						width={420}
						height={420}
						priority
						unoptimized
						className="hero-portrait relative aspect-square rounded-full border border-white/10 object-cover"
						sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
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
