import PageHeading from "../../../../components/page-heading";
import ServiceCard from "../../../../components/service-card";


type otherService = {
	name: string
	description: string
	link: string
}

type OtherServicesProps = {
	otherServices: otherService[]
}

export default function OtherServices({otherServices}: OtherServicesProps) {
	return (
		<section id="service-details-other-services" className="w-full flex flex-col relative justify-center text-center">
			<PageHeading
				preTitle="See"
				mainTitle="Other"
				postTitle="Services"
			/>

			<div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6 mt-10 text-left">
				{otherServices.map((service, idx) => (
					<ServiceCard key={idx} link={service.link} name={service.name} description={service.description} />
				))}
			</div>
		</section>
	);
}
