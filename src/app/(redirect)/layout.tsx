import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
	weight: ["300", "400", "500", "600", "700", "900"],
	subsets: ["latin"],
	variable: "--font-poppins",
	display: "swap",
});

const montserrat = Montserrat({
	weight: ["500", "600", "700", "800", "900"],
	subsets: ["latin"],
	variable: "--font-montserrat",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://adnfig.me"),
	title: "Adonai Figueiredo | Desenvolvedor Front-end",
	description:
		"Desenvolvedor front-end com mais de 8 anos em software, do atendimento ao cliente ao código, criando interfaces com React, Next.js e TypeScript.",
	robots: "index, follow",
};

export default function RedirectLayout({
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
