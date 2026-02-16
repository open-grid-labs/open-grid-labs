import Card from "../../components/card";
import PageTitle from "../../components/page-title";
import SEO from "../../components/seo";


export default function TermsOfUse() {
	return (
		<>
			<SEO
				title="Terms of Use"
				description="OpenGridLabs Terms of Use - Review the rules, responsibilities, and guidelines for using our website and services."
				canonical="/terms-of-use"
			/>
			<PageTitle
				mainTitle="Terms of Use"
				subTitle="Effective Date: 26/11/2025"
				description="These Terms of Use outline the rules, responsibilities, and guidelines for using our website and services, including how we protect your information and intellectual property."
			/>

			<div className="flex flex-col gap-6">
				<Card title="Acceptance of Terms">
					By using this website, you agree to comply with and be bound by these Terms of Use. If you do not agree, please do not use the website.
				</Card>

				<Card title="Use of Website">
					You may use this website for lawful purposes only. You agree not to:
					<ul className="list-disc ml-6">
						<li>Engage in any activity that could harm or disrupt the website</li>
						<li>Use the website to infringe on the rights of others</li>
						<li>Attempt to gain unauthorized access to any part of the website</li>
					</ul>
				</Card>

				<Card title="Intellectual Property">
					All content on this website, including text, graphics, logos, and images, is the property of OpenGridLabs or its licensors. You may not copy, reproduce, or distribute any content without prior written permission.
				</Card>

				<Card title="Limitation of Liability">
					OpenGridLabs is not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the website.
				</Card>

				<Card title="External Links">
					This website may contain links to third-party websites. We are not responsible for the content, privacy practices, or reliability of these external sites.
				</Card>

				<Card title="Changes to Terms">
					We may update these Terms of Use from time to time. The updated version will be posted on this page with a revised “Effective Date”.
				</Card>
			</div>
		</>
	)
}