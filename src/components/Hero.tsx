import Image from "next/image";
import Profile from "../../public/profile.jpg";
import { GetMyAge } from "../helpers/DateHelpers";
import { Technologies } from "./Technologies";

export function Hero() {
	return (
		<section
			id="hero"
			className="max-w-[1120px] my-0 mx-auto h-[calc(100dvh-5rem)] flex items-center justify-center flex-col"
		>
			<div className="flex gap-16 py-0 px-8">
				<div className="flex flex-col gap-8">
					<div className="text-7xl mainText">
						Welcome to my <br />{" "}
						<span className="text-brand font-semibold">Portfolio</span>
					</div>
					<div className="text-2xl">
						Hey, my name is Adonai, I'm {GetMyAge()} years old. I'm all about
						front-end development, and I'm always on the lookout for chances to
						boost my skills and keep up with the latest in tech.
					</div>
				</div>
				<Image className="w-[350px]" src={Profile} alt="Adonai's selfie" />
			</div>
			<Technologies />
		</section>
	);
}
