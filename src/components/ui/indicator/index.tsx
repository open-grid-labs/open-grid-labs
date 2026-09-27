export default function Indicator({ active = 0, total = 2 }) {
	return (
		<div className="flex gap-2">
			{Array.from({length: total}, (_, i) => (
				<div key={i}
				     className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-primary" : "w-2 bg-foreground/20"}`}/>
			))}
		</div>
	);
}
