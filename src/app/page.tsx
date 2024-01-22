import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center">
			<Header />
			<Hero />
			<Projects />
			<About />
			<Footer />
		</main>
	);
}
