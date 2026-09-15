import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import { defaultLocale, getDictionary, isLocale } from "@/i18n";
import { openGraphImage, siteUrl } from "@/lib/site-metadata";
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

type LayoutProps = {
	children: React.ReactNode;
	params: Promise<{
		locale: string;
	}>;
};

export async function generateMetadata({
	params,
}: LayoutProps): Promise<Metadata> {
	const { locale: requestedLocale } = await params;
	const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;
	const dictionary = getDictionary(locale);

	return {
		metadataBase: new URL(siteUrl),
		title: {
			default: dictionary.metadata.title,
			template: "%s | Adonai Figueiredo",
		},
		description: dictionary.metadata.description,
		authors: [{ name: "Adonai Figueiredo" }],
		keywords: [
			"Adonai Figueiredo",
			"Front-end Developer",
			"React",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
		],
		robots: "index, follow",
		openGraph: {
			type: "website",
			url: `/${locale}`,
			siteName: "Adonai Figueiredo",
			title: dictionary.metadata.title,
			description: dictionary.metadata.description,
			images: [openGraphImage],
		},
		twitter: {
			card: "summary_large_image",
			title: dictionary.metadata.title,
			description: dictionary.metadata.description,
			images: [openGraphImage.url],
		},
	};
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
	const { locale: requestedLocale } = await params;
	const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;

	return (
		<html
			lang={locale}
			className={`${poppins.variable} ${montserrat.variable}`}
		>
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
