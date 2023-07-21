import Image from "next/image";
import ContactImg from "../../../public/site_images/contact-image.jpg";
import SocialIcons from "../components/SocialIcons";

export const metadata = {
    title: "Contact | FizzBuzz Blog.",
    description:
        "FizzBuzz Blog is the personal blogging website for cutting-edge digital technology, sceince and innovation, cloud computing and web technologies.",
};

export default function ContactPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-10 lg:px-48 lg:pt-36 lg:pb-10">
            <h1 className="text-2xl lg:text-4xl font-russo text-brand-color1 mb-8">
                Contact Us.
            </h1>
            <p className="font-poppins text-base lg:text-xl text-brand-color2 bg-brand-color1 p-1">
                Feedback ? Suggestion ? Pitch your blog ideas ?
            </p>
            <article className="flex flex-col lg:flex-row justify-center items-center my-10">
                <Image
                    className="m-4 rounded-md shadow-lg shadow-brand-color1"
                    src={ContactImg}
                    alt="about-page-image"
                    width={500}
                    height={300}
                />
                <div className="flex flex-col m-4 justify-center items-start space-y-4">
                    <p className="py-2 font-poppins text-base lg:text-xl">
                        I like to hear your feedbacks and suggestions. You can
                        also pitch your blog idea to me and I will publish your
                        article with your name and contacts in my blog after
                        review.
                    </p>
                    <p className="py-2 font-poppins text-base lg:text-xl">
                        Please write to me @{" "}
                        <span className="font-righteous cursor-pointer italic hover:text-brand-color1 hover:underline">
                            bhar.debaditya@gmail.com
                        </span>
                    </p>
                    <p className="py-2 font-poppins text-base lg:text-xl">
                        Find me on social media:
                    </p>
                    <SocialIcons />
                </div>
            </article>
        </main>
    );
}
