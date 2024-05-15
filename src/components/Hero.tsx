import Image from "next/image";
import Profile from "../../public/profile.png";
import { GetMyAge } from "../helpers/DateHelpers";
import { Technologies } from "./Technologies";
import { Suspense } from "react";

export function Hero() {
	const myAge = GetMyAge().toString() || "some";

	return (
		<section className="w-full sm:max-w-[1120px] px-8 my-0 mx-auto min-h-[calc(100vh-5rem)] flex items-center justify-center flex-col">
			<div className="flex flex-col-reverse items-center sm:flex-row gap-8 sm:gap-16">
				<div className="flex flex-col gap-8 sm:px-0">
					<div className="text-4xl sm:text-7xl mainText">
						Welcome to my <br />{" "}
						<span className="text-brand font-semibold">Portfolio</span>
					</div>
					<div className="text-xl sm:text-2xl">
						👋 Hey, my name is Adonai, I'm {myAge} years old. I'm all about
						front-end development, and I'm always on the lookout for chances to
						boost my skills and keep up with the latest in tech.
					</div>
				</div>
				<Image
					width={350}
					height={350}
					className="max-w-[200px] sm:max-w-[350px]"
					src="https://i.postimg.cc/Bnb4sFKD/image.png"
					alt="Adonai's selfie"
				/>
			</div>
			<Suspense fallback={<h1>Carregando...</h1>}>
				<Technologies />
			</Suspense>
			<div className="mt-10 text-base text-gray-500">
				Some technologies I've worked with.
			</div>
		</section>
	);
}
