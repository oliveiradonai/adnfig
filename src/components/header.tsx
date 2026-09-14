import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { getAlternateLocale, type Locale } from "@/i18n";
import { cn } from "@/lib/cn";

const socialLinkClassName =
	"rounded-full border border-white/10 bg-white/5 p-3 text-white transition-[border-color,background-color,color,transform] duration-200 ease-out hover:border-brand hover:bg-brand hover:text-black active:scale-[0.97]";

type HeaderProps = {
	locale: Locale;
	content: {
		projects: string;
		trajectory: string;
		switchLocale: string;
	};
};

export function Header({ locale, content }: HeaderProps) {
	const alternateLocale = getAlternateLocale(locale);

	return (
		<header className="sticky top-0 z-20 w-full border-b border-white/10 bg-black/80 backdrop-blur">
			<nav className="mx-auto flex h-20 w-full max-w-6xl items-center px-6 sm:px-8">
				<a
					href={`/${locale}#top`}
					className="mainText text-lg font-bold text-white sm:text-2xl"
				>
					Adonai <span className="text-brand">Figueiredo</span>
				</a>

				<div className="ml-auto hidden items-center gap-8 text-sm font-medium text-neutral-300 sm:flex">
					<a
						href={`/${locale}#projects`}
						className="transition-colors hover:text-brand"
					>
						{content.projects}
					</a>
					<a
						href={`/${locale}#about`}
						className="transition-colors hover:text-brand"
					>
						{content.trajectory}
					</a>
				</div>

				<div className="ml-6 flex items-center gap-3">
					<a
						href="https://github.com/oliveiradonai"
						target="_blank"
						rel="noopener noreferrer"
						title="GitHub"
						aria-label="GitHub"
						className={cn(socialLinkClassName)}
					>
						<IconBrandGithub size={21} stroke={1.8} />
					</a>
					<a
						href="https://linkedin.com/in/oliveiradonai"
						target="_blank"
						rel="noopener noreferrer"
						title="LinkedIn"
						aria-label="LinkedIn"
						className={cn(socialLinkClassName)}
					>
						<IconBrandLinkedin size={21} stroke={1.8} />
					</a>
					<a
						href={`/${alternateLocale}`}
						hrefLang={alternateLocale}
						className={cn(
							socialLinkClassName,
							"px-4 py-3 text-xs font-bold uppercase tracking-[0.12em]",
						)}
					>
						{content.switchLocale}
					</a>
				</div>
			</nav>
		</header>
	);
}
