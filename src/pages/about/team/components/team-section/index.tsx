import PageHeading from "../../../../../components/page-heading";

const teamMembers = [
	{ role: "Leader", title: "Chief Executive Officer", name: "Alex Carter", img: "/team/placeholder.png" },
	{ role: "Innovator", title: "Chief Technology Officer", name: "Jordan Lee", img: "/team/placeholder.png" },
	{ role: "Strategic", title: "Application Architect", name: "Morgan Diaz", img: "/team/placeholder.png" },
	{ role: "Visionary", title: "Designer & Developer", name: "Riley Brooks", img: "/team/placeholder.png" },
	{ role: "Engaging", title: "Quality Assurance Lead", name: "Taylor Singh", img: "/team/placeholder.png" },
	{ role: "Reliable", title: "DevOps Lead", name: "Casey Morgan", img: "/team/placeholder.png" },
	{ role: "Intelligent", title: "AI Team Lead", name: "Avery Chen", img: "/team/placeholder.png" },
	{ role: "Experienced", title: "Senior Principal Engineer", name: "Sam Patterson", img: "/team/placeholder.png" },
	{ role: "Logical", title: "Backend Developer", name: "Jamie Park", img: "/team/placeholder.png" },
];

export default function TeamSection() {
	return (
		<section
			id="team-our-team"
			className="w-full flex flex-col items-center relative justify-center text-center gap-12"
		>
			<PageHeading
				preTitle="Meet"
				mainTitle="Our"
				postTitle="Brilliant Team"
			/>

			<div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
				{teamMembers.map((member, idx) => (
					<div
						key={idx}
						className="flex flex-col items-center gap-4 p-6 bg-foreground/3 rounded-2xl"
					>
						<div className="w-40 h-40 rounded-full overflow-hidden border-2 border-border">
							<img
								alt={member.name}
								src={member.img}
								className="object-cover w-full h-full transition duration-300 group-hover:scale-105"
							/>
						</div>

						<div className="flex flex-col items-center gap-1">
							<h3 className="text-lg md:text-xl font-semibold text-foreground">{member.name}</h3>
							<p className="text-sm md:text-base text-muted-foreground">{member.role}</p>
						</div>

						<p className="text-xs md:text-sm text-muted-foreground mt-1">{member.title}</p>
					</div>
				))}
			</div>
		</section>
	);
}
