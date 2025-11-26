import { useEffect } from "react";

function CalendlyWidget() {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://assets.calendly.com/assets/external/widget.js";
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div
			className="calendly-inline-widget"
			data-url="https://calendly.com/priyanshud/contact-us?primary_color=000000"
		></div>
	);
}

export default CalendlyWidget;
