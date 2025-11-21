import PageHeading2 from "../../../../components/page-heading-2";

export default function HomeAbout() {
  return (
    <section
      id="home-about"
      className="grid md:grid-cols-3 grid-cols-1 w-full gap-5 items-end"
    >
      <PageHeading2
        preTitle="Helping"
        mainTitle="Businesses Grow"
      />

      <p className="col-span-2 text-2xl font-normal leading-9 text-muted-foreground">
        To transform how the world interacts with digital information, ensuring
        accessibility, reliability, and excellence in every product and service
        we deliver. We believe that through technology, we can create a better,
        more connected world where information flows freely, and innovation.
      </p>
    </section>
  );
}
