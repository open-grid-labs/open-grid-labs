import { Star } from "lucide-react";
import PageHeading2 from "../../../../components/page-heading-2";

const reviews = [
  {
    name: "Olivia Martinez",
    role: "Customer Manager at SupportEase",
    image: "/founders/img1.jpg",
    rating: 5,
    comment: "The new UI design cut our customer support tickets in half. It's been a game-changer for us.",
  },
  {
    name: "John Doe",
    role: "Product Lead at TechCorp",
    image: "/founders/img2.jpg",
    rating: 4,
    comment: "Impressive improvements in UX. Our team loves the new interface.",
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
  preTitle = 'Hear From What Our',
  mainTitle = 'Client Have To Say.'
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
