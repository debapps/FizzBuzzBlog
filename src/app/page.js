import { getPostMetaData } from "@/utils/BlogData";
import BlogCard from "./components/BlogCard";
import CoverBlog from "./components/CoverBlog";

export default function Home() {
    // Get the list of blog metadata.
    const blogList = getPostMetaData();

    return (
        <main className="min-h-screen p-10 lg:px-10 lg:pt-24 lg:pb-10">
            <CoverBlog
                blogID={blogList[0].blogID}
                category={blogList[0].category}
                title={blogList[0].title}
                date={blogList[0].date}
                author={blogList[0].author}
                synopsis={blogList[0].synopsis}
                coverImg={blogList[0].coverImg}
            />
            <section className="flex flex-wrap flex-col sm:flex-row items-center sm:items-start justify-center">
                {blogList.slice(1).map((blog, idx) => {
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
