import {motion} from "motion/react";
import {Server, Database, Globe, Check} from "lucide-react";
import SectionHeading from "../../../../components/section-heading";

const services = [
	{icon: Globe, name: "Production", status: "Up"},
	{icon: Server, name: "Staging", status: "Up"},
	{icon: Database, name: "Database", status: "Up"},
];

const perks = [
	"Production and staging environments, set up by us",
	"Monitoring and alerts from day one",
	"Deploys handled on every release",
	"Zero hosting bill until you land your first customer",
];

function StatusPanel() {
	return (
		<motion.div
			initial={{opacity: 0, y: 30, rotate: -3}}
			whileInView={{opacity: 1, y: 0, rotate: -1.5}}
			viewport={{once: true}}
			transition={{duration: 0.6}}
			className="bg-card pop-lg rounded-[32px] p-7 md:p-9 w-full max-w-[480px] mx-auto"
		>
			<div className="flex items-center justify-between mb-7">
				<span className="font-bold">Server status</span>
				<span
					className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-mint text-candy border-2 border-ink rounded-full px-3 py-1">
					<span className="w-2 h-2 rounded-full bg-candy animate-blink"/> All systems go
				</span>
			</div>

			<div className="flex flex-col gap-3">
				{services.map((s) => {
					const Icon = s.icon;
					return (
						<div key={s.name}
						     className="flex items-center gap-3 bg-muted rounded-2xl border-2 border-border px-4 py-3">
							<Icon size={18} className="text-muted-foreground"/>
							<span className="font-medium">{s.name}</span>
							<span className="ml-auto flex items-center gap-1.5 text-sm font-semibold text-foreground">
								<span className="w-2.5 h-2.5 rounded-full bg-mint border border-ink"/> {s.status}
							</span>
						</div>
					);
				})}
			</div>

			{/* Uptime bars */}
			<div className="mt-7">
				<div className="flex justify-between text-sm mb-2">
					<span className="text-muted-foreground">Uptime</span>
					<span className="font-display font-extrabold text-xl">100%</span>
				</div>
				<div className="flex gap-[3px] h-8">
					{Array.from({length: 30}).map((_, i) => (
						<motion.span
							key={i}
							className="flex-1 rounded-[3px] bg-mint border border-ink/40"
							initial={{scaleY: 0}}
							whileInView={{scaleY: 1}}
							viewport={{once: true}}
							transition={{delay: 0.3 + i * 0.02}}
							style={{transformOrigin: "bottom"}}
						/>
					))}
				</div>
			</div>

			<div className="mt-7 pt-6 border-t-2 border-dashed border-border flex items-end justify-between">
				<span className="text-muted-foreground text-sm">Your hosting bill</span>
				<span className="font-display font-extrabold text-4xl">
					$0<span className="text-lg text-muted-foreground">.00</span>
				</span>
			</div>
		</motion.div>
	);
}

export default function HomeServers() {
	return (
		<section id="home-servers"
		         className="w-full py-20 md:py-28 bg-accent/25 border-y-2 border-ink relative overflow-hidden">
			<div className="absolute inset-0 bg-dots opacity-70 pointer-events-none"/>
			<div className="relative w-[90%] max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
				<StatusPanel/>

				<div>
					<SectionHeading
						align="left"
						kicker="On the house"
						title={<>Free servers till your first customer. <span
							className="text-primary">100% uptime.</span></>}
						subtitle="Your early budget should go into the product and your first customers, not hosting bills. We run your product on our own infrastructure, and we keep it up."
					/>
					<ul className="flex flex-col gap-3 mt-9">
						{perks.map((p) => (
							<li key={p} className="flex items-center gap-3 text-lg">
								<span
									className="w-7 h-7 shrink-0 rounded-full bg-mint text-candy border-2 border-ink flex items-center justify-center">
									<Check size={15} strokeWidth={3}/>
								</span>
								{p}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
