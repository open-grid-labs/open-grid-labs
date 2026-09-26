import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = () => {
	const {pathname, hash} = useLocation();

	useEffect(() => {
		// Deep links like /services#build scroll to that section once it has rendered
		if (hash) {
			const id = setTimeout(() => {
				document.getElementById(hash.slice(1))?.scrollIntoView({behavior: 'smooth', block: 'start'});
			}, 100);
			return () => clearTimeout(id);
		}

		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	}, [pathname, hash]);

	return null;
};

export default ScrollToTop;
