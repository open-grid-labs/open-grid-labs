import {useState} from "react";
import {motion, AnimatePresence} from "motion/react";
import {Plus, ArrowRight, Coffee} from "lucide-react";
import SectionHeading from "../../../../components/section-heading";
import {openCalendly} from "../../../../utils/calendly";
import {inView} from "../../../../utils/motion";

type FaqItem = {
	id: number;
	question: string;
	answer: string;
};

type HomeFaqProps = {
	faqs?: FaqItem[];
};

const faqsData: FaqItem[] = [
	{
		id: 1,
		question: "What does \"co-build\" actually mean?",
		answer:
			"We act like the technical co-founder you don't have yet. We help analyse the idea, plan the budget, design and build the MVP, launch it to real users, and then scale it. You keep ownership of the product and the code.",
	},
	{
		id: 2,
		question: "Is 3 months really enough to build an MVP?",
		answer:
			"For a focused MVP, yes. That's what the first two weeks of analysis are for: we cut the scope down to what proves your idea, and we build faster with AI-assisted engineering. If your idea needs more than 90 days, we'll say so before you spend anything on the build.",
	},
	{
		id: 3,
		question: "Are the servers really free?",
		answer:
			"Yes. We host your product on our own infrastructure at no cost until you land your first customer, with 100% uptime. After that, we'll agree a simple hosting plan together.",
	},
	{
		id: 4,
		question: "How do you use AI and LLMs in my project?",
		answer:
			"We use leading AI models and LLMs for research, pair-programming, test generation, code review and drafting reports. Our engineers review every line and make every product decision. The code and IP are yours.",
	},
	{
		id: 5,
		question: "What if my idea isn't good?",
		answer:
			"Then it's much better to find out in week 2 than in month 6. The analysis stage exists to give you an honest answer: build it, pivot it, or rethink it.",
	},
	{
		id: 6,
		question: "What will I see from you each week?",
		answer:
			"A short written report covering what shipped, what's next, any blockers and budget used, plus a live staging link you can click around in. At the end of the 90 days you also get a market test report based on real user data.",
	},
	{
		id: 7,
		question: "Do you take equity or charge fees?",
		answer:
			"We mostly work on a transparent, milestone-based fee. For a few founders we're especially excited about, we're open to a mix of equity and fees.",
	},
];

export default function HomeFaq({ faqs = faqsData }: HomeFaqProps) {
	const [openId, setOpenId] = useState<number | null>(faqs[0]?.id ?? null);
	const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

	return (
		<section id="home-faq" className="w-[90%] max-w-[1400px] mx-auto py-8 md:py-12">
			<SectionHeading
				kicker="FAQ"
				title={<>Questions? <span className="text-primary">Good.</span></>}
				subtitle="Here are the ones founders ask us most."
			/>

			<div className="grid lg:grid-cols-[1fr_360px] gap-8 mt-14 md:mt-16 items-start">
				<div className="flex flex-col gap-4">
					{faqs.map((faq, i) => {
						const isOpen = openId === faq.id;
						return (
							<motion.div
								key={faq.id}
								{...inView(i * 0.04, 16)}
								className={`rounded-2xl pop overflow-hidden transition-colors ${isOpen ? "bg-accent/30" : "bg-card"}`}
							>
								<button
									onClick={() => toggle(faq.id)}
									aria-expanded={isOpen}
									className="flex justify-between items-center w-full px-6 py-5 text-left cursor-pointer gap-4"
								>
									<span className="flex items-center gap-4">
										<span
											className="font-mono text-sm font-bold text-primary shrink-0">{String(i + 1).padStart(2, "0")}</span>
										<span
											className="text-base md:text-lg font-display font-bold">{faq.question}</span>
									</span>
									<motion.span
										animate={{rotate: isOpen ? 45 : 0}}
										transition={{type: "spring", stiffness: 300, damping: 18}}
										className={`shrink-0 w-9 h-9 rounded-full border-2 border-ink flex items-center justify-center ${isOpen ? "bg-primary text-candy" : "bg-card"}`}
									>
										<Plus size={18} strokeWidth={2.5}/>
									</motion.span>
								</button>

								<AnimatePresence initial={false}>
									{isOpen && (
										<motion.div
											key="answer"
											initial={{height: 0, opacity: 0}}
											animate={{height: "auto", opacity: 1}}
											exit={{height: 0, opacity: 0}}
											transition={{duration: 0.3, ease: [0.22, 1, 0.36, 1]}}
											className="overflow-hidden"
										>
											<p className="px-6 pb-6 md:pl-[4.25rem] text-muted-foreground leading-relaxed">{faq.answer}</p>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						);
					})}
				</div>

				{/* CTA card */}
				<motion.div
					initial={{opacity: 0, y: 24, rotate: 3}}
					whileInView={{opacity: 1, y: 0, rotate: 1.5}}
					viewport={{once: true}}
					transition={{duration: 0.5}}
					className="bg-primary text-candy pop-lg rounded-[28px] p-8 flex flex-col gap-5 lg:sticky lg:top-28"
				>
					<span
						className="w-14 h-14 rounded-2xl bg-paper border-2 border-candy flex items-center justify-center">
						<Coffee size={26}/>
					</span>
					<h3 className="font-display font-extrabold text-3xl leading-tight">Still curious? Let's grab a
						(virtual) coffee.</h3>
					<p className="leading-relaxed">
						A free 30-minute call. Tell us the idea, we'll tell you honestly what it would take to get it to
						market.
					</p>
					<ul className="flex flex-col gap-2 font-semibold">
						<li>✓ Honest first take on your idea</li>
						<li>✓ Rough budget & timeline</li>
						<li>✓ No strings attached</li>
					</ul>
					<button
						onClick={() => openCalendly()}
						className="mt-2 bg-paper text-candy border-2 border-candy rounded-full h-14 font-bold inline-flex items-center justify-center gap-2 shadow-[4px_4px_0_0_hsl(260,25%,12%)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_hsl(260,25%,12%)] transition-all cursor-pointer"
					>
						Book a free call <ArrowRight size={18}/>
					</button>
				</motion.div>
			</div>
		</section>
	);
}
