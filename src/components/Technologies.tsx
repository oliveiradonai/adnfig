"use client";
import { useEffect, useRef, useState } from "react";

export function Technologies() {
	const [loadedContent, setLoadedContent] = useState<boolean>(false);

	const scrollRef = useRef<HTMLDivElement>(null);
	const scrollInnerRef = useRef<HTMLDivElement>(null);

	async function HandleScroll() {
		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			scrollRef.current?.setAttribute("data-animated", "true");

			if (scrollInnerRef.current) {
				const scrollContent = Array.from(scrollInnerRef.current.children);

				for (const item of scrollContent) {
					if (item instanceof Element) {
						const duplicatedItem = item.cloneNode(true) as Element;
						duplicatedItem.setAttribute("aria-hidden", "true");
						scrollInnerRef.current.appendChild(duplicatedItem);
					}
				}
			}
		}
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		HandleScroll().then(() => setLoadedContent(true));
	}, []);

	return (
		<div
			ref={scrollRef}
			className="w-full px-8 sm:max-w-[1120px] mt-14 text-7xl data-[animated=true]:overflow-hidden group"
		>
			<div
				ref={scrollInnerRef}
				className="px-8 flex gap-16 flex-wrap group-data-[animated=true]:w-max group-data-[animated=true]:flex-nowrap group-data-[animated=true]:animate-scroll"
			>
				{loadedContent && (
					<>
						<i className="devicon-react-original" />
						<i className="devicon-nextjs-original-wordmark" />
						<i className="devicon-typescript-plain" />
						<i className="devicon-tailwindcss-original-wordmark" />
						<i className="devicon-nodejs-plain-wordmark" />
						<i className="devicon-figma-plain" />
						<i className="devicon-sass-original" />
						<i className="devicon-dotnetcore-plain" />
						<i className="devicon-html5-plain-wordmark" />
						<i className="devicon-css3-plain-wordmark" />
						<i className="devicon-bootstrap-plain-wordmark" />
						<i className="devicon-docker-plain-wordmark" />
						<i className="devicon-git-plain-wordmark" />
						<i className="devicon-graphql-plain-wordmark" />
						<i className="devicon-jest-plain" />
						<i className="devicon-react-original" />
						<i className="devicon-nextjs-original-wordmark" />
						<i className="devicon-typescript-plain" />
						<i className="devicon-tailwindcss-original-wordmark" />
						<i className="devicon-nodejs-plain-wordmark" />
						<i className="devicon-figma-plain" />
						<i className="devicon-sass-original" />
						<i className="devicon-dotnetcore-plain" />
						<i className="devicon-html5-plain-wordmark" />
						<i className="devicon-css3-plain-wordmark" />
						<i className="devicon-bootstrap-plain-wordmark" />
						<i className="devicon-docker-plain-wordmark" />
						<i className="devicon-git-plain-wordmark" />
						<i className="devicon-graphql-plain-wordmark" />
						<i className="devicon-jest-plain" />
					</>
				)}
			</div>
		</div>
	);
}
