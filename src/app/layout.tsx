import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
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
		"Confira meu Portfólio com projetos Frontend em HTML, CSS, JavaScript, ReactJS e NodeJS.",
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
			</head>
			<body>{children}</body>
		</html>
	);
}
