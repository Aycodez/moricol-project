import { blogApi, BlogCategory, BlogPost } from "@/api/blog";
import { Input } from "@/components/input";
import BlogCard from "./_component/blogcard";

// import FilterByCategory from "./_component/filter-by-category";
import FilterByCategory from "./_component/filter-by-category";
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Blog | Moricol",
  description: "Get informed about the latest happenings",
};

async function getBlogData() {
  try {
    const { data: blogData } = await blogApi.getAllBlogs({ page: 1, category: '' });
    const { data: categories } = await blogApi.getCategories();
    return { blogData, categories };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to get blog data');
  }
}



export default async function Blog() {
  const { blogData, categories }: { blogData: BlogPost[], categories: BlogCategory[] } = await getBlogData();
  return (
    <main>
      <section className="p-4 sm:p-8 md:p-12 lg:p-20 text-[#0F172A]">
        <div className="mb-6">
          <h1 className="mb-3 text-2xl sm:text-3xl font-semibold">
            Get Informed about the latest happenings
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
  );
}


