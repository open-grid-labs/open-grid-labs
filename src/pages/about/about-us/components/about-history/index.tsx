import { Lightbulb, Mic, Rocket } from "lucide-react";
import PageHeading from "../../../../../components/page-heading";
import type { ReactNode } from "react";

const timelineData = [
  {
    year: "2019",
    description: "Develop cross-platform apps for Android and iOS with seamless user experience.",
    icon: <Rocket />,
  },
  {
    year: "2022",
    description: "Expanded services to include AI-powered analytics and real-time solutions for global clients.",
    icon: <Lightbulb />,
  },
  {
    year: "2025",
    description: "Build the News App real-time, reliable, news to users across the globe.",
    icon: <Mic />,
  },
];

type TimelineItem = {
  year: string;
  description: string;
  icon: ReactNode;
};

type TimelineProps = {
  data: TimelineItem[];
};

const Timeline = ({ data }: TimelineProps) => {
  return (
    <div className="relative">
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-muted-foreground"></div>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
        {data.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`relative md:col-span-1 md:justify-${isLeft ? "end" : "start"} flex flex-col md:items-${isLeft ? "end" : "start"} ml-6 md:mx-0`}
            >
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-foreground text-white z-10">
                  {item.icon}
                </div>
                <span className="ml-4 text-foreground font-bold text-lg md:text-xl">{item.year}</span>
              </div>
              <p className="mt-2 text-muted-foreground text-base md:text-lg max-w-md">{item.description}</p>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function AboutHistory() {
  return (
    <section
      id="about-us-history"
      className="w-full flex flex-col items-center justify-center text-center relative"
    >
      <PageHeading
        preTitle="Our"
        mainTitle="Agency"
        postTitle="Revolution History"
      />

      <div className="relative w-full mt-20 grid-cols-3 justify-start text-left gap-5">
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
