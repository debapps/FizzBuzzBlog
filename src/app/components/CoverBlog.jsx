import { getDateFormatted } from "@/utils/FormatDate";
import myImg from "../../../public/site_images/about-me-1.jpg";
import Image from "next/image";
import Link from "next/link";

export default function CoverBlog({
    blogID,
    category,
    title,
    date,
    author,
    synopsis,
    coverImg,
}) {
    return (
        <section>
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <Image
                            alt="content"
                            className="object-cover object-center h-full w-full"
                            src={coverImg}
                            width={2000}
                            height={1400}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <Image
                                className="w-20 h-20 rounded-full inline-flex items-center justify-center"
                                src={myImg}
                                alt="my-image"
                            />
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium font-poppins mt-4 text-gray-900 text-lg">
                                    {author}
                                </h2>
                                <div className="w-12 h-1 bg-brand-color1 rounded mt-2 mb-4"></div>
                                {/* Blog author and publication date */}
                                <div className="text-sm font-poppins tracking-widest pb-2">
                                    {getDateFormatted(date)}
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            {/* Blog Category */}
                            <h3 className="font-russo text-xs tracking-widest mt-2 mb-5 bg-brand-color1 text-brand-color2 p-2 max-w-fit">
                                {category.toUpperCase()}
                            </h3>

                            {/* Blog title */}
                            <h2 className="blogtitle text-xl md:text-3xl pt-5 pb-2">
                                {title}
                            </h2>

                            {/* Blog synopsis */}
                            <p className="leading-relaxed font-poppins text-lg mb-4">
                                {synopsis}
                            </p>
                            <Link
                                href={`/${blogID}`}
                                className="font-russo rounded-lg inline-flex items-center text-lg md:text-xl font-bold p-2 my-3 bg-brand-color1 text-brand-color2 hover:bg-blue-400 shadow-md shadow-brand-color2 hover:shadow-brand-color1">
                                Read
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
