type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-[#142B4A] px-5 py-12 text-white md:py-16">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-3 text-sm font-semibold text-blue-200">{eyebrow}</p>
        <h1 className="max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-blue-100">
          {description}
        </p>
      </div>
    </section>
  );
}
