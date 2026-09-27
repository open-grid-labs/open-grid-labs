/** Fade + slide up once the element scrolls into view. Spread onto a motion component. */
export const inView = (delay = 0, y = 24) => ({
	initial: {opacity: 0, y},
	whileInView: {opacity: 1, y: 0},
	viewport: {once: true, margin: "-60px"},
	transition: {duration: 0.5, delay},
});
