const technologies = [
	"devicon-react-original",
	"devicon-nextjs-original-wordmark",
	"devicon-typescript-plain",
	"devicon-tailwindcss-original-wordmark",
	"devicon-nodejs-plain-wordmark",
	"devicon-figma-plain",
	"devicon-sass-original",
	"devicon-dotnetcore-plain",
	"devicon-html5-plain-wordmark",
	"devicon-css3-plain-wordmark",
	"devicon-bootstrap-plain-wordmark",
	"devicon-docker-plain-wordmark",
	"devicon-git-plain-wordmark",
	"devicon-graphql-plain-wordmark",
	"devicon-jest-plain",
];

const marqueeTechnologies = [
	...technologies.map((technology) => ({
		id: `first_${technology}`,
		technology,
	})),
	...technologies.map((technology) => ({
		id: `second_${technology}`,
		technology,
	})),
];

export function Technologies() {
	return (
		<div className="tech-marquee mt-12 w-full overflow-hidden">
			<div className="tech-marquee-track flex w-max gap-12 text-6xl text-white/80 sm:text-7xl">
				{marqueeTechnologies.map(({ id, technology }) => (
					<i
						key={id}
						className={`${technology} transition-colors duration-200 hover:text-brand`}
						aria-hidden="true"
					/>
				))}
			</div>
		</div>
	);
}
