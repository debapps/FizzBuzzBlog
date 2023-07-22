import Image from "next/image";
import LogoImg from "../../../public/site_images/FizzBuzzBlog_Logo.png";
import MyImg from "../../../public/site_images/about-me-1.jpg";
import Link from "next/link";

export const metadata = {
    title: "About | FizzBuzz Blog.",
    description:
        "FizzBuzz Blog is the personal blogging website for cutting-edge digital technology, sceince and innovation, cloud computing and web technologies.",
};

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10 lg:px-48 lg:pt-36 lg:pb-10">
            <article className="flex flex-col lg:flex-row justify-center items-center mb-10">
                <Image
                    className="m-4 rounded-full shadow-lg shadow-brand-color2"
                    src={LogoImg}
                    alt="about-page-image"
                    width={500}
                    height={500}
                />
                <div className="flex flex-col m-4 justify-center items-start space-y-4">
                    <h2 className="text-xl lg:text-4xl font-russo text-brand-color1 mb-2">
                        The Story of FizzBuzz Blog.
                    </h2>
                    <p className="text-base lg:text-xl font-poppins">
                        <span className="font-righteous text-brand-color1 bg-brand-color2 p-1 rounded-sm">
                            FizzBuzz Blog.
                        </span>{" "}
                        is the personal blogging website for cutting-edge
                        digital technology, science and innovation, cloud
                        computing and web technologies.
                    </p>
                    <p className="text-base lg:text-xl font-poppins">
                        The name of the blog is inspired by the popular
                        programming problem - <strong>FizzBuzz</strong>, which
                        is taught to the novice programmers in the basic
                        foundation course of programming.
                    </p>
                    <p className="text-base lg:text-xl font-poppins">
                        It is often called as game of counting where
                        participants have to replace numbers, multiples of 3
                        with the word <strong>Fizz</strong>, the multiples of 5
                        with the word <strong>Buzz</strong>, and the multiples
                        of 3 and 5 with the word <strong>FizzBuzz</strong>. The
                        rest of the numbers will remain unchanged. This is also
                        popular interview question for beginner level
                        programmers.
                    </p>
                    <p className="text-base lg:text-xl font-poppins">
                        In {"today's"} world, technology, science innovation and
                        artificial intelligence are growing in a lighting speed.
                        The idea flows in rapid pace.{" "}
                        <span className="font-righteous text-brand-color1 bg-brand-color2 p-1 rounded-sm">
                            FizzBuzz Blog.
                        </span>{" "}
                        is the place where I like to share my ideas, my growth
                        journey to the world, so that, the next-gen can learn
                        rapidly and grow simulteneously with the ever-changing
                        technologies.
                    </p>
                    <p className="text-base lg:text-xl font-righteous text-brand-color1 bg-brand-color2 p-1 rounded-sm font-bold">
                        Happy Reading ...
                    </p>
                </div>
            </article>
            <article className="flex flex-col lg:flex-row justify-center items-center mb-10">
                <div className="flex flex-col m-4 justify-center items-start space-y-4">
                    <h2 className="text-xl lg:text-4xl font-russo text-brand-color1 mb-2">
                        About me.
                    </h2>
                    <p className="text-base lg:text-xl font-poppins">
                        Hello, I am{" "}
                        <span className="font-righteous text-brand-color1 bg-brand-color2 p-1 rounded-sm">
                            Debaditya Bhar
                        </span>
                        . I am a Softwere Engineer since 2010. I worked in
                        different phases of software life cycles over a decade
                        of my career journey on client side and offshore
                        locations.
                    </p>
                    <p className="text-base lg:text-xl font-poppins">
                        I have worked in several technologies. I started my
                        career in Mainframe development. Then, I learned web
                        development and technologies. Meanwhile, I worked as
                        Data Analyst with Python. Finally, I work as AWS Cloud
                        Engineer.
                    </p>
                    <p className="text-base lg:text-xl font-poppins">
                        I like to write technical blogs and articles as well as
                        books. Please find my E-book and Papepback on{" "}
                        <strong>Amazon</strong> on Operating System:
                    </p>
                    <Link
                        className="text-base lg:text-xl font-poppins font-bold underline text-brand-color1 bg-brand-color2 hover:text-brand-color2 hover:bg-brand-color1"
                        href={`https://a.co/d/07LfkzY`}
                        target="_blank">
                        E-Book: Notes on Operating System: An Introductory
                        Course
                    </Link>
                    <Link
                        className="text-base lg:text-xl font-poppins font-bold underline text-brand-color1 bg-brand-color2 hover:text-brand-color2 hover:bg-brand-color1"
                        href={`https://a.co/d/4bFWipC`}
                        target="_blank">
                        Paperback: Notes on Operating System: An Introductory
                        Course
                    </Link>
                </div>
                <Image
                    className="m-4 rounded-full shadow-lg shadow-brand-color1"
                    src={MyImg}
                    alt="about-me-image"
                    width={500}
                    height={500}
                />
            </article>
        </main>
    );
}
