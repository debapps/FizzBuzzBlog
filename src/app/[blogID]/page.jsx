import Image from "next/image";
import Link from "next/link";
import myImg from "../../../public/site_images/about-me-1.jpg";
import { getDateFormatted } from "../../utils/FormatDate";
import { getBlogContent } from "@/utils/BlogData";

// Generate dynamic metadata.
export async function generateMetadata({ params }) {
    // Get the content of the blog from its blogID.
    const blog = getBlogContent(params.blogID);

    // Destructure the blog.
    const { title, synopsis } = blog;

    return {
        title: `${title} | FizzBuzz Blog.`,
        description: synopsis,
    };
}

export default function BlogDetails({ params }) {
    // Get the content of the blog from its blogID.
    const blog = getBlogContent(params.blogID);

    // Destructure the blog.
    const { title, category, date, author, synopsis, coverImg, blogHTML } =
        blog;

    return (
        <main className="min-h-screen p-10 lg:px-10 lg:pt-36 lg:pb-10">
            <section className="flex flex-col md:flex-row md:space-x-5 m-10">
                <div className="w-full md:w-1/2">
                    {/* Blog category */}
                    <h3 className="font-russo text-xs tracking-widest mt-2 mb-5 bg-brand-color1 text-brand-color2 p-2 max-w-fit">
                        {category.toUpperCase()}
                    </h3>

                    {/* Blog title */}
                    <h1 className="mb-5 text-4xl md:text-6xl blogtitle">
                        {title}
                    </h1>

                    {/* Blog author and publication date */}
                    <p className="mb-5 font-poppins font-thin text-sm md:text-base text-gray-400 flex flex-row justify-start space-x-5 tracking-wider">
                        <span>{getDateFormatted(date)}</span>
                        <span>||</span>
                        <span className="font-bold">{author}</span>
                    </p>

                    {/* Blog Synopsis */}
                    <p className="mb-5 font-poppins font-thin text-base md:text-lg text-gray-600 italic">
                        {synopsis}
                    </p>
                </div>
                {/* blog cover image */}
                <div className="w-full md:w-1/2">
                    <Image
                        className="mx-auto rounded-md"
                        src={coverImg}
                        width={1400}
                        height={1000}
                        alt="cover"
                    />
                </div>
            </section>
            <article className="flex flex-col m-10 space-y-5">
                {/* Blog content */}
                <div
                    className="preview"
                    dangerouslySetInnerHTML={{ __html: blogHTML }}></div>

                {/* Go back link */}
                <Link
                    className="rounded-lg w-20 text-center text-lg md:text-xl font-bold p-2 mx-5 my-3 bg-brand-color1 text-brand-color2 hover:bg-blue-400 shadow-md shadow-brand-color2 hover:shadow-brand-color1"
                    href={`/`}>
                    {"<<"}
                </Link>
            </article>
        </main>
    );
}
