import type { ReactNode } from "react"

type StickyTextSectionProps = {
	heading: ReactNode
	description?: string
	children?: ReactNode
}

export default function StickyTextSection({
	heading,
	description,
	children
}: StickyTextSectionProps) {
	return (
		<div className="w-full flex flex-col md:flex-row gap-5 text-left">
			<div className="md:w-1/3 md:self-start md:sticky top-36">
				<div className="flex flex-col gap-6">
					{heading}

					{
						description && (
							<p className="text-muted-foreground">{description}</p>
						)
					}
				</div>
			</div>

			<div className="md:w-2/3 w-full flex flex-col gap-14 mt-10">
				{children}
			</div>
		</div>
	)
}