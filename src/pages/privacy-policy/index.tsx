import Card from "../../components/card";
import PageTitle from "../../components/page-title";
import SEO from "../../components/seo";


export default function PrivacyPolicy() {
	return (
		<>
			<SEO
				title="Privacy Policy"
				description="OpenGridLabs Privacy Policy - Learn how we collect, use, and protect your personal information when using our website and services."
				canonical="/privacy-policy"
			/>
			<PageTitle
				mainTitle="Privacy Policy"
				subTitle="Effective Date: 26/11/2025"
				description="This Privacy Policy explains how we collect, use, and protect the personal information you provide when using our website and services."
			/>

			<div className="flex flex-col gap-6">
				<Card title="Information We Collect">
					We only collect information that you voluntarily provide, such as when you fill out a contact form. This may include:
					<ul className="list-disc ml-6">
						<li>Name</li>
						<li>Email address</li>
						<li>Phone number</li>
						<li>Message or inquiry</li>
					</ul>
					Our website does not use cookies or tracking tools.
				</Card>

				<Card title="How We Use Your Information">
					The information you provide is used solely to:
					<ul className="list-disc ml-6">
						<li>Respond to your inquiries</li>
						<li>Provide requested services</li>
						<li>Communicate relevant updates about our services</li>
					</ul>
				</Card>

				<Card title="Information Sharing">
					We do not sell, rent, or share your personal information with third parties, except as required by law.
				</Card>

				<Card title="Data Security">
					We take reasonable measures to protect your information from unauthorized access, disclosure, or misuse. However, no method of transmission over the Internet is completely secure.
				</Card>

				<Card title="Your Rights">
					You may request access to the personal information we hold about you, or request its correction or deletion, by contacting us at your provided email address.
				</Card>

				<Card title="Changes to This Policy">
					We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised “Effective Date”.
				</Card>
			</div>

		</>
	)
}