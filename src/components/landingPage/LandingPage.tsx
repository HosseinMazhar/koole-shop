import Image from "next/image";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <section className="w-full flex flex-col gap-3 lg:flex-row px-10 justify-center items-center">
        <Image
          width={600}
          height={600}
          src={"/landingPage/schoolBag.png"}
          alt="schoolBag"
          priority
        />
        <article className="flex flex-col gap-5">
          <h1 className="max-w-[600px] text-5xl md:text-6xl font-extrabold text-center lg:text-left">
            Grab your perfect bag today!
          </h1>
          <p className="max-w-[600px] md:text-xl text-center lg:text-left text-slate-700 dark:text-slate-500">
            Whether you need a sturdy school bag, a sleek work backpack, or a
            reliable travel companion, we&apos;ve got you covered. Explore our
            stylish and durable collection today and carry comfort with
            confidence
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link href={"/products"}>
              <span className="flex gap-2 text-yellow-600 hover:text-yellow-500 font-bold">
                <SquareArrowOutUpRight />
                View our Products
              </span>
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
