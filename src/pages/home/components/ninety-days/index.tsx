import {motion} from "motion/react";
import {CalendarDays, FileBarChart} from "lucide-react";
import {months} from "../../../../data/journey";
import SectionHeading from "../../../../components/section-heading";

/* An example of the report founders receive every week */
function SampleReport() {
	const rows = [
		{label: "Shipped", value: "Sign-up flow, Stripe checkout, admin dashboard", dot: "bg-mint"},
		{label: "Next week", value: "Onboarding emails, first user interviews", dot: "bg-accent"},
		{label: "Blockers", value: "Waiting on your logo files (no rush!)", dot: "bg-primary"},
	];

	return (
		<motion.div
			initial={{opacity: 0, y: 30, rotate: 4}}
			whileInView={{opacity: 1, y: 0, rotate: 2}}
			viewport={{once: true}}
			transition={{duration: 0.6}}
			className="relative bg-card pop-lg rounded-3xl p-7 md:p-9 w-full max-w-[460px] mx-auto"
		>
			{/* Tape */}
			<div
				className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-accent/80 border-2 border-ink rotate-[-3deg] rounded-sm"/>

			<div className="flex items-center justify-between mb-6">
				<div className="flex items-center gap-2 font-bold">
					<FileBarChart size={20} className="text-primary"/> Weekly report
				</div>
				<span className="font-mono text-xs text-muted-foreground">Week 6 of 12</span>
			</div>

			{/* Progress */}
			<div className="mb-6">
				<div className="flex justify-between text-sm font-semibold mb-2">
					<span>MVP progress</span>
					<span>50%</span>
				</div>
				<div className="h-4 rounded-full bg-muted border-2 border-ink overflow-hidden">
					<motion.div
						className="h-full bg-primary border-r-2 border-ink"
						initial={{width: 0}}
						whileInView={{width: "50%"}}
						viewport={{once: true}}
						transition={{duration: 1, delay: 0.3}}
					/>
				</div>
			</div>

			<div className="flex flex-col gap-4">
				{rows.map((r) => (
					<div key={r.label} className="flex gap-3">
						<span className={`${r.dot} w-3 h-3 mt-1.5 rounded-full border-2 border-ink shrink-0`}/>
						<div>
							<p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{r.label}</p>
							<p className="font-medium">{r.value}</p>
						</div>
					</div>
				))}
			</div>

			<div className="mt-6 pt-5 border-t-2 border-dashed border-border flex items-center justify-between text-sm">
				<span className="text-muted-foreground">Budget used</span>
				<span className="font-bold">On track ✓</span>
			</div>
			<p className="absolute -bottom-9 right-2 font-hand text-2xl text-muted-foreground rotate-[-3deg]">
				↑ example — you get one every week
			</p>
		</motion.div>
	);
}

export default function HomeNinetyDays() {
	return (
		<section id="home-90-days"
		         className="w-full py-20 md:py-28 bg-muted/60 border-y-2 border-ink relative overflow-hidden">
			<div className="absolute inset-0 bg-grid-paper opacity-60 pointer-events-none"/>
			<div className="relative w-[90%] max-w-[1400px] mx-auto">
				<SectionHeading
					kicker="The 90-day plan"
					title={<>Three months. <span className="text-primary">One MVP</span>, tested in the real market.</>}
					subtitle="Not a promise to 'launch someday'. Twelve weeks, a clear plan, and a report at every step so you always know where your money went."
				/>

				<div className="grid lg:grid-cols-[1.35fr_1fr] gap-14 lg:gap-16 mt-16 md:mt-20 items-center">
					<div className="flex flex-col gap-6">
						{months.map((m, i) => (
							<motion.div
								key={m.month}
								initial={{opacity: 0, x: -30}}
								whileInView={{opacity: 1, x: 0}}
								viewport={{once: true, margin: "-60px"}}
								transition={{duration: 0.5, delay: i * 0.1}}
								className="bg-card pop rounded-3xl overflow-hidden grid sm:grid-cols-[170px_1fr]"
							>
								<div
									className={`${m.bg} text-candy p-5 sm:p-6 flex sm:flex-col justify-between sm:justify-center items-center sm:items-start gap-1 border-b-2 sm:border-b-0 sm:border-r-2 border-ink`}>
									<span
										className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
										<CalendarDays size={14}/> {m.month}
									</span>
									<span
										className="font-display font-extrabold text-2xl leading-tight">{m.title}</span>
								</div>
								<div className="p-5 sm:p-6">
									<ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
										{m.items.map((item) => (
											<li key={item} className="flex items-start gap-2 text-[15px]">
												<span className="text-primary font-bold">→</span>
												{item}
											</li>
										))}
									</ul>
									<p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold bg-muted rounded-full px-3 py-1 border border-border">
										<FileBarChart size={14} className="text-primary"/> {m.report}
									</p>
								</div>
							</motion.div>
						))}
					</div>

					<SampleReport/>
				</div>
			</div>
		</section>
	);
}
