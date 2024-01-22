export function About() {
	return (
		<div className="w-full sm:max-w-[1120px] px-8 md:px-8 my-0 mx-auto min-h-[100vh] flex items-center justify-center flex-col gap-8">
			<div className="text-4xl font-bold mainText text-brand">About me</div>

			<div className="text-lg sm:text-2xl">
				In 2017, concurrently with my enrollment in college, I embarked on an
				internship focused on customer support and software implementation. This
				role, which I was hired for, became a five-year journey. Consequently, I
				cultivated an extensive understanding of customer-centric processes.
				Concurrently, I initiated my foray into front-end technologies,
				undertaking personal projects to acquire fresh insights. Presently, I am
				engrossed in Front-end technologies like ReactJS and NextJS, as they
				constitute my current work focus.
			</div>

			<div className="text-3xl font-semibold mainText text-brand mt-4">
				MY SKILLS
			</div>
			<div className="w-full flex flex-col items-start justify-start gap-4 text-lg">
				<p className="flex flex-col">
					<span className="font-bold">Main:</span>
					<span className="font-light">
						Strategic Planning, Communication, Web Technologies.
					</span>
				</p>
				<p className="flex flex-col">
					<span className="font-bold">Tools and technologies:</span>
					<span className="font-light">ReactJS, NextJS, NodeJS, .NetCore</span>
				</p>
				<p className="flex flex-col">
					<span className="font-bold">Interpersonal skills:</span>
					<span className="font-light">Team Leadership, Customer service.</span>
				</p>
				<p className="flex flex-col">
					<span className="font-bold">Languages:</span>
					<span className="font-light">
						Fluent Portuguese, advanced English.
					</span>
				</p>
			</div>
		</div>
	);
}
