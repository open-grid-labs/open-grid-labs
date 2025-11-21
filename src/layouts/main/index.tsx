import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import { Outlet } from "react-router";
import Spacer from "../../components/spacer";

export default function MainLayout() {
	return (
		<div className="min-h-screen bg-background">
			<Nav />
			<Spacer />
			<div className="max-w-6xl mx-auto px-4 flex flex-col gap-24 pt-4">
				<Outlet />
				<Contact />
			</div>
			<Footer />
		</div>
	)
}