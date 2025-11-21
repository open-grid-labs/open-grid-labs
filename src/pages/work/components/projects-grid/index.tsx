import { ArrowRight } from "lucide-react";
import Indicator from "../../../../components/ui/indicator";
import ButtonLink from "../../../../components/ui/button-link.tsx";

interface ProjectCardProps {
	title: string;
	description: string;
	href: string;
}

interface ProjectsGridProps {
	projects: ProjectCardProps[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
	return (
		<div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6 mt-10 text-left">
			{projects.map((project, idx) => (
				<div
					key={idx}
					className="relative bg-foreground/5 border border-border rounded-2xl p-6 w-full flex flex-col justify-between gap-6 overflow-hidden"
				>
					<div className="absolute -top-6 -right-6 w-20 h-20 bg-foreground/10 rounded-full rotate-12 z-0"></div>

					<div className="relative z-10 flex flex-col gap-4">
						<Indicator />

						<h2 className="text-2xl md:text-3xl text-foreground font-semibold font-switzer line-clamp-3">
							{project.title}
						</h2>

						<p className="text-base md:text-lg text-muted-foreground line-clamp-4">
							{project.description}
						</p>
					</div>

					<ButtonLink
						to={project.href}
						className="relative z-10 w-fit flex items-center gap-2"
					>
						View Project <ArrowRight className="w-5 h-5" />
					</ButtonLink>
				</div>
			))}
		</div>
	)
}
