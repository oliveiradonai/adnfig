"use client";

import {
	type CSSProperties,
	createElement,
	type ReactNode,
	useEffect,
	useRef,
} from "react";
import { cn } from "@/lib/cn";

type ScrollRevealProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
	as?: "div" | "li";
};

type RevealStyle = CSSProperties & {
	"--reveal-delay"?: string;
};

export function ScrollReveal({
	children,
	className,
	delay = 0,
	as = "div",
}: ScrollRevealProps) {
	const elementRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const element = elementRef.current;

		if (!element) {
			return;
		}

		element.dataset.revealReady = "true";

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry?.isIntersecting) {
					return;
				}

				element.dataset.visible = "true";
				observer.disconnect();
			},
			{
				rootMargin: "0px 0px 12% 0px",
				threshold: 0.01,
			},
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, []);

	return createElement(
		as,
		{
			ref: elementRef,
			className: cn("scroll-reveal", className),
			"data-reveal-ready": "false",
			"data-visible": "false",
			style: { "--reveal-delay": `${delay}ms` } as RevealStyle,
		},
		children,
	);
}
