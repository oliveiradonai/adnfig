type AboutProps = {
	content: {
		eyebrow: string;
		title: string;
		description: string;
		skills: Array<[string, string]>;
		timeline: Array<{
			company: string;
			role: string;
			period: string;
			description: string;
		}>;
	};
};

export function About({ content }: AboutProps) {
	return (
		<section
			id="about"
			className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-24 sm:px-8"
		>
			<div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
						{content.eyebrow}
					</p>
					<h2 className="mainText mt-4 text-4xl font-bold text-white sm:text-6xl">
						{content.title}
					</h2>
					<p className="mt-6 text-base leading-8 text-neutral-300 sm:text-lg">
						{content.description}
					</p>

					<div className="mt-10 grid gap-3">
						{content.skills.map(([label, value]) => (
							<div
								key={label}
								className="grid gap-1 border-b border-white/10 pb-3 sm:grid-cols-[140px_1fr]"
							>
								<span className="font-semibold text-white">{label}</span>
								<span className="text-neutral-300">{value}</span>
							</div>
						))}
					</div>
				</div>

				<ol className="relative space-y-8 border-l border-white/10 pl-6">
					{content.timeline.map((item) => (
						<li key={`${item.company}_${item.period}`} className="relative">
							<div className="absolute -left-7.75 top-1 h-3 w-3 rounded-full bg-brand shadow-[0_0_0_6px_rgba(229,75,75,0.12)]" />
							<p className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
								{item.period}
							</p>
							<h3 className="mt-2 text-xl font-semibold text-white">
								{item.company}{" "}
								<span className="text-neutral-500">/ {item.role}</span>
							</h3>
							<p className="mt-3 text-base leading-7 text-neutral-300">
								{item.description}
							</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
