import {useEffect} from "react";
import {CALENDLY_URL} from "../../utils/calendly";

export default function Contact() {
	// Re-inject Calendly's script on mount so it finds and renders the inline widget below
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://assets.calendly.com/assets/external/widget.js";
		script.async = true;
		document.body.appendChild(script);
		return () => script.remove();
	}, []);

	return (
		<section id="book-a-call" className="w-[90%] max-w-[1600px] mx-auto my-10 flex flex-col items-center gap-8">
			<div className="text-center flex flex-col items-center gap-3">
				<span className="font-hand text-3xl text-primary rotate-[-2deg]">ready when you are</span>
				<h2 className="font-display font-extrabold tracking-tight text-4xl md:text-6xl">
					Pick a time. <span
					className="bg-accent text-candy px-3 rounded-2xl inline-block rotate-[-1.5deg] pop">Bring the idea.</span>
				</h2>
				<p className="text-lg text-muted-foreground max-w-xl">30 minutes, free, no pitch deck needed. You'll
					leave with an honest first take.</p>
			</div>
			<div className="w-full bg-card pop-lg rounded-[32px] overflow-hidden">
				<div className="calendly-inline-widget min-w-[320px]" data-url={CALENDLY_URL}/>
			</div>
		</section>
	);
}
