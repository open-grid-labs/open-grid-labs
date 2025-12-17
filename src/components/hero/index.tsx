import { motion } from 'motion/react'
import { PhoneCall } from 'lucide-react';
import ButtonLink from '../ui/button-link.tsx';


export const brands = [
	{href: 'clients/morphlelabs.png', alt: 'Morphle Labs'},
	{href: 'clients/galen-data.png', alt: 'Galen Data'},
	{href: 'clients/matrix-one-health.svg', alt: 'Matrix One Health'},
	{href: 'clients/ETG-commodities.png', alt: 'ETG Commodities'},
	{href: 'clients/jlabs-digital.png', alt: 'JLabs Digital'},
	{href: 'clients/roni-analytics.png', alt: 'Roni Analytics'},
	{href: 'clients/sg-analytics.svg', alt: 'SG Analytics'},
	{href: 'clients/npci.png', alt: 'NPCI'},
	{href: 'clients/ambassade-de-france.png', alt: 'Ambassade De France'},
	{href: 'clients/united-health-group.png', alt: 'United Health Group'},
]

const Hero = () => {
	return (
		<section id='home-hero' className="relative min-h-screen flex justify-center overflow-hidden px-4">
			<div className="container mx-auto">
				<div className="max-w-4xl mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full mb-8"
					>
						<span className="text-xs font-medium uppercase tracking-wider">Next-Gen IT Solutions</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.2 }}
						className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight tracking-tight"
					>
						Change Your
						<br />
						Digital Future
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.4 }}
						className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
					>
						Intelligent, scalable solutions combining innovative technology with strategic thinking.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.6 }}
						className="flex flex-col sm:flex-row gap-4 justify-center"
					>
						<ButtonLink
							to='/contact-us'
							className='w-full sm:w-fit'
						>
							Book Call
							<PhoneCall size={20} className="ml-2 w-5 h-5" />
						</ButtonLink>
						<ButtonLink
							to='/services'
							className='w-full sm:w-fit'
							outline
						>
							Explore Services
						</ButtonLink>
					</motion.div>

					<motion.div
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 50 }}
						transition={{ duration: 0.3, delay: 0.6 }}
						viewport={{ once: true }}
						className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-16 max-w-3xl mx-auto'>
						{
							brands.slice(0, 8).map((b, i) => (
								<div key={i} className='bg-foreground/5 border border-border rounded-2xl px-6 py-3 flex items-center justify-center'>
									<img src={b.href} alt={b.alt} className='w-auto h-12 grayscale object-contain ' />
								</div>
							))
						}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
