import Image from "next/image";
import LogoImg from "../../../public/site_images/FizzBuzzBlog_Logo.png";
import Link from "next/link";

export default function Logo({ text }) {
    return (
        <section className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-2 md:space-x-2">
            <Image
                className="rounded-full"
                src={LogoImg}
                alt="Logo Image"
                width={80}
                height={80}
            />
            <Link
                href="/"
                className="text-xl md:text-4xl px-2 py-1 font-righteous text-brand-color1">
                {text}
            </Link>
        </section>
    );
}
