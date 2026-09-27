type InputFieldProps = {
	label: string;
	placeholder: string;
	value: string;
	onChange: (v: string) => void;
	type?: string;
	prefix?: string;
	rows?: number;
	pattern?: string;
	error?: string;
};

const boxClass = "bg-background/40 border-2 border-border rounded-2xl px-5 py-4 focus-within:border-primary transition-colors";

export function InputField({
	                           label,
	                           placeholder,
	                           value,
	                           onChange,
	                           type = "text",
	                           prefix,
	                           rows = 4,
	                           pattern,
	                           error
                           }: InputFieldProps) {
	const fieldProps = {
		value,
		placeholder,
		onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value),
		className: "w-full bg-transparent text-foreground placeholder:text-muted-foreground/70 outline-none resize-none",
	};

	return (
		<div className="flex flex-col gap-3">
			<label className="text-foreground/80 font-semibold text-sm tracking-wide uppercase">{label}</label>
			<div className={`flex items-center gap-2 ${boxClass}`}>
				{prefix && <span className="text-primary font-medium">{prefix}</span>}
				{type === "textarea" ? <textarea rows={rows} {...fieldProps} /> :
					<input type={type} pattern={pattern} {...fieldProps} />}
			</div>
			{error && <p className="text-red-500 text-sm mt-1">{error}</p>}
		</div>
	);
}
