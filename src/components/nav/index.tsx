import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import Button from "../ui/button";
import { Link, useLocation, useNavigate } from "react-router";
import { AnimatePresence } from "motion/react";
import ButtonLink from "../ui/button-link.tsx";
import ServiceCard from "../service-card/index.tsx";
import Logo from "../../icons/logo/index.tsx";

export type NavItemDropdownType = {
	title: string
	desc: string
	href: string
}

const navItems = [
	{ name: "Work", href: "/work" },

	{
		name: "Services", href: "/services",
		dropdown: [
			{ title: "Software", desc: "Modern web apps", href: '/services/software' },
			{ title: "Intelligent", desc: "Design & prototyping", href: '/services/intelligent' },
			{ title: "Design", desc: "Visual identity", href: '/services/design' },
		],
	},

	{ name: "Clients", href: "/clients" },

	{
		name: "About", href: "/about",
		dropdown: [
			{ title: "About Us", desc: "How we started", href: '/about/about-us' },
			{ title: "Our Team", desc: "Meet our members", href: '/about/team' },
			{ title: "Career", desc: "Values & vision", href: '/about/career' },
		],
	},

];


const Nav = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [openMenu, setOpenMenu] = useState<string | null>(null);
	const [openAccordion, setOpenAccordion] = useState<string | null>(null);
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { scrollY } = useScroll()
	const [hidden, setHidden] = useState(false)

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const prev = scrollY.getPrevious() || 0
		setHidden(latest > prev && latest > 150)
	})

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 150);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	function handleNavigate(href: string) {
		setOpenAccordion(null)
		setIsMobileMenuOpen(false)
		navigate(href)
	}

	useEffect(() => {
		setOpenAccordion(null)
		setOpenMenu(null)
		setIsMobileMenuOpen(false)
	}, [pathname])

	return (
		<header>
			<motion.nav
				variants={{
					visible: { y: 0 },
					hidden: { y: '-150%' }
				}}
				initial={'hidden'}
				animate={hidden ? 'hidden' : 'visible'}
				transition={{ duration: 0.3 }}
				className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
			>
				<div
					className={`relative rounded-full border transition shadow-md ${isScrolled
						? "bg-background/95 backdrop-blur-xl border-border"
						: "bg-background/50 backdrop-blur-md border-border/50"
						}`}
				>
					<div className="px-6 py-4">
						<div className="flex items-center justify-between">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 }}
								className="text-2xl font-display font-bold tracking-tight"
							>
								<Link to={'/'}>
									<Logo />
								</Link>
							</motion.div>

							<div className="hidden md:flex items-center gap-8 relative">
								{navItems.map((item, index) => (
									<motion.div
										key={item.name}
										onMouseEnter={() => (item.dropdown ? setOpenMenu(item.name) : setOpenMenu(null))}
									>
										<motion.button
											initial={{ opacity: 0, y: -20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.3 + index * 0.1 }}
											className={`flex gap-1 items-center text-muted-foreground hover:text-foreground font-medium cursor-pointer ${pathname.startsWith(item.href ?? 'none') ? 'text-primary' : ''}`}
										>
											{
												item.dropdown ? (<span>{item.name}</span>) : (
													<Link to={item.href}>
														{item.name}
													</Link>
												)
											}
											{
												item.dropdown && (
													<ChevronDown size={20} className={`${openMenu === item.name ? 'rotate-180' : ''} transition`} />
												)
											}
										</motion.button>


									</motion.div>
								))}

								<ButtonLink
									to="/contact-us"
								>
									Contact
								</ButtonLink>
							</div>


							<button
								className="md:hidden text-foreground cursor-pointer"
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							>
								{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
							</button>
						</div>
					</div>

				</div>
			</motion.nav>

			<AnimatePresence>
				{openMenu && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}
						className="fixed left-1/2 -translate-x-1/2 top-[106px]
                   w-[95%] max-w-5xl z-40
                   flex gap-6 bg-background p-6
                   rounded-2xl border border-border"
						onMouseLeave={() => setOpenMenu(null)}
					>
						{navItems.find(n => n.name === openMenu)?.dropdown?.map(card => (
							<ServiceCard key={card.href} link={card.href} name={card.title} description={card.desc} />
						))}
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{isMobileMenuOpen && (
					<>
						<motion.div
							key="backdrop"
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.4 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-black/50 md:hidden"
							onClick={() => setIsMobileMenuOpen(false)}
						/>

						<motion.div
							key="sidebar"
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ duration: 0.3 }}
							className="fixed top-0 right-0 h-full w-full bg-background p-5 z-50 md:hidden overflow-y-auto"
						>
							<div className="flex justify-end mt-7">
								<button
									className="text-foreground cursor-pointer ml-auto pr-4"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									<X size={24} />
								</button>
							</div>

							<div className="flex flex-col gap-2 mt-4">
								{navItems.map((item) => (
									<div key={item.name} className="flex flex-col">
										<button
											className="text-muted-foreground hover:text-foreground text-left font-medium flex justify-between items-center w-full text-2xl py-2 cursor-pointer"
											onClick={() =>
												item.dropdown
													? setOpenAccordion(openAccordion === item.name ? null : item.name)
													: handleNavigate(item.href!)
											}
										>
											{item.name}
											{item.dropdown && <ChevronDown size={20} className={`${openAccordion === item.name ? 'rotate-360' : 'rotate-270'} transition`} />}
										</button>

										<AnimatePresence>
											{item.dropdown && openAccordion === item.name && (
												<motion.div
													initial={{ height: 0, opacity: 0 }}
													animate={{ height: "auto", opacity: 1 }}
													exit={{ height: 0, opacity: 0 }}
													transition={{ duration: 0.2 }}
													className="flex flex-col ml-4 mt-2 gap-2"
												>
													{item.dropdown.map((sub) => (
														<ServiceCard key={sub.href} link={sub.href} name={sub.title} description={sub.desc} />
													))}
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								))}

								<Button
									onClick={() => handleNavigate('/contact-us')}
									className="rounded-full bg-foreground text-background hover:bg-foreground/90 mt-4 py-3 justify-center mt-16"
								>
									Contact
								</Button>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</header>

	);
};

export default Nav;
