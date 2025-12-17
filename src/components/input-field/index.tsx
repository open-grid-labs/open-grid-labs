type InputFieldProps = {
	label: string;
	placeholder: string;
	value: string;
	onChange: (v: string) => void;
	type?: string;
	prefix?: string;
	rows?: number;
	pattern?: string
	error?: string
};

export function InputField({ label, placeholder, value, onChange, type = "text", prefix, rows, pattern, error }: InputFieldProps) {
	if (type === "textarea") {
		return (
			<div className="flex flex-col gap-2">
				<label className="text-foreground font-semibold text-lg md:text-xl">{label}</label>
				<textarea
					onChange={(e) => onChange(e.target.value)}
					value={value}
					rows={rows || 4}
					placeholder={placeholder}
					className="w-full text-foreground placeholder:text-muted-foreground rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary border border-border outline-none transition resize-none"
				/>
				{
					error && (
						<p className="text-red-600">{error}</p>
					)
				}
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-2">
			<label className="text-foreground font-semibold text-lg md:text-xl">{label}</label>
			<div className={`flex items-center gap-2 ${prefix ? "border border-border rounded-xl px-4 py-3" : ""}`}>
				{prefix && <span className="text-foreground font-medium">{prefix}</span>}
				<input
					onChange={(e) => onChange(e.target.value)}
					value={value}
					type={type}
					placeholder={placeholder}
					className={`w-full ${prefix ? "bg-transparent" : "border border-border rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary"} text-foreground placeholder:text-muted-foreground outline-none transition`}
					pattern={pattern}
				/>

			</div>
			{
				error && (
					<p className="text-red-600">{error}</p>
				)
			}
		</div>
	);
}
