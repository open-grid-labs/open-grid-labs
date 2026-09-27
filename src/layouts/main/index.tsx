import {Outlet} from "react-router";
import {ToastContainer} from "react-toastify";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Nav from "../../components/nav";

export default function MainLayout() {
	return (
		<div className="min-h-screen flex flex-col items-center overflow-x-clip">
			<Nav />
			<main className="w-full pt-36 flex flex-col gap-24">
				<Outlet/>
				<Contact/>
			</main>
			<Footer/>
			<ToastContainer />
		</div>
	);
}
