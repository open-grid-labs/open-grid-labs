import {Navigate, Route, Routes} from "react-router";
import MainLayout from "./layouts/main";
import Home from "./pages/home";
import HowItWorks from "./pages/how-it-works";
import Work from "./pages/work";
import ProjectDetails from "./pages/work/project-details";
import AboutUs from "./pages/about/about-us";
import Team from "./pages/about/team";
import Career from "./pages/about/career";
import ContactUs from "./pages/contact-us";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsOfUse from "./pages/terms-of-use";
import NotFound from "./pages/NotFound";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout/>}>
				<Route index element={<Home/>}/>
				<Route path="services" element={<HowItWorks/>}/>
				{/* Old per-technology, industry and client pages now fold into the journey page / home */}
				<Route path="services/*" element={<Navigate to="/services" replace/>}/>
				<Route path="how-it-works" element={<Navigate to="/services" replace/>}/>
				<Route path="clients" element={<Navigate to="/" replace/>}/>
				<Route path="work" element={<Work/>}/>
				<Route path="work/:projectId" element={<ProjectDetails/>}/>
				<Route path="about" element={<Navigate to="/about/about-us" replace/>}/>
				<Route path="about/about-us" element={<AboutUs/>}/>
				<Route path="about/team" element={<Team/>}/>
				<Route path="about/career" element={<Career/>}/>
				<Route path="contact-us" element={<ContactUs/>}/>
				<Route path="privacy-policy" element={<PrivacyPolicy/>}/>
				<Route path="terms-of-use" element={<TermsOfUse/>}/>
				<Route path="*" element={<NotFound/>}/>
			</Route>
		</Routes>
	);
}
