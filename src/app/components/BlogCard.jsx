"use client";
import Link from "next/link";
import Image from "next/image";
import { getDateFormatted } from "../../utils/FormatDate";
import Zoom from "@mui/material/Zoom";

export default function BlogCard({
    blogID,
    category,
    title,
    date,
    author,
    synopsis,
    coverImg,
}) {
    return (
        <Zoom in={true}>
            <Link href={`/${blogID}`}>
                <section className="flex flex-col justify-start items-start w-4/5 lg:w-[500px] lg:min-h-[700px] m-5 lg:m-7 border-2 border-brand-color2 hover:border-brand-color1 rounded-lg p-5 shadow-lg shadow-brand-color1">
                    <Image
                        className="rounded-lg block w-full lg:w-[500px] lg:h-[300px]"
                        src={coverImg}
                        alt={title}
                        width={500}
                        height={300}
                    />

                    {/* Blog title */}
                    <h2 className="text-xl md:text-3xl font-righteous pt-5 pb-2">
                        {title}
                    </h2>

                    {/* Blog Category */}
                    <h3 className="font-russo text-xs tracking-widest mt-2 mb-5 bg-brand-color1 text-brand-color2 p-2 max-w-fit">
                        {category.toUpperCase()}
                    </h3>

                    {/* Blog author and publication date */}
                    <div className="text-sm font-poppins tracking-widest pb-2">
                        {author} || {getDateFormatted(date)}
                    </div>

                    {/* Blog synopsis */}
                    <p className="text-base md:text-lg font-poppins py-5">
                        {synopsis}
                    </p>
                </section>
            </Link>
        </Zoom>
    );
}
