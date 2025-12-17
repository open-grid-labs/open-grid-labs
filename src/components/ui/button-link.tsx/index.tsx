import type { ReactNode } from "react";
import { Link } from "react-router";

export default function ButtonLink({
	to,
	className = '',
	outline = false,
	children
}: { to: string, className?: string, outline?: boolean, children: ReactNode }) {
	return (
		<Link
			to={to}
			className={`overflow-hidden inline-flex shrink-0 items-center justify-center font-semibold transition-colors relative select-none cursor-pointer h-12 px-6 ${outline ? 'hover:bg-foreground hover:text-background bg-background text-foreground border border-border' : 'bg-foreground text-background hover:bg-foreground/85'} rounded-[15px] w-fit ${className}`}
		>
			{children}
		</Link>
	)
}