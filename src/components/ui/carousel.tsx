import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
	items: string[];
	type?: "image" | "video"; // For now assume strings are URLs
	className?: string;
}

export default function Carousel({ items, type = "image", className = "" }: CarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const slideVariants = {
		hiddenRight: {
			x: "100%",
			opacity: 0,
		},
		hiddenLeft: {
			x: "-100%",
			opacity: 0,
		},
		visible: {
			x: "0",
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
		exit: {
			opacity: 0,
			scale: 0.8,
			transition: {
				duration: 0.3,
			},
		},
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex + 1 === items.length ? 0 : prevIndex + 1
		);
	};

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex - 1 < 0 ? items.length - 1 : prevIndex - 1
		);
	};

	const handleDotClick = (index: number) => {
		setCurrentIndex(index);
	};

	if (!items || items.length === 0) return null;

	return (
		<div className={`relative w-full overflow-hidden rounded-xl bg-foreground/5 h-[400px] ${className}`}>
			<div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
				{items.map((_, index) => (
					<button
						key={index}
						onClick={() => handleDotClick(index)}
						className={`h-2 w-2 rounded-full transition-colors ${
							currentIndex === index ? "bg-primary" : "bg-foreground/20"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>

			<div className="flex h-full w-full items-center justify-center">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentIndex}
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -50 }}
						transition={{ duration: 0.3 }}
						className="h-full w-full flex items-center justify-center"
					>
						{type === "image" ? (
							<img
								src={items[currentIndex]}
								alt={`Slide ${currentIndex}`}
								className="h-full w-full object-cover"
							/>
						) : (
                            // Assuming video urls for now if type is video, but user asked for GIF in carousel
                            // which is technically an image.
							<img
								src={items[currentIndex]}
								alt={`Slide ${currentIndex}`}
								className="h-full w-full object-cover"
							/>
						)}
					</motion.div>
				</AnimatePresence>
			</div>
            
            {items.length > 1 && (
                <>
                    <button
                        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 backdrop-blur-sm transition-colors"
                        onClick={handlePrevious}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 backdrop-blur-sm transition-colors"
                        onClick={handleNext}
                    >
                        <ChevronRight size={24} />
                    </button>
                </>
            )}
		</div>
	);
}
