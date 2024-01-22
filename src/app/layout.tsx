import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	weight: ["100", "300", "500", "600", "700", "900"],
	subsets: ["latin"],
	variable: "--font-poppins",
});

const montserrat = Montserrat({
	weight: ["100", "300", "500", "600", "700", "900"],
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export const metadata: Metadata = {
	title: "Adonai Figueiredo | Portfolio",
	description:
		"Check out my portfolio featuring Frontend projects in HTML, CSS, JavaScript, ReactJS, and NodeJS.",
	authors: [
		{
			name: "Adonai Figueiredo",
		},
	],
	keywords: "HTML, CSS, JavaScript, ReactJS, NodeJS, Frontend, UI, UX",
	robots: "index, follow",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" className={`${poppins.variable} ${montserrat.variable}`}>
			<head>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
				/>

				<meta property="og:url" content="https://adnfig.me" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Adonai Figueiredo | Portfolio" />
				<meta
					property="og:description"
					content="Check out my portfolio featuring Frontend projects in HTML, CSS, JavaScript, ReactJS, and NodeJS."
				/>
				<meta
					property="og:image"
					content="https://i.postimg.cc/XXMvYmL2/imagem-2024-01-21-220018065.png"
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="adnfig.me" />
				<meta property="twitter:url" content="https://adnfig.me" />
				<meta name="twitter:title" content="Adonai Figueiredo | Portfolio" />
				<meta
					name="twitter:description"
					content="Check out my portfolio featuring Frontend projects in HTML, CSS, JavaScript, ReactJS, and NodeJS."
				/>
				<meta
					name="twitter:image"
					content="https://i.postimg.cc/XXMvYmL2/imagem-2024-01-21-220018065.png"
				/>
			</head>
			<body>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
