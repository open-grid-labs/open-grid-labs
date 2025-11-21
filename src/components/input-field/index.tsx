type InputFieldProps = {
	label: string;
	placeholder: string;
	type?: string;
	prefix?: string;
	rows?: number;
};

export function InputField({ label, placeholder, type = "text", prefix, rows }: InputFieldProps) {
	if (type === "textarea") {
		return (
			<div className="flex flex-col gap-2">
				<label className="text-foreground font-semibold text-lg md:text-xl">{label}</label>
				<textarea
					rows={rows || 4}
					placeholder={placeholder}
					className="w-full text-foreground placeholder:text-muted-foreground rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary border border-border outline-none transition resize-none"
				/>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-2">
			<label className="text-foreground font-semibold text-lg md:text-xl">{label}</label>
			<div className={`flex items-center gap-2 ${prefix ? "border border-border rounded-xl px-4 py-3" : ""}`}>
				{prefix && <span className="text-foreground font-medium">{prefix}</span>}
				<input
					type={type}
					placeholder={placeholder}
					className={`w-full ${prefix ? "bg-transparent" : "border border-border rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary"} text-foreground placeholder:text-muted-foreground outline-none transition`}
				/>
			</div>
		</div>
	);
}
