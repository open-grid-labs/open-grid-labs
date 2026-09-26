import { motion } from 'motion/react';
import { PhoneCall, Rocket, Cpu, Zap, Shield, BarChart3, Code2 } from 'lucide-react';
import ButtonLink from '../ui/button-link.tsx';
import Button from '../ui/button';

/* Calendly type */
declare global {
	interface Window {
		Calendly: { initPopupWidget: (options: { url: string }) => void };
	}
}

export const brands = [
	{ href: '/clients/morphlelabs.png', alt: 'Morphle Labs' },
	{ href: '/clients/galen-data.png', alt: 'Galen Data' },
	{ href: '/clients/matrix-one-health.svg', alt: 'Matrix One Health' },
	{ href: '/clients/ETG-commodities.png', alt: 'ETG Commodities' },
	{ href: '/clients/jlabs-digital.png', alt: 'JLabs Digital' },
	{ href: '/clients/roni-analytics.png', alt: 'Roni Analytics' },
	{ href: '/clients/sg-analytics.svg', alt: 'SG Analytics' },
	{ href: '/clients/npci.png', alt: 'NPCI' },
	{ href: '/clients/ambassade-de-france.png', alt: 'Ambassade De France' },
	{ href: '/clients/united-health-group.png', alt: 'United Health Group' },
	{ href: '/clients/safeguard.svg', alt: 'Safeguard' },
];

/* Feature capability pills */
const features = [
	{ icon: Rocket,    label: 'MVP Engineering',     color: 'text-blue-400' },
	{ icon: Code2,     label: 'Full-Stack Dev',      color: 'text-violet-400' },
	{ icon: Zap,       label: 'High Performance',    color: 'text-amber-400' },
	{ icon: Cpu,       label: 'AI Integration',      color: 'text-indigo-400' },
	{ icon: BarChart3, label: 'Growth Design',       color: 'text-emerald-400' },
	{ icon: Shield,    label: 'Enterprise Security',  color: 'text-rose-400' },
];

/* Social proof stats */
const stats = [
	{ value: '15+', label: 'Startups Co-Built' },
	{ value: '$50M+', label: 'Capital Raised' },
	{ value: '3×', label: 'Avg Growth Rate' },
	{ value: '40+', label: 'Engineers' },
];

/* ──────────────────────────────────────────────
   Hero – "Gradient Beam" with Futuristic Animations
   • All continuous FX are CSS-only (transform + opacity)
   • Framer motion for one-time entrance animations only
   ────────────────────────────────────────────── */

const Hero = () => {
	const handleBookCall = () => {
		if (window.Calendly) {
			window.Calendly.initPopupWidget({
				url: 'https://calendly.com/opengridlabs/30min?hide_landing_page_details=1&hide_gdpr_banner=1'
			});
		}
	};

	return (
		<>

			<section
				id="home-hero"
				aria-label="Hero – Co-Build & Scale Startups"
				className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background px-4 pt-2 pb-16"
				style={{
					backgroundImage: 'radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)',
					backgroundSize: '28px 28px',
				}}
			>

				{/* ─── BG : Gradient beam cone from top ─── */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						background: 'conic-gradient(from 180deg at 50% -5%, transparent 35%, rgba(0,157,220,0.08) 46%, rgba(0,157,220,0.05) 50%, rgba(0,157,220,0.08) 54%, transparent 65%)',
						animation: 'hero-beam-pulse 8s ease-in-out infinite',
					}}
				/>

				{/* ─── BG : Diagonal crossing light beams ─── */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						background: 'linear-gradient(135deg, rgba(0,157,220,0.06) 0%, transparent 35%)',
						animation: 'hero-beam-pulse 10s ease-in-out infinite',
					}}
				/>
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						background: 'linear-gradient(225deg, rgba(0,157,220,0.05) 0%, transparent 35%)',
						animation: 'hero-beam-pulse 10s ease-in-out infinite',
						animationDelay: '5s',
					}}
				/>

				{/* ─── BG : Animated HUD corner brackets ─── */}
				<div className="absolute inset-[8%] sm:inset-[12%] lg:inset-x-[18%] lg:inset-y-[12%] pointer-events-none hidden md:block">
					{/* Top-left */}
					<div
						className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary/20 rounded-tl-lg"
						style={{ animation: 'hero-bracket-pulse 4s ease-in-out infinite' }}
					/>
					{/* Top-right */}
					<div
						className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-primary/20 rounded-tr-lg"
						style={{ animation: 'hero-bracket-pulse 4s ease-in-out infinite', animationDelay: '1s' }}
					/>
					{/* Bottom-left */}
					<div
						className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-accent/20 rounded-bl-lg"
						style={{ animation: 'hero-bracket-pulse 4s ease-in-out infinite', animationDelay: '2s' }}
					/>
					{/* Bottom-right */}
					<div
						className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-accent/20 rounded-br-lg"
						style={{ animation: 'hero-bracket-pulse 4s ease-in-out infinite', animationDelay: '3s' }}
					/>
					{/* Faint edge connectors between brackets */}
					<div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
					<div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />
					<div className="absolute left-0 top-10 bottom-10 w-px bg-gradient-to-b from-primary/10 via-transparent to-accent/10" />
					<div className="absolute right-0 top-10 bottom-10 w-px bg-gradient-to-b from-primary/10 via-transparent to-accent/10" />
				</div>

				{/* ─── BG : Ambient glow ─── */}
				<div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full bg-primary/[0.035] blur-[120px] pointer-events-none" />
				<div className="absolute left-[30%] top-[55%] w-[300px] h-[300px] rounded-full bg-accent/[0.025] blur-[100px] pointer-events-none" />



				{/* ─── ANIM : Expanding radar pulse rings ─── */}
				<div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
					<div
						className="absolute w-[320px] h-[320px] rounded-full border border-primary/15"
						style={{ animation: 'hero-ring-expand 5s ease-out infinite' }}
					/>
					<div
						className="absolute w-[320px] h-[320px] rounded-full border border-accent/10"
						style={{ animation: 'hero-ring-expand 5s ease-out infinite', animationDelay: '2.5s' }}
					/>
				</div>

				{/* ─── ANIM : Slowly rotating dashed orbit ring ─── */}
				<div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
					<div
						className="w-[480px] h-[480px] rounded-full border border-dashed border-primary/[0.07]"
						style={{ animation: 'hero-rotate 55s linear infinite' }}
					/>
				</div>

				{/* ─── ANIM : Focal glow point at beam convergence ─── */}
				<div
					className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/60 pointer-events-none"
					style={{
						top: '36%',
						boxShadow: '0 0 25px 8px rgba(0,157,220,0.25), 0 0 60px 20px rgba(0,157,220,0.1)',
						animation: 'hero-glow-breathe 4s ease-in-out infinite',
					}}
				/>

				{/* ─── ANIM : Floating data particles (CSS only) ─── */}
				{[
					{ left: 8, size: 'w-4 h-4', color: 'bg-primary/65', delay: '0s', dur: '12s' },
					{ left: 18, size: 'w-6 h-6', color: 'bg-accent/60', delay: '2s', dur: '15s' },
					{ left: 27, size: 'w-5 h-5', color: 'bg-primary/70', delay: '4.5s', dur: '13s' },
					{ left: 38, size: 'w-8 h-8', color: 'bg-accent/55', delay: '1s', dur: '18s' },
					{ left: 47, size: 'w-4 h-4', color: 'bg-primary/75', delay: '6s', dur: '11s' },
					{ left: 56, size: 'w-7 h-7', color: 'bg-accent/65', delay: '3.5s', dur: '16s' },
					{ left: 65, size: 'w-5 h-5', color: 'bg-primary/60', delay: '8s', dur: '14s' },
					{ left: 74, size: 'w-6 h-6', color: 'bg-accent/70', delay: '2.5s', dur: '15s' },
					{ left: 83, size: 'w-9 h-9', color: 'bg-primary/50', delay: '5.5s', dur: '20s' },
					{ left: 91, size: 'w-4 h-4', color: 'bg-accent/75', delay: '0.5s', dur: '12s' },
					{ left: 15, size: 'w-5 h-5', color: 'bg-primary/65', delay: '9s', dur: '14s' },
					{ left: 60, size: 'w-6 h-6', color: 'bg-accent/60', delay: '7s', dur: '16s' },
				].map((sphere, i) => (
					<div
						key={i}
						className={`absolute ${sphere.size} ${sphere.color} rounded-full pointer-events-none blur-[1px]`}
						style={{
							left: `${sphere.left}%`,
							top: '-60px',
							animation: `hero-float-down ${sphere.dur} linear infinite`,
							animationDelay: sphere.delay,
							boxShadow: '0 0 25px rgba(59,130,246,0.3)',
						}}
					/>
				))}

				{/* ─── Content ─── */}
				<div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">

					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, y: -15 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/15 bg-primary/[0.05] backdrop-blur-sm rounded-full mb-10"
					>
						<span className="relative flex h-2 w-2">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
							<span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
						</span>
						<span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-primary">
							Your Startup Co-Builder &amp; Growth Partner
						</span>
					</motion.div>

					{/* Heading – staggered line-by-line entrance */}
					<h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-display font-extrabold leading-[1.05] tracking-tight mb-8">
						<motion.span
							className="block"
							initial={{ opacity: 0, y: 45 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.1 }}
						>
							We Co-Build
						</motion.span>
						<motion.span
							className="block text-primary"
							initial={{ opacity: 0, y: 45 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.25 }}
						>
							Startups.
						</motion.span>
						<motion.span
							className="block mt-1 text-foreground/90"
							initial={{ opacity: 0, y: 45 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.4 }}
						>
							We Engineer Growth.
						</motion.span>
					</h1>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.55 }}
						className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-poppins"
					>
						We partner with founders to turn napkin-sketch concepts into capital-ready MVPs,
						and scale existing technology to handle millions of users.
					</motion.p>

					{/* Feature capability pills */}
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{
							hidden: {},
							visible: { transition: { staggerChildren: 0.06, delayChildren: 0.65 } },
						}}
						className="flex flex-wrap justify-center gap-2.5 mb-14"
					>
						{features.map((f, i) => {
							const Icon = f.icon;
							return (
								<motion.div
									key={i}
									variants={{ hidden: { opacity: 0, scale: 0.8, y: 10 }, visible: { opacity: 1, scale: 1, y: 0 } }}
									className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-300 cursor-default"
								>
									<Icon className={`w-3.5 h-3.5 ${f.color}`} />
									<span className="text-xs font-medium text-foreground/80">{f.label}</span>
								</motion.div>
							);
						})}
					</motion.div>

					{/* CTAs */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.9 }}
						className="flex flex-col sm:flex-row gap-5 mb-16 w-full sm:w-auto"
					>
						<div className="relative group">
							<div className="absolute -inset-1 bg-primary rounded-2xl blur-lg opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
							<Button
								onClick={handleBookCall}
								className="relative w-full sm:w-fit !bg-background border border-primary/50 !text-foreground hover:!bg-primary/10 h-14 px-10 text-base font-semibold transition-all duration-300 rounded-xl"
							>
								Launch Your MVP
								<PhoneCall size={18} className="ml-2.5 flex-shrink-0" />
							</Button>
						</div>
						<ButtonLink to="/services" outline={true} className="w-full sm:w-fit h-14 px-10 rounded-xl">
							Explore Growth Tracks
						</ButtonLink>
					</motion.div>

					{/* Social proof stats */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 1.05 }}
						className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-14"
					>
						{stats.map((s, i) => (
							<div key={i} className="text-center">
								<div className="text-2xl md:text-3xl font-display font-bold text-foreground">{s.value}</div>
								<div className="text-[11px] text-muted-foreground mt-1.5 font-medium uppercase tracking-wider">{s.label}</div>
							</div>
						))}
					</motion.div>
				</div>

				{/* ─── Brands Carousel ─── */}
				<motion.div
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: 50 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true, margin: '-100px' }}
					className="relative z-10 w-full mt-28 lg:mt-36 max-w-[100vw] overflow-hidden"
				>
					<p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10">
						Trusted by industry leaders
					</p>

					<div className="relative w-full flex items-center h-[120px]">
						<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
						<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

						<motion.div
							className="flex items-center gap-10 w-max"
							animate={{ x: ['0%', '-50%'] }}
							transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
						>
							{[...brands, ...brands].map((b, i) => (
								<div
									key={i}
									className="group relative px-6 py-4 flex items-center justify-center shrink-0 transition-all duration-500 rounded-2xl hover:-translate-y-2 hover:shadow-[0_10px_30px_hsla(210,100%,50%,0.2)] bg-white/50 dark:bg-foreground/5 border border-black/5 dark:border-transparent backdrop-blur-sm shadow-lg dark:shadow-[0_0_15px_rgba(0,0,0,0.5)] w-[260px] h-[90px]"
								>
									<img src={b.href} alt={b.alt} className="w-full h-full dark:invert grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 object-contain relative z-10" />
								</div>
							))}
						</motion.div>
					</div>
				</motion.div>
			</section>
		</>
	);
};

export default Hero;
