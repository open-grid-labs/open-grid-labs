import { useState, useMemo } from "react";
import PageHeading from "../../../../../components/page-heading";

const teamMembers = [
	{
		role: "Leader",
		title: "Co-Founder & CTO",
		name: "Priyanshu Dwivedi",
		img: '/team/priyanshu.jpg',
		department: "Leadership",
		location: "India",
		expertise: ["Engineering", "Strategy", "Innovation"]
	},
	{
		role: "Strategic",
		title: "Co-Founder & CMO",
		name: "Rohan Sharma",
		img: '/team/rohan.jpg',
		department: "Marketing",
		location: "India",
		expertise: ["Digital Marketing", "Brand Strategy", "Growth"]
	},
	{
		role: "Visionary",
		title: "Founding Team · Senior Developer",
		name: "Aman",
		img: '/team/aman.jpg',
		department: "Engineering",
		location: "India",
		expertise: ["Full Stack", "Architecture", "Development"]
	},
	{
		role: "Intelligence",
		title: "Founding Team · AI Head",
		name: "Ritilk Raushan",
		img: '/team/ritilk.jpg',
		department: "AI & Research",
		location: "India",
		expertise: ["Machine Learning", "AI", "Data Science"]
	},
	{
		role: "Engaging",
		title: "Founding Team · SDET Lead",
		name: "Munesh Kushwah",
		img: '/team/munesh.jpg',
		department: "Quality Assurance",
		location: "India",
		expertise: ["Testing", "Automation", "Quality Control"]
	},
	{
		role: "Reliable",
		title: "Founding Team · DevOps Head",
		name: "Prashant Yadav",
		img: '/team/prashant.jpg',
		department: "DevOps",
		location: "India",
		expertise: ["Cloud", "CI/CD", "Infrastructure"]
	},
];

const departments = ["All", "Leadership", "Engineering", "Marketing", "AI & Research", "Quality Assurance", "DevOps"];

export default function TeamSection() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedDepartment, setSelectedDepartment] = useState("All");

	const filteredMembers = useMemo(() => {
		return teamMembers.filter(member => {
			const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				member.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				member.expertise.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase()));
			
			const matchesDepartment = selectedDepartment === "All" || member.department === selectedDepartment;
			
			return matchesSearch && matchesDepartment;
		});
	}, [searchQuery, selectedDepartment]);

	return (
		<section
			id="team-our-team"
			className="w-full flex flex-col items-center relative justify-center gap-12"
		>
			<PageHeading
				preTitle="Meet"
				mainTitle="Our"
				postTitle="Brilliant Team"
			/>

			{/* Search and Filter Section */}
			<div className="w-full flex flex-col gap-6">
				{/* Search Bar */}
				<div className="w-full max-w-2xl mx-auto">
					<input
						type="text"
						placeholder="Search by name, role, or expertise..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-full px-6 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
					/>
				</div>

				{/* Department Filters */}
				<div className="flex flex-wrap gap-3 justify-center">
					{departments.map((dept) => (
						<button
							key={dept}
							onClick={() => setSelectedDepartment(dept)}
							className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
								selectedDepartment === dept
									? "bg-primary text-white shadow-lg"
									: "bg-foreground/5 text-foreground hover:bg-foreground/10"
							}`}
						>
							{dept}
						</button>
					))}
				</div>
			</div>

			{/* Results Count */}
			<div className="w-full text-left">
				<p className="text-muted-foreground text-sm">
					Showing {filteredMembers.length} {filteredMembers.length === 1 ? 'member' : 'members'}
				</p>
			</div>

			{/* Team Grid */}
			<div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
				{filteredMembers.map((member, idx) => (
					<div
						key={idx}
						className="group relative flex flex-col bg-background border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
					>
						{/* Image Section */}
						<div className="relative h-80 w-full overflow-hidden bg-foreground/5">
							<img
								alt={member.name}
								src={member.img}
								className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
							/>
						</div>

						{/* Content Section */}
						<div className="flex flex-col gap-3 p-6">
							<div className="flex flex-col gap-1">
								<h3 
									className="text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
									onClick={() => {
										// Add navigation logic here when profile pages are created
										console.log(`Navigate to ${member.name}'s profile`);
									}}
								>
									{member.name}
								</h3>
								<p className="text-base text-muted-foreground font-medium">{member.title}</p>
							</div>

							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
								<span>{member.department}</span>
							</div>

							{/* Expertise Tags */}
							<div className="flex flex-wrap gap-2 mt-2">
								{member.expertise.slice(0, 3).map((exp, i) => (
									<span
										key={i}
										className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
									>
										{exp}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>

			{/* No Results Message */}
			{filteredMembers.length === 0 && (
				<div className="w-full text-center py-16">
					<p className="text-xl text-muted-foreground">No team members found matching your criteria.</p>
					<button
						onClick={() => {
							setSearchQuery("");
							setSelectedDepartment("All");
						}}
						className="mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
					>
						Clear Filters
					</button>
				</div>
			)}
		</section>
	);
}
