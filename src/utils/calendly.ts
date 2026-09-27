declare global {
	interface Window {
		Calendly?: { initPopupWidget: (options: { url: string }) => void };
	}
}

export const CALENDLY_URL =
	"https://calendly.com/opengridlabs/30min?hide_landing_page_details=1&hide_gdpr_banner=1";

/**
 * Opens the Calendly booking popup. When an idea is passed, it is pre-filled
 * into the first custom question of the booking form (Calendly's `a1` param).
 */
export function openCalendly(idea?: string) {
	const trimmed = idea?.trim();
	const url = trimmed ? `${CALENDLY_URL}&a1=${encodeURIComponent(trimmed)}` : CALENDLY_URL;

	if (window.Calendly) {
		window.Calendly.initPopupWidget({url});
	} else {
		window.open(url, "_blank", "noopener");
	}
}
