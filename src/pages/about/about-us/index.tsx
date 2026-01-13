import PageTitle from "../../../components/page-title";
import HomeFaq from "../../home/components/faq";
import About from "./components/about";
import AboutHistory from "./components/about-history";
import CoreValues from "./components/core-values";


const faqs = [
  {
    id: 1,
    question: "What industries does your company specialize in?",
    answer: "We cater to a wide range of industries including technology, healthcare, finance, and e-commerce, providing tailored digital solutions for each sector.",
  },
  {
    id: 2,
    question: "How do you ensure data security?",
    answer: "We implement robust security protocols, encryption, and compliance measures to protect client data across all our solutions.",
  },
  {
    id: 3,
    question: "Can you help with digital marketing?",
    answer: "Yes, we offer digital marketing services including SEO, social media strategy, content marketing, and performance analytics.",
  },
  {
    id: 4,
    question: "What kind of support is provided after implementation?",
    answer: "Our team provides ongoing support, maintenance, updates, and troubleshooting to ensure seamless performance post-deployment.",
  },
  {
    id: 5,
    question: "Do you offer services for startups?",
    answer: "Absolutely! We provide affordable, scalable, and flexible solutions specifically designed to help startups grow efficiently.",
  },
];


export default function AboutUs() {
  return (
    <>
      <PageTitle
        label="About Us"
        mainTitle="Discover"
        subTitle="OpenGridLabs"
        description="Empowering businesses with innovative digital solutions, OpenGridLabs transforms interactions through cutting-edge technology and forward-thinking strategies."
      />

      <About />

      <AboutHistory />

      <CoreValues />

      <HomeFaq faqs={faqs} />

    </>
  )
}