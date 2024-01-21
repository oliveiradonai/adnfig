import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export default function Home() {
	return (
		<main className="flex min-h-dvh flex-col items-center">
			<Header />
			<Hero />
		</main>
	);
}
