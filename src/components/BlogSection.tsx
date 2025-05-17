// "use client";
// import Image from "next/image";
// import Link from "next/link";

// const BlogSection = () => {
//   const blogPosts = [
// {
//   id: 1,
//   image: "/banner-bg/banner1.webp",
//   date: "05 Jul",
//   title: "Are you Looking For Business Solution Related",
//   text: "Business tailored design of company in some we form solution.",
//   link: "/blog-details-right",
// },
//     {
//       id: 2,
//       image: "/banner-bg/banner1.webp",
//       date: "05 Jul",
//       title: "Are you Looking For Business Solution Related",
//       text: "Business tailored design of company in some we form solution.",
//       link: "/blog-details-right",
//     },
//     {
//       id: 3,
//       image: "/banner-bg/banner1.webp",
//       date: "05 Jul",
//       title: "Are you Looking For Business Solution Related",
//       text: "Business tailored design of company in some we form solution.",
//       link: "/blog-details-right",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50" id="blog">
//       <div className="container mx-auto px-4">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h6 className="text-sm font-semibold text-gray-600 flex items-center justify-center gap-2">
//             <span className="block w-8 h-px bg-gray-400"></span>
//             Our Latest News
//             <span className="block w-8 h-px bg-gray-400"></span>
//           </h6>
//           <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
//             Trending IT Solution Blog & Tips
//           </h3>
//         </div>

//         {/* Blog Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((post) => (
//             <div
//               key={post.id}
//               className="blog-card-six bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 group"
//             >
//               {/* Blog Image */}
//               <div className="relative h-56 overflow-hidden">
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="w-full h-full transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:scale-100 opacity-90 scale-105"
//                 />
//                 {/* Date Badge */}
//                 <div className="absolute top-4 left-4 bg-blue-600 text-white text-center py-2 px-3 rounded">
//                   <span className="block text-lg font-bold">
//                     {post.date.split(" ")[0]}
//                   </span>
//                   <span className="block text-xs">
//                     {post.date.split(" ")[1]}
//                   </span>
//                 </div>
//               </div>

//               {/* Blog Content */}
//               <div className="p-6">
//                 {/* Title */}
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   <Link href={post.link} className="hover:text-blue-600">
//                     {post.title}
//                   </Link>
//                 </h3>

//                 {/* Text */}
//                 <p className="text-gray-600 mb-4">{post.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const BlogSection = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       image: "/banner-bg/banner1.webp",
//       date: "05 Jul",
//       title: "Are you Looking For Business Solution Related",
//       text: "Business tailored design of company in some we form solution.",
//     },
//     {
//       id: 2,
//       image: "/_next/static/media/blog-6-2.7eaedcc6.png",
//       date: "03 Jun",
//       title: "Continually Network Effective Bandwidth of Solution",
//       text: "Business tailored design of company in some we form solution.",
//     },
//     {
//       id: 3,
//       image: "/_next/static/media/blog-6-3.e48b067b.png",
//       date: "05 Jul",
//       title: "Are you Looking For Business Solution Related",
//       text: "Business tailored design of company in some we form solution.",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50" id="blog">
//       <div className="container mx-auto px-4">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h6 className="text-sm font-semibold text-gray-600 flex items-center justify-center gap-2">
//             <span className="block w-8 h-px bg-gray-400"></span>
//             Our Latest News
//             <span className="block w-8 h-px bg-gray-400"></span>
//           </h6>
//           <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
//             Trending IT Solution Blog & Tips
//           </h3>
//         </div>

//         {/* Swiper Carousel */}
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           pagination={{ clickable: true }}
//           className="mySwiper"
//         >
//           {blogPosts.map((post) => (
//             <SwiperSlide key={post.id}>
//               <div className="blog-card-six bg-white shadow-lg rounded-lg overflow-hidden transition-transform group">
//                 {/* Blog Image */}
//                 <div className="relative h-56 overflow-hidden">
//                   <Image
//                     src={post.image}
//                     alt={post.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="w-full h-full transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:scale-100 opacity-90 scale-105"
//                   />
//                   {/* Date Badge */}
//                   <div className="absolute top-4 left-4 bg-red-600 text-white text-center py-2 px-3 rounded">
//                     <span className="block text-lg font-bold">
//                       {post.date.split(" ")[0]}
//                     </span>
//                     <span className="block text-xs">
//                       {post.date.split(" ")[1]}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Blog Content */}
//                 <div className="p-6">
//                   {/* Title */}
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                     <Link href={post.link} className="hover:text-blue-600">
//                       {post.title}
//                     </Link>
//                   </h3>

//                   {/* Text */}
//                   <p className="text-gray-600 mb-4">{post.text}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Custom Swiper Pagination Styling */}
//       <style jsx global>{`
//         .swiper-pagination {
//           margin-top: 20px;
//         }
//         .swiper-pagination-bullet {
//           background: #000;
//           opacity: 0.3;
//           width: 10px;
//           height: 10px;
//         }
//         .swiper-pagination-bullet-active {
//           background: #000;
//           opacity: 1;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default BlogSection;

"use client";
import Image from "next/image";
import Wrapper from "./Others/Wrapper";

const BlogSection = () => {
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
    <Wrapper className="">
      <section className="py-16 bg-gray-50" id="blog">
        <div className="container mx-auto ">
          {/* Section Title */}
          <div className="text-center mb-12">
            {/* <h6 className="text-sm font-semibold text-gray-600 flex items-center justify-center gap-2">
            <span className="block w-8 h-px bg-gray-400"></span>
            Our Latest News
            <span className="block w-8 h-px bg-gray-400"></span>
          </h6> */}
            <h3
              className="text-3xl md:text-4xl font-bold text-gray-900  heading-all"
              data-aos="fade-up"
            >
              Our Benefits
            </h3>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-center  lg:">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="w-full max-w-sm mx-auto relative h-80 rounded-lg overflow-hidden group bg-gray-200"
                data-aos="fade-up"
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
                <div className="absolute inset-0 z-0 transition-opacity duration-300 ">
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
                  <div
                    className="bg-white text-gray-400 text-center py-3 px-6 rounded w-fit mb-4"
                    data-aos="fade-up"
                  >
                    <span className="block !text-5xl heading-all font-bold ">
                      {post.date.split(" ")[0]}
                    </span>
                  </div>

                  {/* Title & Text */}
                  <div className="group">
                    <h3
                      className="text-xl font-semibold mb-2 text-white group-hover:text-white transition-colors duration-200"
                      data-aos="fade-up"
                    >
                      <p className="hover:underline heading-all">
                        {post.title}
                      </p>
                    </h3>
                    <p
                      className="text-sm text-gray-300 transition-colors duration-200"
                      data-aos="fade-up"
                    >
                      {post.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default BlogSection;
