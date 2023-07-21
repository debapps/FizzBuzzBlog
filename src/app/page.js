import Image from "next/image";
import LogoImg from "../../public/site_images/FizzBuzzBlog_Logo.png";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-36">
            <h1 className="font-righteous text-4xl text-brand-color1 bg-brand-color2 p-5 m-1">
                Welcome, FizzBuzz Blog.
            </h1>
            <Image src={LogoImg} alt="FizzBuzz Logo" />
        </main>
    );
}
