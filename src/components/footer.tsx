type FooterProps = {
	content: {
		rights: (year: number) => string;
		builtWith: string;
	};
};

export function Footer({ content }: FooterProps) {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-white/10 bg-neutral-950">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-8">
				<p>{content.rights(currentYear)}</p>
				<p>{content.builtWith}</p>
			</div>
		</footer>
	);
}
