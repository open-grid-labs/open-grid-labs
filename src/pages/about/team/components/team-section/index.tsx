import PageHeading from "../../../../../components/page-heading";


const teamMembers = [
	{
		role: "Leader",
		title: "CEO and Engineer Head",
		name: "Priyanshu Dwivedi",
		// img: "team/priyanshu.png",
		img: 'team/placeholder.png'
	},
	{
		role: "Strategic",
		title: "Marketing Head",
		name: "Rohan Sharma",
		// img: "team/rohan.png",
		img: 'team/placeholder.png'
	},
	{
		role: "Visionary",
		title: "Senior Developer",
		name: "Aman",
		// img: "team/aman.png",
		img: 'team/placeholder.png'
	},
	{
		role: "Intelligence",
		title: "AI Head",
		name: "Ritilk Raushan",
		// img: "team/ritilk.png",
		img: 'team/placeholder.png'
	},
	{
		role: "Engaging",
		title: "QA Head",
		name: "Munesh Kushwah",
		// img: "team/munesh.png",
		img: 'team/placeholder.png'
	},
	{
		role: "Reliable",
		title: "DevOps Head",
		name: "Prashant Yadav",
		// img: "team/prashant.png",
		img: 'team/placeholder.png'
	},
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
