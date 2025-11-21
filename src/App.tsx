import { Navigate, Route, Routes } from "react-router"
import Home from "./pages/home"
import Work from "./pages/work"
import MainLayout from "./layouts/main"
import Clients from "./pages/clients"
import ServicesSoftware from "./pages/services/software"
import ServicesIntelligent from "./pages/services/intelligent"
import ServicesDesign from "./pages/services/design"
import AboutUs from "./pages/about/about-us"
import Team from "./pages/about/team"
import Career from "./pages/about/career"
import ContactUs from "./pages/contact-us"

function App() {
	return (
		<div className="bg-background text-text3 font-poppins min-h-screen">
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="work" element={<Work />} />
					<Route path="clients" element={<Clients />} />
					<Route path="services">
						<Route index element={<Navigate to="/services/software" replace />} />
						<Route index path="software" element={<ServicesSoftware />} />
						<Route index path="intelligent" element={<ServicesIntelligent />} />
						<Route index path="design" element={<ServicesDesign />} />
					</Route>
					<Route path="about">
						<Route index element={<Navigate to="/about/about-us" replace />} />
						<Route index path="about-us" element={<AboutUs />} />
						<Route index path="team" element={<Team />} />
						<Route index path="career" element={<Career />} />
					</Route>
					<Route path="contact-us" element={<ContactUs />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App