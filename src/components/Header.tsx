import Logo from "../../public/logo-red.png";
import Image from "next/image";

export function Header() {
	return (
		<section className="flex w-full py-4 px-16 h-20">
			<div className="flex gap-20 items-center">
				<Image className="h-full w-full" src={Logo} alt="Logo" />
			</div>

			<div className="ml-auto flex items-center gap-10 text-4xl">
				<a
					href="https://github.com/oliveiradonai"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center"
				>
					<i className="devicon-github-original hover:text-brand transition ease-linear" />
				</a>
				<a
					href="https://linkedin.com/in/oliveiradonai"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center"
				>
					<i className="devicon-linkedin-plain hover:text-brand transition ease-linear" />
				</a>
			</div>
		</section>
	);
}
