import type {ReactNode} from "react";

type ButtonProps = {
	onClick?: () => void;
	className?: string;
	children: ReactNode;
};

export default function Button({onClick, className = "", children}: ButtonProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`pop pop-hover bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full tracking-wide cursor-pointer inline-flex items-center justify-center ${className}`}
		>
			{children}
		</button>
	);
}
