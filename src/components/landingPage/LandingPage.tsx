import Image from "next/image";

export default function LandingPage() {
    return (
        <section className="w-full flex flex-col gap-3 md:flex-row px-10 justify-center items-center">
            <Image width={600} height={600} src={"/landingPage/schoolBag.png"} alt="schoolBag"/>
        </section>
    )
}