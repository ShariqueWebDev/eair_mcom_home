// "use client";
// import Link from "next/link";
// import Image from "next/image";

// const Footer2 = () => {
//   return (
//     <footer className="bg-black">
//       <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-2 lg:grid-cols-[1.5fr_1fr_1fr_2.5fr]">
//           {/* Logo and Description */}
//           <div className="pb-6">
//             <div className="w-[210px] h-[80px] flex justify-start items-center sm:justify-center">
//               <Link href="/">
//                 <Image
//                   src="/logo/logo-mcom.png"
//                   alt="Company Logo"
//                   width={150}
//                   height={50}
//                   className="object-contain"
//                 />
//               </Link>
//             </div>

//             <p className="mt-4 text-sm text-white leading-relaxed text-center sm:text-left sm:max-w-xs">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
//               consequuntur amet culpa cum itaque neque.
//             </p>

//             {/* Social Icons */}
//             <ul className="mt-6 flex justify-center gap-4 sm:justify-start sm:gap-6">
//               {[
//                 {
//                   name: "Facebook",
//                   icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
//                   href: "#",
//                   color: "text-blue-600",
//                 },
//                 {
//                   name: "Instagram",
//                   icon: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm4.25 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm4.75-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z",
//                   href: "#",
//                   color: "text-pink-500",
//                 },
//                 {
//                   name: "Twitter",
//                   icon: "M8.29 20.251c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.522A8.18 8.18 0 0 0 22 5.92a8.273 8.273 0 0 1-2.357.637 4.07 4.07 0 0 0 1.804-2.223 8.194 8.194 0 0 1-2.605.981 4.104 4.104 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.244 4.07 4.07 0 0 0 1.27 5.482A4.048 4.048 0 0 1 2.8 9.713v.05a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.847.07 4.105 4.105 0 0 0 3.833 2.82A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.816",
//                   href: "#",
//                   color: "text-sky-500",
//                 },
//                 {
//                   name: "GitHub",
//                   icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.528 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026a9.564 9.564 0 0 1 2.5-.336c.849.004 1.705.114 2.5.336 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.308.678.916.678 1.846 0 1.333-.012 2.408-.012 2.734 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2z",
//                   href: "#",
//                   color: "text-white",
//                 },
//               ].map((social) => (
//                 <li key={social.name}>
//                   <Link
//                     href={social.href}
//                     rel="noreferrer"
//                     target="_blank"
//                     className="transition hover:opacity-75"
//                   >
//                     <span className="sr-only">{social.name}</span>
//                     <svg
//                       className={`h-5 w-5 ${social.color} sm:h-6 sm:w-6`}
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fillRule={
//                           social.name !== "Twitter" ? "evenodd" : undefined
//                         }
//                         d={social.icon}
//                         clipRule={
//                           social.name !== "Twitter" ? "evenodd" : undefined
//                         }
//                       />
//                     </svg>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Links Section */}
//           <div className="text-center sm:text-left pt-6 sm:pt-10">
//             <p className="text-lg font-medium text-white">Links</p>
//             <ul className="mt-5 space-y-3 text-sm">
//               {["Home", "About us", "Services", "Contact"].map((item) => (
//                 <li key={item}>
//                   <Link
//                     href="#"
//                     className="text-gray-300 transition hover:text-white/75"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Us Section */}
//           <div className="text-center sm:text-left pt-6 sm:pt-10">
//             <p className="text-lg font-medium text-white">Contact Us</p>
//             <ul className="mt-5 flex flex-col gap-3 text-sm">
//               <li className="flex justify-center sm:justify-start items-center gap-1.5">
//                 <Link href="#" className="flex items-center gap-1.5">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="size-4 sm:size-5 shrink-0 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                     />
//                   </svg>
//                   <span className="text-gray-300">0123456789</span>
//                 </Link>
//               </li>
//               <li className="flex justify-center sm:justify-start items-center gap-1.5">
//                 <Link href="#" className="flex items-center gap-1.5">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="size-4 sm:size-5 shrink-0 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     />
//                   </svg>
//                   <span className="text-gray-300">john@doe.com</span>
//                 </Link>
//               </li>

//               <li className="flex justify-center sm:justify-start items-center gap-1.5">
//                 <Link href="#" className="flex items-center gap-1.5">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="size-4 sm:size-5 shrink-0 text-white mt-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                   <address className="text-gray-300">
//                     213 Lane, London, United Kingdom
//                   </address>
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Google Map */}
//           <div className="py-12">
//             <div className="w-full h-64">
//               <iframe
//                 title="Google Map"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.2726724871!2d-0.1277587!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b333b24b445%3A0x8eaeedc8a5a6b76c!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1685822894823!5m2!1sen!2suk"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 // allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="shadow-lg"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 border-t border-gray-100 py-6 dark:border-gray-800">
//         <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row sm:items-center sm:text-left text-center">
//           <p className="text-sm text-white dark:text-gray-400 sm:order-1">
//             © 2025 By EAIR
//           </p>

//           <p className="text-sm text-gray-400">
//             <span className="block sm:inline">All rights reserved. </span>
//             <Link
//               href="#"
//               className="inline-block text-white underline transition hover:text-teal-600/75 dark:text-teal-500 dark:hover:text-teal-500/75"
//             >
//               Terms & Conditions
//             </Link>
//             <span> · </span>
//             <Link
//               href="#"
//               className="inline-block text-white underline transition hover:text-teal-600/75 dark:text-teal-500 dark:hover:text-teal-500/75"
//             >
//               Privacy Policy
//             </Link>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer2;

// "use client";
// import Link from "next/link";
// import Image from "next/image";

// const Footer2 = () => {
//   return (
//     <footer className="bg-black">
//       <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-[1.5fr_1fr_1fr_2fr]">
//           {/* Logo and Description */}
//           <div className="pb-6">
//             <div className="flex justify-center sm:justify-start">
//               <Link href="/">
//                 <Image
//                   src="/logo/logo-mcom.png"
//                   alt="Company Logo"
//                   width={120}
//                   height={40}
//                   className="object-contain w-32 sm:w-40"
//                 />
//               </Link>
//             </div>

//             <p className="mt-4 text-xs text-white leading-relaxed text-center sm:text-left sm:max-w-xs md:text-sm">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
//               consequuntur amet culpa cum itaque neque.
//             </p>

//             {/* Social Icons */}
//             <ul className="mt-6 flex justify-center gap-4 sm:justify-start sm:gap-6">
//               {[
//                 {
//                   name: "Facebook",
//                   icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
//                   href: "#",
//                   color: "text-blue-600",
//                 },
//                 {
//                   name: "Instagram",
//                   icon: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm4.25 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm4.75-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z",
//                   href: "#",
//                   color: "text-pink-500",
//                 },
//                 {
//                   name: "Twitter",
//                   icon: "M8.29 20.251c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.522A8.18 8.18 0 0 0 22 5.92a8.273 8.273 0 0 1-2.357.637 4.07 4.07 0 0 0 1.804-2.223 8.194 8.194 0 0 1-2.605.981 4.104 4.104 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.244 4.07 4.07 0 0 0 1.27 5.482A4.048 4.048 0 0 1 2.8 9.713v.05a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.847.07 4.105 4.105 0 0 0 3.833 2.82A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.816",
//                   href: "#",
//                   color: "text-sky-500",
//                 },
//                 {
//                   name: "GitHub",
//                   icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.528 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026a9.564 9.564 0 0 1 2.5-.336c.849.004 1.705.114 2.5.336 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.308.678.916.678 1.846 0 1.333-.012 2.408-.012 2.734 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2z",
//                   href: "#",
//                   color: "text-white",
//                 },
//               ].map((social) => (
//                 <li key={social.name}>
//                   <Link
//                     href={social.href}
//                     rel="noreferrer"
//                     target="_blank"
//                     className="transition hover:opacity-75"
//                   >
//                     <span className="sr-only">{social.name}</span>
//                     <svg
//                       className={`h-5 w-5 ${social.color} sm:h-6 sm:w-6`}
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fillRule={
//                           social.name !== "Twitter" ? "evenodd" : undefined
//                         }
//                         d={social.icon}
//                         clipRule={
//                           social.name !== "Twitter" ? "evenodd" : undefined
//                         }
//                       />
//                     </svg>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Links Section */}
//           <div className="text-center sm:text-left pt-6">
//             <p className="text-base font-medium text-white sm:text-lg">Links</p>
//             <ul className="mt-4 space-y-2 text-xs sm:text-sm">
//               {["Home", "About us", "Services", "Contact"].map((item) => (
//                 <li key={item}>
//                   <Link
//                     href="#"
//                     className="text-gray-300 transition hover:text-white"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Us Section */}
//           <div className="text-center sm:text-left pt-6">
//             <p className="text-base font-medium text-white sm:text-lg">
//               Contact Us
//             </p>
//             <ul className="mt-4 flex flex-col gap-2 text-xs sm:text-sm">
//               <li className="flex justify-center sm:justify-start items-center gap-1.5">
//                 <Link href="#" className="flex items-center gap-1.5">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="size-4 sm:size-5 shrink-0 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                     />
//                   </svg>
//                   <span className="text-gray-300">0123456789</span>
//                 </Link>
//               </li>
//               <li className="flex justify-center sm:justify-start items-center gap-1.5">
//                 <Link href="#" className="flex items-center gap-1.5">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="size-4 sm:size-5 shrink-0 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     />
//                   </svg>
//                   <span className="text-gray-300">john@doe.com</span>
//                 </Link>
//               </li>
//               <li className="flex justify-center sm:justify-start items-center gap-1.5">
//                 <Link href="#" className="flex items-center gap-1.5">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="size-4 sm:size-5 shrink-0 text-white mt-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                   <address className="text-gray-300 not-italic">
//                     213 Lane, London, United Kingdom
//                   </address>
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Google Map */}
//           <div className="py-8">
//             <div className="w-full h-48 sm:h-56 md:h-64">
//               <iframe
//                 title="Google Map"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.2726724871!2d-0.1277587!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b333b24b445%3A0x8eaeedc8a5a6b76c!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1685822894823!5m2!1sen!2suk"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="shadow-lg rounded-lg"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8 border-t border-gray-800">
//         <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center">
//           <p className="text-xs text-white sm:text-sm">© 2025 By EAIR</p>
//           <p className="text-xs text-gray-400 sm:text-sm">
//             <span className="block sm:inline">All rights reserved. </span>
//             <Link
//               href="#"
//               className="inline-block text-white underline transition hover:text-teal-600"
//             >
//               Terms & Conditions
//             </Link>
//             <span> · </span>
//             <Link
//               href="#"
//               className="inline-block text-white underline transition hover:text-teal-600"
//             >
//               Privacy Policy
//             </Link>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer2;

"use client";
import Link from "next/link";
import Image from "next/image";

const Footer2 = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-screen-xl px-4 lg:py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-[1.5fr_1fr_1fr_2fr]">
          {/* Logo and Description */}
          <div className="pb-6">
            <div className="flex justify-center sm:justify-start">
              <Link href="/">
                <Image
                  src="/logo/logo-mcom.png"
                  alt="Company Logo"
                  width={120}
                  height={40}
                  className="object-contain w-32 sm:w-40"
                />
              </Link>
            </div>

            <p className="mt-4 text-xs text-white leading-relaxed text-center sm:text-left sm:max-w-xs md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>

            {/* Social Icons */}
            <ul className="mt-6 flex justify-center gap-4 sm:justify-start sm:gap-6">
              {[
                {
                  name: "Facebook",
                  icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                  href: "#",
                  color: "text-blue-600",
                },
                {
                  name: "Instagram",
                  icon: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm4.25 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm4.75-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z",
                  href: "#",
                  color: "text-pink-500",
                },
                {
                  name: "Twitter",
                  icon: "M8.29 20.251c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.522A8.18 8.18 0 0 0 22 5.92a8.273 8.273 0 0 1-2.357.637 4.07 4.07 0 0 0 1.804-2.223 8.194 8.194 0 0 1-2.605.981 4.104 4.104 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.244 4.07 4.07 0 0 0 1.27 5.482A4.048 4.048 0 0 1 2.8 9.713v.05a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.847.07 4.105 4.105 0 0 0 3.833 2.82A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.816",
                  href: "#",
                  color: "text-sky-500",
                },
                {
                  name: "GitHub",
                  icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.528 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026a9.564 9.564 0 0 1 2.5-.336c.849.004 1.705.114 2.5.336 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.308.678.916.678 1.846 0 1.333-.012 2.408-.012 2.734 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2z",
                  href: "#",
                  color: "text-white",
                },
              ].map((social) => (
                <li key={social.name}>
                  <Link
                    href={social.href}
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75"
                  >
                    <span className="sr-only">{social.name}</span>
                    <svg
                      className={`h-5 w-5 ${social.color} sm:h-6 sm:w-6`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule={
                          social.name !== "Twitter" ? "evenodd" : undefined
                        }
                        d={social.icon}
                        clipRule={
                          social.name !== "Twitter" ? "evenodd" : undefined
                        }
                      />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Section */}
          <div className="text-center sm:text-left lg:pt-6">
            <p className="text-base font-medium text-white sm:text-lg">Links</p>
            <ul className="mt-4 space-y-2 text-xs sm:text-sm">
              {["Home", "About us", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-300 transition hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="text-center sm:text-left pt-6">
            <p className="text-base font-medium text-white sm:text-lg">
              Contact Us
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-xs sm:text-sm">
              <li className="flex justify-center sm:justify-start items-center gap-1.5">
                <Link href="#" className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 sm:size-5 shrink-0 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-300">+ (971) 55 956 3722</span>
                </Link>
              </li>
              <li className="flex justify-center sm:justify-start items-center gap-1.5">
                <Link href="#" className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 sm:size-5 shrink-0 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-300">sales@mcomcctv.com</span>
                </Link>
              </li>
              <li className="flex justify-center sm:justify-start items-center gap-1.5">
                <Link href="#" className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 sm:size-5 shrink-0 text-white mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <address className="text-gray-300 not-italic">
                    Office 210, Lulu Office Building, Al Muteena, Dubai, UAE
                  </address>
                </Link>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="py-8 lg:py-10">
            <div className="w-full h-48 sm:h-56 md:h-64">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.2726724871!2d-0.1277587!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b333b24b445%3A0x8eaeedc8a5a6b76c!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1685822894823!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="shadow-lg rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 lg:py-6 pb-6 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center">
          <p className="text-xs text-white sm:text-sm">© 2025 By EAIR</p>
          <p className="text-xs text-gray-400 sm:text-sm">
            <span className="block sm:inline">All rights reserved. </span>
            <Link
              href="#"
              className="inline-block text-white underline transition hover:text-teal-600"
            >
              Terms & Conditions
            </Link>
            <span> · </span>
            <Link
              href="#"
              className="inline-block text-white underline transition hover:text-teal-600"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
