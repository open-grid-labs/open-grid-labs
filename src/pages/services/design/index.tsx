import PageTitle from "../../../components/page-title";
import SEO from "../../../components/seo";
import OtherServices from "../components/other-services";
import ToolsWeUse from "../components/tools-we-use";
import ServiceDetailsWeServe from "../components/we-serve";
import WorkingStep from "../components/working-step";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { Blender, Canva, Framer, FreePik, Sketch } from "../../../icons/tools";

const services = {
  "UI/UX Design": [
    "User Research",
    "Wireframing",
    "Prototyping",
    "User Interface Design",
    "User Experience Design",
    "Design Systems",
    "Interaction Design",
    "Usability Testing",
    "Information Architecture",
    "Mobile App Design",
    "Web App Design",
    "Dashboard Design"
  ],

  "Brand Identity": [
    "Logo Design",
    "Brand Strategy",
    "Visual Identity",
    "Brand Guidelines",
    "Color Palette",
    "Typography",
    "Business Cards",
    "Letterhead Design",
    "Brand Collateral",
    "Package Design",
    "Signage Design",
    "Brand Refresh"
  ],

  "Graphic Design": [
    "Print Design",
    "Digital Graphics",
    "Marketing Materials",
    "Social Media Graphics",
    "Infographics",
    "Poster Design",
    "Brochure Design",
    "Flyer Design",
    "Banner Design",
    "Icon Design",
    "Illustration",
    "Motion Graphics"
  ]
};


const steps = [
  {
    number: "01",
    title: "Discovery & Research",
    desc: "We explore your brand, target audience, competitors, and design goals to create a solid foundation for impactful visual solutions."
  },
  {
    number: "02",
    title: "Concept Development",
    desc: "Our creative team brainstorms and develops multiple design concepts, exploring various visual directions that align with your objectives."
  },
  {
    number: "03",
    title: "Design Creation",
    desc: "We craft detailed designs using industry-leading tools, focusing on aesthetics, usability, and brand consistency across all touchpoints."
  },
  {
    number: "04",
    title: "Feedback & Iteration",
    desc: "We present designs for your review, gather feedback, and refine the concepts through collaborative iterations until perfection is achieved."
  },
  {
    number: "05",
    title: "Finalization & Assets",
    desc: "We finalize all design elements, prepare various file formats, and deliver comprehensive design assets ready for implementation."
  },
  {
    number: "06",
    title: "Support & Maintenance",
    desc: "We provide ongoing design support, brand guideline assistance, and future design updates to maintain consistency and freshness."
  }
];


const tools = [
  { icon: faFigma, name: "Figma" },
  { icon: <Sketch className="text-primary group-hover:scale-110 transition-transform duration-300" />, name: "Sketch" },
  { icon: <Framer className="text-primary group-hover:scale-110 transition-transform duration-300" />, name: "Framer" },
  { icon: <Blender className="text-primary group-hover:scale-110 transition-transform duration-300" />, name: "Blender" },
  { icon: <Canva className="text-primary group-hover:scale-110 transition-transform duration-300" />, name: "Canva" },
  { icon: <FreePik className="text-primary group-hover:scale-110 transition-transform duration-300" />, name: "FreePik" },
];

const otherServices = [
	{ name: "Software", description: "Leverage the power of code", link: "/services/software" },
	{ name: "Intelligent", description: "Connect the world with AI", link: "/services/intelligent" },
];

export default function ServicesDesign() {
	return (
		<>
			<SEO
				title="Design Services - UI/UX, Brand Identity & Graphic Design"
				description="Professional design services including UI/UX design, brand identity, logo design, graphic design, and motion graphics. We create stunning visual experiences using Figma, Sketch, and more."
				canonical="/services/design"
				keywords="UI/UX design services, brand identity, logo design, graphic design, web design, mobile app design, Figma, visual identity, motion graphics"
			/>
			<PageTitle
				label="Design"
				mainTitle="Design"
				subTitle="Services"
				description="We create stunning visual experiences that captivate audiences, strengthen brand identity, and deliver memorable user interactions across all platforms."
			/>

			<ServiceDetailsWeServe
			description="Crafting Beautiful, Functional, and Impactful Design Solutions that Elevate Brands, Engage Users, and Transform Creative Visions into Reality."
			services={services}
			 />

			<WorkingStep steps={steps} />

			<ToolsWeUse tools={tools} />

			<OtherServices otherServices={otherServices} />
		</>
	)
}