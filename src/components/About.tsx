export function About() {
	return (
		<div className="w-full sm:max-w-[1120px] px-8 md:px-8 my-0 mx-auto min-h-[100vh] flex items-center justify-center flex-col gap-8 mb-12">
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

			<div className="container py-12">
				<div className="grid gap-4 sm:grid-cols-12">
					<div className="col-span-12 sm:col-span-3">
						<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-brand">
							<h3 className="text-3xl font-semibold">My timeline</h3>
							<span className="text-sm font-bold tracki uppercase dark:text-gray-400">
								Some of my experiences
							</span>
						</div>
					</div>
					<div className="relative col-span-12 space-y-6 sm:col-span-9">
						<div className="col-span-12 space-y-12 relative sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
							<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-brand">
								<h3 className="text-xl font-semibold tracki">
									Entrada Segura — Front-end Developer
								</h3>
								<time className="text-xs tracki uppercase dark:text-gray-400">
									NOVEMBER 2022 - MAY 2023
								</time>
								<p className="mt-3">
									I worked in this company as a part-time job as a Front-end
									Developer, developing and maintaining solutions with ReactJS
									and Typescript.
								</p>
							</div>
							<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-brand">
								<h3 className="text-xl font-semibold tracki">
									TCL Soluções — Full Stack Developer
								</h3>
								<time className="text-xs tracki uppercase dark:text-gray-400">
									NOVEMBER 2021 UNTIL NOW
								</time>
								<p className="mt-3">
									I am currently working as a Full Stack Developer, with ReactJS
									+ Typescript, HTML + CSS + JavaScript, C# .Net Core,
									maintaining solutions and making new ones with modern
									interfaces.
								</p>
							</div>
							<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-brand">
								<h3 className="text-xl font-semibold tracki">
									Gesagri Software LTDA — Customer Support / Full Stack
									Developer
								</h3>
								<time className="text-xs tracki uppercase dark:text-gray-400">
									FEBRUARY 2017 - OCTOBER 2021
								</time>
								<p className="mt-3">
									I started my internship as a Customer Support and Software
									Implementation of a farm management software. When I got
									hired, I continued working as a Customer Support and Software
									Implementation of a farm management software, and in my last
									year as a Full Stack Developer with Genexus.
								</p>
							</div>
							<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-brand">
								<h3 className="text-xl font-semibold tracki">
									Estácio de Sá — Bachelor (Science Computing)
								</h3>
								<time className="text-xs tracki uppercase dark:text-gray-400">
									JANUARY 2017 - DECEMBER 2020
								</time>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="text-3xl font-semibold mainText text-brand mt-4">
				MY SKILLS
			</div>
			<div className="w-full flex flex-col items-start justify-start gap-4 text-lg">
				<p className="flex flex-col">
					<span className="font-bold">Front-end:</span>
					<span className="font-light">
						UI/UX | JavaScriptES6+ | ReactJS | NextJS | HTML and CSS
					</span>
				</p>
				<p className="flex flex-col">
					<span className="font-bold">Back-end:</span>
					<span className="font-light">NodeJS | C# .Net Core</span>
				</p>
				<p className="flex flex-col">
					<span className="font-bold">DevOps:</span>
					<span className="font-light">CI/CD (Azure) | Git</span>
				</p>
				<p className="flex flex-col">
					<span className="font-bold">Interpersonal skills:</span>
					<span className="font-light">Team Leadership, Customer service.</span>
				</p>
				<p className="flex flex-col">
					<span className="font-bold">Languages:</span>
					<span className="font-light">Portuguese and English.</span>
				</p>
			</div>
		</div>
	);
}
