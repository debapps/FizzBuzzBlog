import Image from "next/image";
import LogoImg from "../../../public/site_images/FizzBuzzBlog_Logo.png";
import Link from "next/link";

export default function Logo({ text }) {
    return (
        <Link
            className="flex flex-col lg:flex-row justify-center lg:justify-between items-center space-y-2 lg:space-x-2"
            href="/">
            <Image
                className="rounded-full"
                src={LogoImg}
                alt="Logo Image"
                width={80}
                height={80}
            />
            <h1 className="text-xl lg:text-4xl px-2 py-1 font-righteous text-brand-color1">
                {text}
            </h1>
        </Link>
    );
}
