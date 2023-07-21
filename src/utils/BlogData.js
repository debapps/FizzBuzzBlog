import fs from "fs";
import path from "path";
import matter from "gray-matter";
import getHTML from "./HTMLConverter.js";

// Get the directories where blogs are kept.
const blogDir = path.join(process.cwd(), "blog_posts");

// This function gets the metadata of the blog posts.
export function getPostMetaData() {
    // Get the blog markdown file names.
    let FileNames = fs.readdirSync(blogDir);

    let blogMetaData = FileNames.map((fileName) => {
        // blogID is the file name without '.md' extension.
        let blogID = fileName.split(".")[0];

        // Get the blog file content from the file path.
        let blogFilePath = path.join(blogDir, fileName);
        let blogContent = fs.readFileSync(blogFilePath, "utf-8");

        // Get the blog meta data.
        let blogMeta = matter(blogContent).data;

        return {
            blogID,
            ...blogMeta,
        };
    });

    // return the sorted blog posts based on published date.
    return blogMetaData.sort((a, b) => {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);

        if (dateA > dateB) {
            return -1;
        } else {
            return 1;
        }
    });
}

// This function gets the content of the blog file based on input id.
export function getBlogContent(id) {
    // Get the blog file content from the file path.
    let blogFilePath = path.join(blogDir, `${id}.md`);
    let fileContent = fs.readFileSync(blogFilePath, "utf-8");

    // Get the blog meta data.
    let blogMeta = matter(fileContent).data;

    // Get the blog Content.
    let blogContent = matter(fileContent).content;

    // Use remark to convert markdown into HTML string
    const blogHTML = getHTML(blogContent);

    // Return the content with MetaData.
    return {
        id,
        ...blogMeta,
        blogHTML,
    };
}

// console.log(getPostMetaData());
