import dayjs from "dayjs";

export function Footer() {
	const currentYear = dayjs().format("YYYY");
	return (
		<div className="bg-neutral-900 w-full mt-6 sm:m-0">
			<footer className="w-[90%] my-0 mx-auto py-6 px-4 flex items-center justify-center gap-8 text-center">
				© {currentYear} All rights reserved - Developed with ☕ by Adonai
				Figueiredo.
			</footer>
		</div>
	);
}
