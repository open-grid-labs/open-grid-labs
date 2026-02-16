import PageHeading from "../../components/page-heading";
import PageTitle from "../../components/page-title";
import SEO from "../../components/seo";
import ContactForm from "./components/contact-form";
import ContactInfo from "./components/contact-info";

export default function ContactUs() {
	return (
		<>
			<SEO
				title="Contact Us - Get In Touch"
				description="Get in touch with OpenGridLabs for project inquiries, support, or collaboration. Contact us for custom software development, AI solutions, and design services. We respond quickly!"
				canonical="/contact-us"
				keywords="contact OpenGridLabs, hire developers, software consultation, project inquiry, get a quote"
			/>
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