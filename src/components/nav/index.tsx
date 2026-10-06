import {useEffect, useState} from "react";
import {Menu, Moon, Sun, X} from "lucide-react";
import {AnimatePresence, motion} from "motion/react";
import {Link, NavLink} from "react-router";
import Button from "../ui/button";
import Logo from "../../icons/logo";
import {useTheme} from "../../context/theme-provider";
import {openCalendly} from "../../utils/calendly";

const navItems = [
	{name: "How it works", href: "/services"},
	{name: "About Us", href: "/about/about-us"},
	{name: "Team", href: "/about/team"},
	{name: "Career", href: "/about/career"},
];

function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
	const Icon = isDark ? Moon : Sun;

	return (
		<button
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className="p-2 rounded-full hover:bg-foreground/10 transition-colors cursor-pointer"
			aria-label="Toggle theme"
		>
			<Icon className="w-5 h-5"/>
		</button>
	);
}

export default function Nav() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileOpen, setIsMobileOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 150);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const closeMobile = () => setIsMobileOpen(false);
	const bookCall = () => {
		closeMobile();
		openCalendly();
	};

	return (
		<header>
			<nav
				aria-label="Main navigation"
				className={`fixed top-0 left-0 z-50 w-full shadow-lg transition-colors duration-500 backdrop-blur-xl border-b border-border ${isScrolled ? "bg-card/80" : "bg-background/20"}`}
			>
				<div className="py-4 w-[90%] max-w-[1600px] mx-auto flex items-center justify-between">
					<Link to="/" className="hover:opacity-80 transition-opacity z-50">
						<Logo/>
					</Link>

					<div className="hidden lg:flex items-center gap-6">
						{navItems.map((item) => (
							<NavLink
								key={item.href}
								to={item.href}
								className={({isActive}) =>
									`px-4 py-2 font-semibold rounded-full border-2 transition-colors ${isActive ? "text-candy bg-accent border-ink" : "text-muted-foreground hover:text-foreground border-transparent"}`
								}
							>
								{item.name}
							</NavLink>
						))}
						<ThemeToggle/>
						<Button onClick={bookCall} className="h-11">Build my MVP</Button>
					</div>

					<div className="flex items-center lg:hidden z-50">
						<ThemeToggle/>
						<button
							className="p-2 hover:bg-foreground/10 rounded-full transition-colors cursor-pointer"
							onClick={() => setIsMobileOpen((open) => !open)}
							aria-label={isMobileOpen ? "Close menu" : "Open menu"}
						>
							{isMobileOpen ? <X size={24}/> : <Menu size={24}/>}
						</button>
					</div>
				</div>
			</nav>

			<AnimatePresence>
				{isMobileOpen && (
					<>
						<motion.div
							key="backdrop"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-background/80 backdrop-blur-xl lg:hidden z-40"
							onClick={closeMobile}
						/>
						<motion.div
							key="drawer"
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{type: "spring", damping: 25, stiffness: 200}}
							className="fixed top-0 right-0 h-full w-[85%] max-w-sm glass-panel border-l border-border p-6 pt-28 z-40 lg:hidden overflow-y-auto shadow-2xl flex flex-col gap-4"
						>
							{navItems.map((item) => (
								<NavLink
									key={item.href}
									to={item.href}
									onClick={closeMobile}
									className={({isActive}) =>
										`font-display text-2xl font-semibold py-2 border-b border-border last:border-0 transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`
									}
								>
									{item.name}
								</NavLink>
							))}
							<Button onClick={bookCall} className="w-full text-lg py-6 mt-12">Build my MVP</Button>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</header>
	);
}
