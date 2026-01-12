import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
	items: string[];
	type?: "image" | "video"; // For now assume strings are URLs
	className?: string;
}

export default function Carousel({ items, className = "" }: CarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex + 1 >= items.length ? 0 : prevIndex + 1
		);
	};

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex - 1 < 0 ? items.length - 1 : prevIndex - 1
		);
	};

	if (!items || items.length === 0) return null;

	// Calculate visible items logic could be complex for infinite loop with peek,
	// but for a simple "peek ahead" style, we can just render the current one huge and others small,
	// OR use a windowed view. 
	// Given the reference, it looks like a horizontal scroll snap or just a flex row shifted.
	// Let's go with a motion-animated flex row that shows 1 full item + partial of next.

	return (
		<div className={`w-full flex flex-col gap-6 ${className}`}>

			{/* Main Carousel Area */}
			<div className="relative w-full overflow-hidden">
				<motion.div
					className="flex gap-4"
					animate={{ x: `-${currentIndex * 85}%` }} // Shift by 85% to allow peek
					transition={{ type: "spring", stiffness: 300, damping: 30 }}
				>
					{items.map((item, index) => (
						<motion.div
							key={index}
							className={`relative shrink-0 w-[85%] aspect-[16/10] rounded-3xl overflow-hidden bg-foreground/5 flex items-center justify-center`}
							initial={{ opacity: 0.5, scale: 0.9 }}
							animate={{
								opacity: index === currentIndex ? 1 : 0.5,
								scale: index === currentIndex ? 1 : 0.95
							}}
							transition={{ duration: 0.3 }}
						>
							{/* We need individual loading states properly handled per image if we render all.
							    For simplicity in this refactor, we will use the existing simplistic state for the *current* 
							    one or lazy load. The current state `isLoading` was global. 
								Let's simplify and just use standard img rendering with local handlers if possible, 
								but to keep it robust, let's reset to a per-item Image component or just standard img 
								with error handling wrapper.
							*/}
							<CarouselImage src={item} alt={`Slide ${index}`} />
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* External Navigation Controls */}
			<div className="flex items-center justify-between px-2">
				<div className="flex gap-2">
					{/* Indicators */}
					{items.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? "w-8 bg-primary" : "w-2 bg-foreground/20"
								}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>

				<div className="flex gap-3">
					<button
						className="p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors text-foreground disabled:opacity-50"
						onClick={handlePrevious}
						aria-label="Previous slide"
					>
						<ChevronLeft size={20} />
					</button>
					<button
						className="p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors text-foreground disabled:opacity-50"
						onClick={handleNext}
						aria-label="Next slide"
					>
						<ChevronRight size={20} />
					</button>
				</div>
			</div>
		</div>
	);
}

// Helper component for individual image handling
function CarouselImage({ src, alt }: { src: string; alt: string }) {
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	return (
		<div className="w-full h-full relative">
			{isLoading && (
				<div className="absolute inset-0 flex items-center justify-center bg-foreground/5 z-0">
					<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
				</div>
			)}
			{hasError ? (
				<div className="h-full w-full flex flex-col items-center justify-center bg-foreground/5 text-muted-foreground p-4 text-center">
					<p>Failed to load media</p>
				</div>
			) : (
				<img
					src={src}
					alt={alt}
					className="h-full w-full object-contain"
					onLoad={() => setIsLoading(false)}
					onError={() => {
						setIsLoading(false);
						setHasError(true);
					}}
					style={{ display: isLoading ? 'none' : 'block' }}
				/>
			)}
		</div>
	);
}
