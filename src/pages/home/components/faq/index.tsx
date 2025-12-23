import { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";
import PageHeading2 from "../../../../components/page-heading-2";
import ButtonLink from "../../../../components/ui/button-link.tsx";

type faqItem = {
	id: number
	question: string
	answer: string
}

type HomeFaqProps = {
	faqs?: faqItem[]
}

const faqsData = [
	{ id: 1, question: "How long does a typical project take to complete?", answer: "It depends on the scope, but typically 4-8 weeks." },
	{ id: 2, question: "Can you work with my existing brands and designs?", answer: "Yes, we integrate seamlessly with your existing assets." },
	{ id: 3, question: "What makes your design process unique?", answer: "We focus on iterative feedback and user-centric design." },
	{ id: 4, question: "Do you offer ongoing support after the project is completed?", answer: "Absolutely, we offer maintenance and support packages." },
	{ id: 5, question: "How do you ensure the quality of your software?", answer: "Through rigorous testing and code reviews." },
];

export default function HomeFaq({
	faqs = faqsData
}: HomeFaqProps) {
	const [openId, setOpenId] = useState<number | null>(null);
	const contentRefs = useRef<Record<number, HTMLDivElement | null>>({});

	const toggleFaq = (id: number) => {
		setOpenId((prev) => (prev === id ? null : id));
	};

	useEffect(() => {
		faqs.forEach((faq) => {
			const el = contentRefs.current[faq.id];
			if (el) {
				el.style.maxHeight = openId === faq.id ? `${el.scrollHeight}px` : "0px";
			}
		});
	}, [openId]);

	return (
		<section id="home-faq" className="w-full flex flex-col gap-10">
			<PageHeading2
				preTitle="Your Frequently Asked"
				mainTitle="Questions Answers."
			/>

			<div className="flex flex-col md:flex-row gap-6">
				<div className="flex-1 flex flex-col gap-5">
					{faqs.map((faq, i) => (
						<div key={faq.id} className="border border-border rounded-2xl overflow-hidden">
							<button
								onClick={() => toggleFaq(faq.id)}
								className="flex justify-between items-center w-full px-6 py-4 text-left cursor-pointer"
							>
								<span className="text-lg font-medium text-foreground flex gap-2">
									<span className="text-muted-foreground">
										{(i + 1).toString().padStart(2, '0')}
									</span>
									{faq.question}</span>
								<Plus
									size={20}
									className={`transition-transform duration-300 ${openId === faq.id ? "rotate-45" : ""}`}
								/>
							</button>
							<div
								ref={(el) => {
									contentRefs.current[faq.id] = el;
								}}
								className="overflow-hidden transition-all duration-300 ease-in-out px-6 text-sm text-muted-foreground"
								style={{ maxHeight: 0 }}
							>
								<div className="py-2">{faq.answer}</div>
							</div>
						</div>
					))}
				</div>

				<div className="md:w-96 flex flex-col py-8 px-6 rounded-2xl bg-foreground/2 border border-border gap-6 relative overflow-hidden">
					<div className="absolute -top-6 -right-6 w-24 h-24 bg-foreground/10 rounded-full z-0"></div>

					<img src="/images/logo_light.svg" alt="logo" className="w-16 h-16 z-10 relative" />

					<h4 className="text-3xl font-semibold text-muted-foreground z-10 relative">
						Still Not Sure? <br />
						<span className="text-foreground">Book A Call.</span>
					</h4>

					<p className="text-sm text-muted-foreground -mt-1 z-10 relative">
						Learn more about how we work and how we can help you and your business take the next step.
					</p>

					<ButtonLink to="/contact-us" className="sm:w-full z-10 relative">
						Schedule Now
					</ButtonLink>
				</div>
			</div>
		</section>
	);
}
