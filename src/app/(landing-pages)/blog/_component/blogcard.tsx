import { BlogPost } from "@/api/blog";
import Image from "next/image";
import Link from "next/link";




function Badge({ text }: { text: string }) {
    return (
        <div className="text-xxs absolute right-6 top-4 rounded-[6px] bg-white/15 px-2 py-1 text-sm font-semibold text-white">
            {text}
        </div>
    );
}



function BlogCard({ title, id, blogPost }: { title: string, id: string, blogPost: BlogPost }) {
    return (
        <Link href={`/blog/${id}`} className="group hover:shadow-lg transition-shadow duration-300 hover:rounded-xl">
            <article className="relative w-full overflow-hidden rounded">
                <div className="aspect-square h-52 w-full relative">
                    <Image
                        src={blogPost.upload}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="grid gap-y-3 p-4 font-medium text-[#6D7280]">
                    <p className="text-xxs">
                        {new Date(blogPost.createdAt).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })}
                    </p>
                    <h3 className="text-sm text-gray-700">
                        {title}
                    </h3>
                    <div className="text-xxs line-clamp-5 h-[80px]" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: blogPost.blog }} />

                    <div className="my-4 h-[0.42px] bg-[#E5E5E5]" />

                    <article className="flex items-center gap-x-3.5">
                        <Image
                            src="/images/avatar.png"
                            alt=""
                            width={45.98}
                            height={42.5}
                            className="rounded-full"
                        />
                        <div className="text-xxs font-semibold text-[#6D7280]">
                            <h3>
                                By <span className="text-gray-700">{blogPost.adminid.name}</span>
                            </h3>
                            <p>{blogPost.category.name}</p>
                        </div>
                    </article>
                </div>

                <Badge text="Technology" />
            </article>
        </Link>
    );
}


export default BlogCard