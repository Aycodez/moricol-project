import { Input } from "@/components/input";
import React from "react";
import { blogApi, BlogCategory, BlogPost } from "@/api/blog";
import BlogCard from "../../_component/blogcard";
import FilterByCategory from "../../_component/filter-by-category";
import UpdateMeta from "../../_component/update-meta";


// export async function generateMetadata({ params }: { params: { id: string } }) {
//     const blog = await blogApi.getBlogsByCategory({ blogId: params.id });
//     return {
//         title: blog.data.title,
//         description: blog.data.title,
//     };
// }


async function getBlogData(categoryId: string) {
    try {
        const res = await blogApi.getAllBlogs({ page: 1, category: categoryId });
        const blogData = res.data;
        const { data: categories } = await blogApi.getCategories();
        return { blogData, categories };
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : 'Failed to get blog data');
    }
}
export default async function Category({ params }: { params: { category_id: string } }) {
    const { blogData, categories }: { blogData: BlogPost[], categories: BlogCategory[] } = await getBlogData(params.category_id);
    return <main>
        <UpdateMeta
            title={categories.find((c) => c._id === params.category_id)?.name}
            description={categories.find((c) => c._id === params.category_id)?.name}
        />
        <section className="p-4 sm:p-8 md:p-12 lg:p-20 text-[#0F172A]">
            <div className="mb-6">
                <h1 className="mb-3 text-2xl sm:text-3xl font-semibold">
                    {categories.find((c) => c._id === params.category_id)?.name}
                </h1>
                <p className="text-sm sm:text-base">
                    We keep you informed about everything and anything you need to know
                </p>
            </div>

            <div className="mb-8 flex flex-col sm:flex-row items-end gap-4 sm:justify-between">
                <form className="w-full sm:max-w-[724px] sm:grow">
                    <label htmlFor="search" className="mb-1 block">
                        Search for blog
                    </label>
                    <Input

                        type="text"
                        id="search"
                        className="w-full rounded-lg border border-gray-500 bg-white py-3 px-4"
                    />
                </form>
                <FilterByCategory categories={categories} />

            </div>
            {blogData && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-7">
                    {blogData.map((blog, i) => (
                        <BlogCard key={i} title={blog.title} id={blog._id} blogPost={blog} />
                    ))}
                </div>
            )}
        </section>
    </main>
}
