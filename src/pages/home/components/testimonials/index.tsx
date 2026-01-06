import { Star } from "lucide-react";
import PageHeading2 from "../../../../components/page-heading-2";

const reviews = [
  {
    name: "Rohit Hiwale",
    role: "CEO at Morphle Labs",
    image: "founders/rohit-hiwale.jpeg",
    rating: 5,
    comment: "The web application for microscopic scanner is incredibly intuitive. It has streamlined our workflow and improved accuracy tremendously.",
  },
  {
    name: "Chris DuPont",
    role: "CEO at Galen Data",
    image: "founders/chris-dupont.jpeg",
    rating: 5,
    comment: "The cloud platform for medical devices is seamless and reliable. It has transformed how our team manages and analyzes device data.",
  },
  {
    name: "Abbas Dhilawala",
    role: "CTO at Matrix One",
    image: "founders/abbas-dhilawala.avif",
    rating: 4,
    comment: "The tools are well-designed and effective. The overall experience has been positive and productive.",
  },
  {
    name: "Salim Boutaleb",
    role: "Head Of Quants at ETG",
    image: "founders/placeholder.png",
    rating: 5,
    comment: "The 'AirTrader' trading simulator application is robust and user-friendly. It has improved our strategy testing and decision-making processes.",
  },
  {
    name: "Benjamin Zeimis",
    role: "Founder at Jlabs Digital",
    image: "founders/placeholder.png",
    rating: 5,
    comment: "The crypto analytical tools are comprehensive and insightful. They provide valuable data for smarter investment decisions.",
  },
  {
    name: "Rahul Pandey",
    role: "Associate Vice President at SG Analytics",
    image: "founders/rahul-pandey.jpeg",
    rating: 5,
    comment: "The tread pattern monitoring system POC and analytical dashboard are extremely useful. They simplify complex analysis and enhance our operational efficiency.",
  },
];



type ReviewCardProps = {
  review: { name: string, role: string, image: string, rating: number, comment: string }
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="relative border border-border rounded-2xl p-6 flex flex-col gap-6 min-h-64 overflow-hidden">

      <div className="absolute top-0 left-0 w-16 h-1 bg-foreground/30 rounded-b-full"></div>

      <div className="flex flex-col gap-4 z-10 relative">
        <div className="flex items-center gap-2 text-foreground">
          {Array.from({ length: review.rating }).map((_, idx) => (
            <Star key={idx} size={18} className="fill-foreground" />
          ))}
        </div>
        <p className="text-base text-foreground font-switzer leading-relaxed line-clamp-5">
          "{review.comment}"
        </p>
      </div>

      <div className="flex items-center gap-4 mt-4 z-10 relative mt-auto">
        <img
          alt={review.name}
          loading="lazy"
          width="48"
          height="48"
          className="rounded-full object-cover border border-border transform rotate-1"
          src={review.image}
        />
        <div>
          <p className="font-semibold text-sm text-foreground">{review.name}</p>
          <p className="text-xs text-muted-foreground">{review.role}</p>
        </div>
      </div>

      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-foreground/10 rounded-full rotate-12 z-0"></div>
    </div>
  );
}


export default function HomeTestimonials({
  preTitle = 'Hear What Our',
  mainTitle = 'Clients Have To Say.'
}: { preTitle?: string, mainTitle?: string }) {
  return (
    <section id="home-testimonials" className="w-full flex flex-col relative justify-center">
      <PageHeading2
        preTitle={preTitle}
        mainTitle={mainTitle}
      />

      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-5 mt-10">
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} review={review} />
        ))}
      </div>
    </section>
  );
}
