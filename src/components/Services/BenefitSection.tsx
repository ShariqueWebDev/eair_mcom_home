"use client";
import Image from "next/image";

const BenefitSectionForService = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/banner-bg/banner1.webp",
      date: "1",
      title: "Emergency Service",
      text: "Business tailored design of company in some we form solution.",
    },
    {
      id: 2,
      image: "/banner-bg/banner1.webp",
      date: "2",
      title: "Satifaction Guarantee",
      text: "Business tailored design of company in some we form solution.",
    },
    {
      id: 3,
      image: "/banner-bg/banner1.webp",
      date: "3",
      title: "No Uprfront Payment",
      text: "Business tailored design of company in some we form solution.",
    },
    {
      id: 4,
      image: "/banner-bg/banner1.webp",
      date: "4",
      title: "20 Years of Experience",
      text: "Business tailored design of company in some we form solution.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="blog">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h6 className="text-sm font-semibold text-gray-600 flex items-center justify-center gap-2">
            <span className="block w-8 h-px bg-gray-400"></span>
            Our Latest News
            <span className="block w-8 h-px bg-gray-400"></span>
          </h6>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Trending IT Solution Blog & Tips
          </h3>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center px-4 lg:px-32">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="w-full max-w-sm mx-auto relative h-96 rounded-lg overflow-hidden group bg-gray-200"
            >
              {/* Decorative Shape (like ::after) */}
              <div
                className="absolute top-0 left-0 z-10"
                style={{
                  width: "135px",
                  height: "70px",
                  backgroundColor: "var(--tolak-base, #2e2e84)",
                  clipPath: "polygon(0 0, 100% 0, 58% 100%, 0 100%)",
                }}
              />

              {/* Blog Image (hover effect) */}
              <div className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Overlay tint */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-black/40 z-0 transition-colors duration-300" />

              {/* Content */}
              <div className="relative z-20 h-full flex flex-col justify-between p-6 text-white">
                {/* Date Badge */}
                <div className="bg-white text-black text-center py-3 px-6 rounded w-fit mb-4">
                  <span className="block !text-5xl heading-all font-bold ">
                    {post.date.split(" ")[0]}
                  </span>
                </div>

                {/* Title & Text */}
                <div className="group">
                  <h3 className="text-xl font-semibold mb-2 text-black group-hover:text-white transition-colors duration-200">
                    <p className="hover:underline">{post.title}</p>
                  </h3>
                  <p className="text-sm text-black group-hover:text-white transition-colors duration-200">
                    {post.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitSectionForService;
