import { blogApi } from "@/api/blog";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const blog = await blogApi.getSingleBlog({ blogId: params.id });
  return {
    title: blog.data.title,
    description: blog.data.title,
  };
}

async function getSingleBlogData(blogId: string) {
  try {

    const { data: blogData } = await blogApi.getSingleBlog({ blogId });
    return blogData;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to get blog data');
  }
}



export default async function Blog({ params }: { params: { id: string } }) {

  const blogData = await getSingleBlogData(params.id);

  return (
    <>
      <header className="relative h-[300px] md:h-[400px] lg:h-[562.5px] bg-black/40 bg-[url('/images/blog-bg-img.jpg')] bg-cover bg-no-repeat bg-blend-overlay flex items-end">
        <div className="p-8 md:p-14 max-w-[90%] md:max-w-[80%] lg:max-w-[762px] text-white">
          <h1 className="mb-3 text-2xl md:text-4xl lg:text-5xl uppercase tracking-[0.35px]">
            {blogData.title}
          </h1>
          <p className="mb-3.5 text-xl md:text-3xl lg:text-4xl">
            {' '}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-xs md:text-sm">by {blogData.adminid.name}</p>
            <Separator color="white" />
            <p className="flex items-center gap-x-1.5 text-xs">
              <ClockSVG fill={"white"} />{Math.ceil(blogData.blog.split(' ').length / 200)} minute read
            </p>
            <Separator color="white" />
            <p className="flex items-center gap-x-1.5 text-xs">
              <ViewSVG fill={"white"} />
              1.6K views
            </p>
          </div>
        </div>
      </header>

      <main className="flex flex-col lg:flex-row items-start gap-6 px-4 md:px-8 lg:px-[6.25rem] py-6 lg:py-9 text-sm leading-6">
        <section className="flex flex-col lg:flex-row items-start gap-6 lg:gap-x-11 w-full">
          <div className="flex flex-row lg:flex-col items-center justify-center text-[#121416] gap-4 lg:gap-0">
            <ViewSVG fill={"#121416"} />
            <span>views</span>
            <span>1.6k</span>
          </div>
          <div className="w-full">
            <section className="mb-14">
              <div className="mb-14">
                <div className="mb-6" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: blogData.blog }} />
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl uppercase">YOU MAY ALSO LIKE</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array(3)
                  .fill("")
                  .map((_, i) => (
                    <FeaturedBlogCard key={i} />
                  ))}
              </div>
            </section>
          </div>
        </section>
        <section className="w-full lg:w-[240px] shrink-0">
          <form className="mb-4">
            <div className="mb-2">
              <label htmlFor="email" className="mb-4 block text-sm md:text-base">
                Subscription Subscribe to our newsletter and receive a selection
                of cool articles every weeks
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="w-full rounded border border-[#CECECE] px-4 py-3 text-xs text-[#757575]"
                placeholder="Enter your email"
              />
            </div>
            <button className="w-full rounded bg-primary-500 py-3 text-xs tracking-[3px] text-white">
              SUBSCRIBE
            </button>
          </form>
          <form>
            <div className="flex items-start gap-x-2">
              <input type="checkbox" id="subscribe" className="mt-1" />
              <label htmlFor="subscribe" className="text-sm leading-5 text-[#A9A9A9]">
                By checking this box, you confirm that you have read and are
                agreeing to our terms of use regarding the storage of the data
                submitted through this form.
              </label>
            </div>
          </form>
          <section className="mt-10">
            <h2 className="mb-3.5 text-base md:text-lg text-[#121416]">The Latest</h2>

            <div className="grid gap-y-3.5">
              <article className="bg-[url('/images/latest-blog.jpg')] bg-cover bg-no-repeat px-3.5 py-3.5 text-xs text-white">
                <p className="mb-2">
                  10 Habits That Will Change Your Live for the Better If envy
                  and jealousy are impacting your friendships
                </p>
                <div className="my-3 flex items-center gap-x-2 text-xs text-white/80">
                  <p>June 21,2023</p>
                  <Separator color="#ffffffcc" />
                  <p className="flex items-center gap-x-1">
                    <ClockSVG fill="white" />2 minute read
                  </p>
                </div>
              </article>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

function FeaturedBlogCard() {
  return (
    <article className="relative">
      <div className="h-[210px] w-full bg-black/25 bg-[url('/images/feature-blog-img.jpg')] bg-cover bg-no-repeat bg-blend-overlay" />

      <div className="py-3.5">
        <h3 className="text-lg md:text-xl">Integer Maecenas Eget Viverra.</h3>
        <p className="text-sm md:text-base">
          Aenean eleifend ante maecenas pulvinar montes lorem et pede.
        </p>
        <div className="my-3 flex items-center gap-x-2 text-xs">
          <p>June 21,2023</p>
          <Separator color="black" />
          <p className="flex items-center gap-x-1">
            <ClockSVG fill="black" />2 minute read
          </p>
        </div>
      </div>

      <div className="absolute left-3 top-3.5 flex flex-wrap items-center gap-1">
        <Badge text={"Aenean Eleifend"} />
        <Badge text={"Aliquam"} />
      </div>
    </article>
  );
}

function ClockSVG({ fill }: { fill: string }) {
  return (
    <svg
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5625 13.6406C11.2808 13.6406 13.4844 11.437 13.4844 8.71875C13.4844 6.00047 11.2808 3.79688 8.5625 3.79688C5.84422 3.79688 3.64062 6.00047 3.64062 8.71875C3.64062 11.437 5.84422 13.6406 8.5625 13.6406Z"
        stroke={fill}
        strokeWidth="0.703125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5625 8.71875L6.92188 9.8125M8.5625 5.98438V8.71875"
        stroke={fill}
        strokeWidth="0.703125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ViewSVG({ fill }: { fill: string }) {
  return (
    <svg
      width="10"
      height="9"
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.625 8.9375H0.9375V3.03125H2.625V8.9375ZM6 8.9375H4.3125V0.5H6V4.71875V8.9375ZM9.375 8.9375H7.6875V5.5625H9.375V8.9375Z"
        fill={fill}
      />
    </svg>
  );
}

function Separator({ color }: { color: string }) {
  return <div className="h-[0.45px] w-3.5" style={{ background: color }} />;
}

function Badge({ text }: { text: string }) {
  return (
    <div
      className="rounded bg-white/20 px-2 py-1 text-xs md:text-sm text-white"
      style={{ backdropFilter: "blur(2px)" }}
    >
      {text}
    </div>
  );
}
