import { getPostMetaData } from "@/utils/BlogData";
import BlogCard from "./components/BlogCard";

export default function Home() {
    // Get the list of blog metadata.
    const blogList = getPostMetaData();

    return (
        <main className="min-h-screen p-10 lg:px-10 lg:pt-36 lg:pb-10">
            <section className="flex flex-wrap flex-col sm:flex-row items-center sm:items-start justify-center">
                {blogList.map((blog, idx) => {
                    const {
                        blogID,
                        category,
                        title,
                        date,
                        author,
                        synopsis,
                        coverImg,
                    } = blog;

                    return (
                        <BlogCard
                            key={idx}
                            blogID={blogID}
                            category={category}
                            title={title}
                            date={date}
                            author={author}
                            synopsis={synopsis}
                            coverImg={coverImg}
                        />
                    );
                })}
            </section>
        </main>
    );
}
