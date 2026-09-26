import { Helmet } from "react-helmet-async";

type SEOProps = {
	title: string;
	description: string;
	canonical?: string;
	keywords?: string;
	noIndex?: boolean;
};

const SITE_NAME = "OpenGridLabs";
const SITE_URL = "https://opengridlabs.com";
const OG_IMAGE = `${SITE_URL}/images/og-default.png`;

export default function SEO({title, description, canonical, keywords, noIndex = false}: SEOProps) {
	const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
	const url = canonical && `${SITE_URL}${canonical}`;

	return (
		<Helmet>
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			{keywords && <meta name="keywords" content={keywords} />}
			{noIndex && <meta name="robots" content="noindex, nofollow" />}
			{url && <link rel="canonical" href={url}/>}

			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website"/>
			<meta property="og:site_name" content={SITE_NAME} />
			<meta property="og:image" content={OG_IMAGE}/>
			{url && <meta property="og:url" content={url}/>}

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={OG_IMAGE}/>
		</Helmet>
	);
}
