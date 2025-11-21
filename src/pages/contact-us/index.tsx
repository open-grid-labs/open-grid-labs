import PageHeading from "../../components/page-heading";
import PageTitle from "../../components/page-title";
import ContactForm from "./components/contact-form";
import ContactInfo from "./components/contact-info";

export default function ContactUs() {
	return (
		<>
			<PageTitle
				label="Contact Us"
				mainTitle="Get In"
				subTitle="Touch"
				description="Get in touch with us for project inquiries, support, or collaboration our team is here to help and respond quickly"
			/>

			<ContactForm />

			<div>
				<PageHeading
					preTitle="Our"
					mainTitle="Contact"
					postTitle="Information"
				/>
				<ContactInfo />
			</div>
		</>
	)
}