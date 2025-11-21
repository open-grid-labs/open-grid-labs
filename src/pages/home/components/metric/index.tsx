import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import PageHeading from '../../../../components/page-heading';

const connections = [
	{ id: 1, path: "M 30 40 Q 50 20 70 40", duration: 4 },
	{ id: 2, path: "M 30 40 Q 40 60 50 50", duration: 3.5 },
	{ id: 3, path: "M 70 40 Q 80 50 75 60", duration: 3.2 },
	{ id: 4, path: "M 50 50 Q 60 45 70 40", duration: 3.8 },
];

const locations = [
	{ x: 30, y: 40, delay: 0 },
	{ x: 50, y: 50, delay: 0.2 },
	{ x: 70, y: 40, delay: 0.4 },
	{ x: 75, y: 60, delay: 0.6 },
];


const HomeMetric = () => {
	const [count, setCount] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true })

	useEffect(() => {
		if (!isInView) return;
		const interval = setInterval(() => {
			setCount(prev => (prev < 100 ? prev + 1 : 100));
		}, 30);
		return () => clearInterval(interval);
	}, [isInView]);


	return (
		<section
			id="home-metric"
			className="w-full flex flex-col items-center text-center relative justify-center"
			ref={ref}
		>
			<PageHeading
				preTitle={`${count}+ Project`}
				mainTitle='Delivered'
				postTitle='And Counting more'
			/>

			<div className="w-full transition flex flex-col items-center md:px-36 relative">

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
					className="relative w-full "
				>
					<svg className="w-full h-full" viewBox="0 0 100 80" preserveAspectRatio="xMidYMid meet">
						<image
							href="/images/world.svg"
							x="0"
							y="15"
							width="100"
							height="60"
							preserveAspectRatio="xMidYMid meet"
							opacity="0.8"
						/>

						{connections.map((conn) => (
							<g key={conn.id}>
								<motion.path
									d={conn.path}
									fill="none"
									stroke="#555"
									strokeWidth="0.5"
									strokeDasharray="2,3"
									initial={{ pathLength: 0, opacity: 0 }}
									animate={{ pathLength: 1, opacity: 0.6 }}
									transition={{ duration: 1.5, delay: 1.2 }}
								/>

								<motion.circle
									r="1"
									fill="#222"
									initial={{ opacity: 0 }}
									animate={{ opacity: [0, 1, 1, 0] }}
									transition={{
										duration: conn.duration,
										delay: 1.5,
										repeat: Infinity,
										ease: "easeInOut"
									}}
								>
									<animateMotion
										dur={`${conn.duration}s`}
										repeatCount="indefinite"
										path={conn.path}
										begin="1.5s"
									/>
								</motion.circle>
							</g>
						))}

						{locations.map((loc, index) => (
							<g key={index}>
								<motion.circle
									cx={loc.x}
									cy={loc.y}
									r="3"
									fill="none"
									stroke="#888"
									strokeWidth="0.5"
									initial={{ scale: 0, opacity: 0 }}
									animate={{ scale: [1, 2, 2], opacity: [0, 0.5, 0] }}
									transition={{ duration: 2, delay: 1.5 + loc.delay, repeat: Infinity, ease: "easeOut" }}
								/>
								<motion.circle
									cx={loc.x}
									cy={loc.y}
									r="1.5"
									fill="#333"
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ duration: 0.5, delay: 1.3 + loc.delay, type: "spring", stiffness: 200 }}
								/>
							</g>
						))}

						<motion.circle
							cx="50"
							cy="45"
							r="2"
							fill="#111"
							initial={{ scale: 0 }}
							animate={{ scale: [0, 1.2, 1] }}
							transition={{ duration: 0.6, delay: 1.8 }}
						/>

						<motion.circle
							cx="50"
							cy="45"
							r="4"
							fill="none"
							stroke="#444"
							strokeWidth="0.5"
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
							transition={{ duration: 2, delay: 2, repeat: Infinity, ease: "easeOut" }}
						/>
					</svg>

				</motion.div>


				{[...Array(6)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-40"
						style={{
							left: `${20 + i * 15}%`,
							top: `${30 + (i % 3) * 20}%`,
						}}
						animate={{
							y: [0, -30, 0],
							opacity: [0.2, 0.6, 0.2],
						}}
						transition={{
							duration: 3 + i * 0.5,
							repeat: Infinity,
							delay: i * 0.3,
							ease: "easeInOut",
						}}
					/>
				))}
			</div>
		</section>
	);
};

export default HomeMetric;