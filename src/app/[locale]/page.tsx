import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { getDictionary, isLocale, type Locale, locales } from "@/i18n";

type PageProps = {
	params: Promise<{
		locale: string;
	}>;
};

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { locale } = await params;

	if (!isLocale(locale)) {
		return {};
	}

	const dictionary = getDictionary(locale);

	return {
		title: {
			absolute: dictionary.metadata.title,
		},
		description: dictionary.metadata.description,
		alternates: {
			canonical: `/${locale}`,
			languages: {
				"en-US": "/en-US",
				"pt-BR": "/pt-BR",
			},
		},
		openGraph: {
			title: dictionary.metadata.title,
			description: dictionary.metadata.description,
			locale,
			alternateLocale: locales.filter(
				(availableLocale) => availableLocale !== locale,
			),
			url: `/${locale}`,
		},
		twitter: {
			title: dictionary.metadata.title,
			description: dictionary.metadata.description,
		},
	};
}

export default async function Home({ params }: PageProps) {
	const { locale } = await params;

	if (!isLocale(locale)) {
		notFound();
	}

	const activeLocale: Locale = locale;
	const dictionary = getDictionary(activeLocale);

	return (
		<main className="min-h-screen overflow-hidden bg-black text-white">
			<Header locale={activeLocale} content={dictionary.header} />
			<Hero content={dictionary.hero} />
			<Projects content={dictionary.projects} />
			<About content={dictionary.about} />
			<Footer content={dictionary.footer} />
		</main>
	);
}
