export default function Indicator({ active = 0, total = 2 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: total }).map((_, idx) => (
        <div
          key={idx}
          className={`h-2 rounded-full transition-all duration-300 ${
            idx === active ? "w-6 bg-foreground" : "w-2 bg-muted-foreground"
          }`}
        ></div>
      ))}
    </div>
  );
}
