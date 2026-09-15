export type Project = {
	id: string;
	name: string;
	description: string;
	urlProject: string;
	urlImage: string;
	urlRepo: string;
	technologies: string[];
};

const projectsList: Project[] = [
	{
		id: "c168ad0f-f1d2-425d-b228-780ad25f481f",
		name: "Weather App",
		description:
			"A weather dashboard inspired by Windows Weather. It adapts the page to the selected city's conditions and consumes OpenWeather data with React and TypeScript.",
		urlProject: "https://adnfig-weather-app.vercel.app",
		urlImage: "/weather-app.webp",
		urlRepo: "https://github.com/oliveiradonai/weather-app",
		technologies: [
			"devicon-react-original",
			"devicon-typescript-plain",
			"devicon-css3-plain-wordmark",
		],
	},
	{
		id: "487a92c6-c181-4301-a2f0-7c9ab698dd62",
		name: "Ignite Feed",
		description:
			"A TypeScript React feed built during Rocketseat's Ignite program, focused on component structure, state updates, and publication interactions.",
		urlProject: "https://adnfig-ignite-feed.vercel.app",
		urlImage: "/ignite-feed.webp",
		urlRepo: "https://github.com/oliveiradonai/01-fundamentos-reactjs-ts",
		technologies: [
			"devicon-react-original",
			"devicon-typescript-plain",
			"devicon-figma-plain",
		],
	},
	{
		id: "5f43af86-2c87-46cb-99d8-8a23489d7b7d",
		name: "Habits",
		description:
			"An end-to-end habit tracker built during NLW Ignite. The interface turns daily progress into a contribution-style grid backed by a Node API.",
		urlProject: "https://adnfig-habits.vercel.app",
		urlImage: "/habits.webp",
		urlRepo: "https://github.com/oliveiradonai/nlw-habits-web",
		technologies: [
			"devicon-react-original",
			"devicon-typescript-plain",
			"devicon-nodejs-plain-wordmark",
			"devicon-figma-plain",
		],
	},
	{
		id: "98f29dc9-bd5b-4a4f-b402-fbf699bf9345",
		name: "DT-Money",
		description:
			"A finance dashboard for tracking income, expenses, and totals. I used MirageJS to model API behavior while building the React and Sass interface.",
		urlProject: "https://adnfig-dt-money.vercel.app",
		urlImage: "/dt-money.webp",
		urlRepo: "https://github.com/oliveiradonai/dt-money",
		technologies: [
			"devicon-react-original",
			"devicon-typescript-plain",
			"devicon-figma-plain",
			"devicon-sass-original",
		],
	},
	{
		id: "e8922e68-3792-42f5-8952-3b09b9e640f5",
		name: "Netflix Clone",
		description:
			"My first React project: a Netflix-style catalog powered by The Movie Database API, with featured titles, recommendations, and genre sections.",
		urlProject: "https://adnfig-movieflix.vercel.app",
		urlImage: "/movieflix.webp",
		urlRepo: "https://github.com/oliveiradonai/netflix-clone",
		technologies: ["devicon-react-original", "devicon-css3-plain-wordmark"],
	},
	{
		id: "783bcf12-d500-49ab-9a61-6948915b9adc",
		name: "Neon button",
		description:
			"A focused CSS study for neon button styling, hover feedback, and visual polish without JavaScript.",
		urlProject: "https://adnfig-neon-button.vercel.app",
		urlImage: "/neon-button.webp",
		urlRepo: "https://github.com/oliveiradonai/neon-button",
		technologies: [
			"devicon-html5-plain-wordmark",
			"devicon-css3-plain-wordmark",
		],
	},
	{
		id: "81d68ae6-986b-43d7-9a73-ed0d66418e8f",
		name: "One page",
		description:
			"A one-day technical challenge for an institutional landing page with company content, workplace highlights, news, and contact sections.",
		urlProject: "https://adnfig-one-page.vercel.app",
		urlImage: "/one-page.webp",
		urlRepo: "https://github.com/oliveiradonai/one-page-institutional",
		technologies: [
			"devicon-html5-plain-wordmark",
			"devicon-css3-plain-wordmark",
		],
	},
	{
		id: "579f597a-cfc1-423f-be63-de7a89f6ddb5",
		name: "Audio responsive",
		description:
			"A college project that reads a local MP3 file and renders an audio visualizer from frequency data. It targets desktop interactions.",
		urlProject: "https://adnfig-responsive-audio.vercel.app",
		urlImage: "/responsive-audio.webp",
		urlRepo: "https://github.com/oliveiradonai/audio-responsive",
		technologies: [
			"devicon-html5-plain-wordmark",
			"devicon-css3-plain-wordmark",
		],
	},
];

export default projectsList;
