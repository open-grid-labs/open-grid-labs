import { brands } from "../../components/hero";
import PageHeading from "../../components/page-heading";
import PageHeading2 from "../../components/page-heading-2";
import PageTitle from "../../components/page-title";
import SEO from "../../components/seo";
import HomeTestimonials from "../home/components/testimonials";
import ClientsExpertise from "./components/clients-expertise";

export default function Clients() {
	return (
		<>
			<SEO
				title="Our Clients - Trusted Partners & Testimonials"
				description="OpenGridLabs proudly partners with leading brands like Morphle Labs, Galen Data, ETG Commodities, NPCI, and United Health Group. See our client success stories and testimonials."
				canonical="/clients"
				keywords="OpenGridLabs clients, technology partners, client testimonials, healthcare clients, fintech clients, enterprise clients"
			/>
			<PageTitle
				label="Our Clients"
				mainTitle="Trusted"
				subTitle="Partners"
				description="We proudly collaborate with diverse clients worldwide, delivering tailored digital solutions that foster trust, long-term partnerships, and measurable business success."
			/>

			<div>
				<PageHeading
					preTitle="Trusted"
					mainTitle="Leading"
					postTitle="Brands"
				/>

				<div className='w-full grid grid-cols-2 md:grid-cols-3 gap-5 mt-8 mx-auto'>
					{
						brands.map((b, i) => (
							<div key={i} className='bg-foreground/5 border border-border rounded-2xl px-6 py-8 flex items-center justify-center'>
								<img src={b.href} alt={b.alt} className='w-auto h-18 grayscale object-contain ' />
							</div>
						))
					}
				</div>
			</div>

			<HomeTestimonials
				preTitle="Happy Clients With 50+"
				mainTitle="Successful Projects."
			/>

			<div>
				<PageHeading2
					preTitle="Industries We Have"
					mainTitle="Successfully Worked In"
				/>

				<ClientsExpertise />
			</div>
		</>
	)
}