import type { Project } from "./projects";

export const locales = ["pt-BR", "en-US"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-BR";

export function isLocale(locale: string): locale is Locale {
	return locales.includes(locale as Locale);
}

export function getAlternateLocale(locale: Locale) {
	return locale === "pt-BR" ? "en-US" : "pt-BR";
}

type TimelineItem = {
	company: string;
	role: string;
	period: string;
	description: string;
};

type Dictionary = {
	metadata: {
		title: string;
		description: string;
	};
	header: {
		projects: string;
		trajectory: string;
		switchLocale: string;
		currentLocale: string;
	};
	hero: {
		eyebrow: string;
		description: string;
		stack: string;
		experience: string;
		languages: string;
		projectsCta: string;
		trajectoryCta: string;
		technologies: string;
	};
	projects: {
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
		descriptions: Record<Project["id"], string>;
	};
	about: {
		eyebrow: string;
		title: string;
		description: string;
		skills: Array<[string, string]>;
		timeline: TimelineItem[];
	};
	footer: {
		rights: (year: number) => string;
		builtWith: string;
	};
};

export const dictionaries: Record<Locale, Dictionary> = {
	"pt-BR": {
		metadata: {
			title: "Adonai Figueiredo | Desenvolvedor Front-end",
			description:
				"Desenvolvedor front-end com mais de 8 anos em software, do atendimento ao cliente ao código, criando interfaces com React, Next.js e TypeScript.",
		},
		header: {
			projects: "Projetos",
			trajectory: "Trajetória",
			switchLocale: "Switch to English",
			currentLocale: "Português do Brasil",
		},
		hero: {
			eyebrow: "Desenvolvedor front-end",
			description:
				"👋 Hey. Sou engenheiro de software, com mais de 8 anos de experiência construindo soluções para os setores financeiro, bancário, pagamentos e ERPs.",
			experience: "8+ anos em software",
			stack: "React + Next.js + TypeScript",
			languages: "Português + inglês",
			projectsCta: "Ver projetos",
			trajectoryCta: "Ver trajetória",
			technologies:
				"Tecnologias que uso para criar interfaces de produto e soluções full-stack.",
		},
		projects: {
			eyebrow: "Meus projetos",
			title: "Projetos que mostram prática, cuidado com interface e entrega.",
			description:
				"Alguns trabalhos, estudos e experimentos que me ajudaram a evoluir em React, TypeScript, consumo de APIs, organização de UI e manutenção de código.",
			caseStudy: "Projeto",
			repository: (project) => `Repositório de ${project}`,
			liveProject: (project) => `${project} em produção`,
			previous: "Projeto anterior",
			next: "Próximo projeto",
			slides: "Slides dos projetos",
			showProject: (project) => `Mostrar ${project}`,
			descriptions: {
				"c168ad0f-f1d2-425d-b228-780ad25f481f":
					"Um painel de clima inspirado no Windows Weather. A página se adapta à cidade selecionada e consome dados da OpenWeather com React e TypeScript.",
				"487a92c6-c181-4301-a2f0-7c9ab698dd62":
					"Um feed em React e TypeScript criado no Ignite da Rocketseat, com foco em componentes, estado e interações de publicação.",
				"5f43af86-2c87-46cb-99d8-8a23489d7b7d":
					"Um rastreador de hábitos end-to-end feito na NLW Ignite. A interface transforma progresso diário em uma grade de acompanhamento, apoiada por uma API em Node.",
				"98f29dc9-bd5b-4a4f-b402-fbf699bf9345":
					"Um painel financeiro para acompanhar entradas, saídas e totais. Usei MirageJS para simular a API enquanto construía a interface com React e Sass.",
				"e8922e68-3792-42f5-8952-3b09b9e640f5":
					"Meu primeiro projeto em React: um catálogo no estilo Netflix consumindo a API The Movie Database, com destaques, recomendações e gêneros.",
				"783bcf12-d500-49ab-9a61-6948915b9adc":
					"Um estudo de CSS focado em botão neon, feedback de hover e polimento visual sem JavaScript.",
				"81d68ae6-986b-43d7-9a73-ed0d66418e8f":
					"Um teste técnico de um dia para uma landing page institucional com conteúdo da empresa, ambiente de trabalho, notícias e contato.",
				"579f597a-cfc1-423f-be63-de7a89f6ddb5":
					"Um projeto de faculdade que lê um arquivo MP3 local e renderiza um visualizador de áudio a partir das frequências.",
			},
		},
		about: {
			eyebrow: "Trajetória",
			title: "Comecei perto dos usuários. Hoje levo isso para o front-end.",
			description:
				"Tenho mais de 8 anos em software, passando por suporte, implantação, desenvolvimento full-stack e front-end. Essa mistura me ajuda a pensar além da tela: entendo regras de negócio, converso com áreas diferentes e transformo fluxos complexos em interfaces mais claras.",
			skills: [
				["Front-end", "React, Next.js, Tailwind CSS, UI/UX"],
				["Back-end", "Node.js, C# .NET Core"],
				["DevOps", "CI/CD com Azure, Git, code review"],
				["Produto", "Internet banking, pagamentos, ERP"],
				["Idiomas", "Português, inglês"],
			],
			timeline: [
				{
					company: "ENOQ Pay",
					role: "Desenvolvedor Front-end",
					period: "Julho de 2024 até o presente",
					description:
						"Lidero o front-end de internet banking e plataformas de pagamento White Label com React, Next.js e TypeScript. Também trabalho em integrações bancárias como Pix, TED, emissão e pagamento de boletos, com atenção a segurança e PCI DSS.",
				},
				{
					company: "Entrada Segura",
					role: "Desenvolvedor Front-end",
					period: "Novembro de 2022 a maio de 2023",
					description:
						"Criei interfaces para uma plataforma de controle de acesso em condomínios com React e TypeScript, incluindo convites de moradores, validação por QR Code, cadastro via WhatsApp/chatbot e leitura facial.",
				},
				{
					company: "TCL Soluções",
					role: "Desenvolvedor Full Stack",
					period: "Novembro de 2021 a junho de 2024",
					description:
						"Desenvolvi e mantive sistemas financeiros, soluções de adquirência, antecipação de recebíveis e um ERP para oficinas com estoque, financeiro, notas fiscais e ordens de serviço.",
				},
				{
					company: "Gesagri Software LTDA",
					role: "Suporte ao Cliente / Desenvolvedor Full Stack",
					period: "Fevereiro de 2017 a outubro de 2021",
					description:
						"Atuei com suporte técnico e implantação de software de gestão agrícola, configurando módulos como estoque, centros de custo, plano de contas e ordens de serviço. Depois passei a desenvolver novas funcionalidades com GeneXus.",
				},
				{
					company: "Estácio de Sá",
					role: "Bacharelado em Ciência da Computação",
					period: "Janeiro de 2017 a dezembro de 2020",
					description:
						"Estudei Ciência da Computação enquanto ganhava experiência prática com clientes, implantação e desenvolvimento de software.",
				},
			],
		},
		footer: {
			rights: (year) =>
				`© ${year} Adonai Figueiredo. Todos os direitos reservados.`,
			builtWith: "Criado com Next.js, React, TypeScript e Tailwind CSS.",
		},
	},
	"en-US": {
		metadata: {
			title: "Adonai Figueiredo | Front-end Developer",
			description:
				"Front-end developer with 8+ years in software, from client-facing implementation to React, Next.js, and TypeScript interfaces.",
		},
		header: {
			projects: "Projects",
			trajectory: "Journey",
			switchLocale: "Mudar para português",
			currentLocale: "United States English",
		},
		hero: {
			eyebrow: "Front-end developer",
			description:
				"👋 Hey. I'm a software engineer with 8+ years of experience building solutions for finances, banking, payment methods and ERP.",
			experience: "8+ years in software",
			stack: "React + Next.js + TypeScript",
			languages: "Portuguese + English",
			projectsCta: "View projects",
			trajectoryCta: "See journey",
			technologies:
				"Technologies I use to build product interfaces and full-stack solutions.",
		},
		projects: {
			eyebrow: "My projects",
			title: "Projects that show practice, interface care, and delivery.",
			description:
				"A few production projects, studies, and experiments that helped me grow in React, TypeScript, API consumption, UI organization, and maintainable code.",
			caseStudy: "Project",
			repository: (project) => `${project} repository`,
			liveProject: (project) => `${project} live project`,
			previous: "Previous project",
			next: "Next project",
			slides: "Project slides",
			showProject: (project) => `Show ${project}`,
			descriptions: {
				"c168ad0f-f1d2-425d-b228-780ad25f481f":
					"A weather dashboard inspired by Windows Weather. It adapts the page to the selected city and consumes OpenWeather data with React and TypeScript.",
				"487a92c6-c181-4301-a2f0-7c9ab698dd62":
					"A React and TypeScript feed built during Rocketseat's Ignite program, focused on components, state, and post interactions.",
				"5f43af86-2c87-46cb-99d8-8a23489d7b7d":
					"An end-to-end habit tracker built during NLW Ignite. The interface turns daily progress into a tracking grid backed by a Node API.",
				"98f29dc9-bd5b-4a4f-b402-fbf699bf9345":
					"A finance dashboard for tracking income, expenses, and totals. I used MirageJS to model API behavior while building the React and Sass interface.",
				"e8922e68-3792-42f5-8952-3b09b9e640f5":
					"My first React project: a Netflix-style catalog powered by The Movie Database API, with featured titles, recommendations, and genre sections.",
				"783bcf12-d500-49ab-9a61-6948915b9adc":
					"A focused CSS study for neon button styling, hover feedback, and visual polish without JavaScript.",
				"81d68ae6-986b-43d7-9a73-ed0d66418e8f":
					"A one-day technical challenge for an institutional landing page with company content, workplace highlights, news, and contact sections.",
				"579f597a-cfc1-423f-be63-de7a89f6ddb5":
					"A college project that reads a local MP3 file and renders an audio visualizer from frequency data.",
			},
		},
		about: {
			eyebrow: "Journey",
			title: "I started close to users. I bring that view into front-end work.",
			description:
				"I have 8+ years in software across support, implementation, full-stack development, and front-end engineering. That mix helps me see more than the screen: I understand business rules, work with different teams, and turn complex flows into clearer interfaces.",
			skills: [
				["Front-end", "React, Next.js, Tailwind CSS, UI/UX"],
				["Back-end", "Node.js, C# .NET Core"],
				["DevOps", "Azure CI/CD, Git, code review"],
				["Product", "Internet banking, payments, ERP"],
				["Languages", "Portuguese, English"],
			],
			timeline: [
				{
					company: "ENOQ Pay",
					role: "Front-end Developer",
					period: "July 2024 to present",
					description:
						"I lead front-end development for White Label internet banking and payment platforms with React, Next.js, and TypeScript. I also work with banking integrations such as Pix, TED, bank slip issuance and payments, attending to security and PCI DSS standards.",
				},
				{
					company: "Entrada Segura",
					role: "Front-end Developer",
					period: "November 2022 to May 2023",
					description:
						"I built interfaces for a condominium access-control platform with React and TypeScript, including resident invitations, QR Code validation, WhatsApp/chatbot registration, and facial recognition access.",
				},
				{
					company: "TCL Soluções",
					role: "Full Stack Developer",
					period: "November 2021 to June 2024",
					description:
						"I developed and maintained financial systems, acquirer solutions, receivables advance flows, and a mechanical ERP covering inventory, finance, invoicing, and service orders.",
				},
				{
					company: "Gesagri Software LTDA",
					role: "Customer Support / Full Stack Developer",
					period: "February 2017 to October 2021",
					description:
						"I supported and implemented agricultural management software, configuring modules such as inventory, cost centers, chart of accounts, and service orders. Later, I built new features with GeneXus.",
				},
				{
					company: "Estácio de Sá",
					role: "Bachelor in Computer Science",
					period: "January 2017 to December 2020",
					description:
						"I studied Computer Science while gaining practical experience with clients, software implementation, and development.",
				},
			],
		},
		footer: {
			rights: (year) => `© ${year} Adonai Figueiredo. All rights reserved.`,
			builtWith: "Built with Next.js, React, TypeScript, and Tailwind CSS.",
		},
	},
};

export function getDictionary(locale: Locale) {
	return dictionaries[locale];
}
