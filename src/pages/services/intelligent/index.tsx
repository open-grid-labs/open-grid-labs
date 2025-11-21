import { Box, Figma, GitBranch, MessageSquare, Slack } from "lucide-react";
import PageTitle from "../../../components/page-title";
import OtherServices from "../components/other-services";
import ToolsWeUse from "../components/tools-we-use";
import ServiceDetailsWeServe from "../components/we-serve";
import WorkingStep from "../components/working-step";

const services = {
  "Artificial Intelligence": [
    "Agentic AI",
    "Large Language Models",
    "Voice to Text Converter",
    "AI Strategy Consulting",
    "Explainable AI",
    "AI Ethics & Governance",
    "Prompt Engineering",
    "AI Model Fine-tuning",
    "RAG Implementation",
    "AI Integration Services",
    "Custom AI Solutions",
    "AI Performance Monitoring",
  ],

  "Machine Learning": [
    "Predictive Modeling",
    "Classification Systems",
    "Regression Analysis",
    "Clustering Algorithms",
    "Recommendation Engines",
    "Anomaly Detection",
    "Time Series Forecasting",
    "Feature Engineering",
    "Model Optimization",
    "A/B Testing ML",
    "AutoML Solutions",
    "MLOps Pipeline",
  ],

  "Deep Learning": [
    "Neural Networks",
    "Computer Vision",
    "Image Recognition",
    "Object Detection",
    "Face Recognition",
    "OCR Solutions",
    "Video Analytics",
    "Generative AI",
    "Style Transfer",
    "CNN Models",
    "RNN/LSTM",
    "Transfer Learning",
  ],

  "Natural Language Processing": [
    "Text Analytics",
    "Sentiment Analysis",
    "Chatbots & Virtual Assistants",
    "Language Translation",
    "Named Entity Recognition",
    "Topic Modeling",
    "Text Summarization",
    "Question Answering",
    "Intent Recognition",
    "Content Generation",
    "Speech Recognition",
    "Voice Synthesis",
  ],
};


const steps = [
  {
    number: "01",
    title: "Data Discovery & Assessment",
    desc: "We analyze your existing data sources, quality, and structure to identify opportunities for AI-driven automation."
  },
  {
    number: "02",
    title: "AI Strategy & Planning",
    desc: "We create a complete AI roadmap, define metrics, choose algorithms, and build a scalable architecture aligned with your goals."
  },
  {
    number: "03",
    title: "Data Preparation & Engineering",
    desc: "We clean, transform, and engineer features from your data to build strong, dependable datasets."
  },
  {
    number: "04",
    title: "Model Development & Training",
    desc: "We design, train, and refine AI models using advanced techniques to achieve high accuracy and performance."
  },
  {
    number: "05",
    title: "Testing & Validation",
    desc: "We perform extensive testing with real-world scenarios to ensure reliability, stability, and robustness."
  },
  {
    number: "06",
    title: "Deployment & Monitoring",
    desc: "We deploy models with monitoring systems, enabling continuous tracking, retraining, and improvement."
  }
];


const tools = [
	{ icon: GitBranch, name: "Git" },
	{ icon: Figma, name: "Figma" },
	{ icon: Box, name: "Jira" },
	{ icon: Box, name: "Docker" },
	{ icon: MessageSquare, name: "Twilio" },
	{ icon: Slack, name: "Slack" },
];

const otherServices = [
	{ name: "Software", description: "Leverage the power of code", link: "/services/software" },
	{ name: "Design", description: "Design the future of tomorrow", link: "/services/design" },
];

export default function ServicesIntelligent() {
	return (
		<>
			<PageTitle
				label="Intelligent"
				mainTitle="Intelligent"
				subTitle="Services"
				description="We harness the power of AI and machine learning to build intelligent solutions that automate processes, extract insights, and drive data-driven decision making for your business."
			/>

			<ServiceDetailsWeServe
			description="Delivering Advanced AI, Machine Learning, and Data Intelligence Solutions to Transform Your Business with Automated Insights, Predictive Analytics, and Smart Decision Making."
			services={services}
			 />

			<WorkingStep steps={steps} />

			<ToolsWeUse tools={tools} />

			<OtherServices otherServices={otherServices} />
		</>
	)
}