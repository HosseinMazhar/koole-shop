import Image from "next/image";

export default function LandingPage() {
  return (
    <section className="w-full flex flex-col gap-3 lg:flex-row px-10 justify-center items-center">
      <Image
        width={600}
        height={600}
        src={"/landingPage/schoolBag.png"}
        alt="schoolBag"
      />
      <article className="flex flex-col gap-5">
        <h1 className="max-w-[600px] text-5xl md:text-6xl font-extrabold text-center lg:text-left">
          Grab your perfect bag today!
        </h1>
        <p className="max-w-[600px] md:text-xl text-center lg:text-left text-slate-700 dark:text-slate-500">
          Whether you need a sturdy school bag, a sleek work backpack, or a
          reliable travel companion, we&apos;ve got you covered. Explore our stylish
          and durable collection today and carry comfort with confidence
        </p>
      </article>
    </section>
  );
}
