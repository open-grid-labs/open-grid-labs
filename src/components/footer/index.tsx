import {Linkedin} from "lucide-react";
import { Link } from "react-router";
import Logo from "../../icons/logo";

const footerLinks = {
	"How it works": [
		{name: "Analyse your idea", href: "/services#analyse"},
		{name: "Build the budget", href: "/services#budget"},
		{name: "Idea → MVP", href: "/services#build"},
		{name: "First customers", href: "/services#customers"},
		{name: "Scale it up", href: "/services#scale"},
	],
	About: [
		{name: "About Us", href: "/about/about-us"},
		{name: "Our Team", href: "/about/team"},
		{name: "Career", href: "/about/career"},
	],
	Company: [
		{name: "Our Work", href: "/work"},
		{name: "Contact", href: "/contact-us"},
	],
	Other: [
		{name: "Privacy Policy", href: "/privacy-policy"},
		{name: "Terms of Use", href: "/terms-of-use"},
	],
};

export default function Footer() {
	return (
		<footer className="w-full mt-12 md:mt-24 border-t border-border">
			<div className="w-[90%] max-w-[1600px] mx-auto px-4 py-16">
				<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
					<div className="col-span-2">
						<div className="mb-4"><Logo/></div>
						<p className="text-muted-foreground mb-6 max-w-xs">
							We co-build startups: idea to MVP in 90 days, first customers, then scale. Servers on us
							till your first customer.
						</p>
						<a
							href="https://www.linkedin.com/company/opengridlabs"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className="w-10 h-10 pop pop-hover bg-card rounded-full flex items-center justify-center hover:bg-accent hover:text-candy"
						>
							<Linkedin size={16}/>
						</a>
					</div>

					{Object.entries(footerLinks).map(([category, links]) => (
						<div key={category}>
							<h4 className="font-display font-semibold mb-4">{category}</h4>
							<ul className="space-y-2">
								{links.map((link) => (
									<li key={link.href}>
										<Link to={link.href}
										      className="text-muted-foreground hover:text-foreground transition-colors">{link.name}</Link>
									</li>
								))}
								{category === "Other" && (
									<li><a href="/sitemap.xml"
									       className="text-muted-foreground hover:text-foreground transition-colors">Site
										Map</a></li>
								)}
							</ul>
						</div>
					))}
				</div>

				<p className="pt-8 border-t border-border text-center text-muted-foreground">
					© {new Date().getFullYear()} OpenGridLabs. All rights reserved. <span
					className="font-hand text-xl ml-2">Made with ☕ + AI</span>
				</p>
			</div>
		</footer>
	);
}
