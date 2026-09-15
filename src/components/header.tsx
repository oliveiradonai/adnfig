import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { getAlternateLocale, type Locale } from "@/i18n";
import { cn } from "@/lib/cn";

const socialLinkClassName =
	"rounded-full border border-white/10 bg-white/5 p-2.5 text-white transition-[border-color,background-color,transform] duration-150 ease-[var(--ease-out)] hover:border-brand hover:bg-brand active:scale-[0.97] sm:p-3";

type HeaderProps = {
	locale: Locale;
	content: {
		projects: string;
		trajectory: string;
		switchLocale: string;
		currentLocale: string;
	};
};

export function Header({ locale, content }: HeaderProps) {
	const alternateLocale = getAlternateLocale(locale);

	return (
		<header className="sticky top-0 z-20 w-full border-b border-white/10 bg-black/80 backdrop-blur">
			<nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
				<a
					href={`/${locale}#top`}
					className="mainText rounded-sm text-lg font-bold text-white transition-colors duration-200 ease-out hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:text-2xl"
				>
					Adonai <span className="text-brand">Figueiredo</span>
				</a>

				<div className="ml-auto hidden items-center gap-8 text-sm font-medium text-neutral-300 sm:flex">
					<a
						href={`/${locale}#projects`}
						className="rounded-sm transition-colors duration-200 ease-out hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-black"
					>
						{content.projects}
					</a>
					<a
						href={`/${locale}#about`}
						className="rounded-sm transition-colors duration-200 ease-out hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-black"
					>
						{content.trajectory}
					</a>
				</div>

				<div className="ml-4 flex items-center gap-2 sm:ml-6 sm:gap-3">
					<a
						href="https://github.com/oliveiradonai"
						target="_blank"
						rel="noopener noreferrer"
						title="GitHub"
						aria-label="GitHub"
						className={cn(socialLinkClassName)}
					>
						<IconBrandGithub className="size-4.75 sm:size-5.25" stroke={1.8} />
					</a>
					<a
						href="https://linkedin.com/in/oliveiradonai"
						target="_blank"
						rel="noopener noreferrer"
						title="LinkedIn"
						aria-label="LinkedIn"
						className={cn(socialLinkClassName)}
					>
						<IconBrandLinkedin
							className="size-4.75 sm:size-5.25"
							stroke={1.8}
						/>
					</a>
					<a
						href={`/${alternateLocale}`}
						hrefLang={alternateLocale}
						title={content.switchLocale}
						aria-label={content.switchLocale}
						className={cn(
							socialLinkClassName,
							"grid size-10 place-items-center p-0 sm:size-11.5 sm:p-0",
						)}
					>
						<CountryFlag locale={locale} />
						<span className="sr-only">{content.switchLocale}</span>
					</a>
				</div>
			</nav>
			<span className="scroll-progress" aria-hidden="true" />
		</header>
	);
}

function CountryFlag({ locale }: { locale: Locale }) {
	if (locale === "pt-BR") {
		return (
			<span
				aria-hidden="true"
				className="relative block h-3.5 w-5 overflow-hidden rounded-[3px] bg-[#229e45] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] sm:h-4 sm:w-6"
			>
				<span className="absolute left-1/2 top-1/2 h-2.5 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#f8e509] sm:h-3 sm:w-3.5" />
				<span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2b49a3] sm:size-1.75" />
			</span>
		);
	}

	return (
		<span
			aria-hidden="true"
			className="relative block h-3.5 w-5 overflow-hidden rounded-[3px] bg-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] sm:h-4 sm:w-6"
		>
			<span className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,#b22234_0_1.08px,#fff_1.08px_2.16px)] sm:bg-[repeating-linear-gradient(to_bottom,#b22234_0_1.23px,#fff_1.23px_2.46px)]" />
			<span className="absolute left-0 top-0 h-2 w-2.5 bg-[#3c3b6e] sm:h-2.25 sm:w-2.75" />
		</span>
	);
}
