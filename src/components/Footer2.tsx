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
//           <p className="text-sm text-white dark:text-gray-300 sm:order-1">
//             © 2025 By EAIR
//           </p>

//           <p className="text-sm text-gray-300">
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
//           <p className="text-xs text-gray-300 sm:text-sm">
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

// "use client";
// import Link from "next/link";
// import Image from "next/image";

// const Footer2 = () => {
//   return (
//     <footer className="bg-black">
//       <div className="mx-auto max-w-screen-xl px-4 lg:py-8 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-[1.5fr_1fr_1fr_2fr]">
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
//           <div className="text-center sm:text-left lg:pt-6">
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
//                   <span className="text-gray-300">+ (971) 55 956 3722</span>
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
//                   <span className="text-gray-300">sales@mcomcctv.com</span>
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
//                     Office 210, Lulu Office Building, Al Muteena, Dubai, UAE
//                   </address>
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Google Map */}
//           <div className="py-8 lg:py-10">
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
//       <div className="mx-auto max-w-screen-xl px-4 lg:py-6 pb-6 sm:px-6 lg:px-8 border-t border-gray-200">
//         <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center">
//           <p className="text-xs text-white sm:text-sm">© 2025 By EAIR</p>
//           <p className="text-xs text-gray-300 sm:text-sm">
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
//////////////////////////////// little good footer/////////////
// "use client";
// import Link from "next/link";
// import Image from "next/image";

// const Footer2 = () => {
//   return (
//     <footer className="bg-black text-white">
//       <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
//         {/* Main Footer Content */}
//         <div className="flex flex-col lg:flex-row lg:justify-start lg:gap-8">
//           {/* Logo, Description, and Social Icons */}
//           <div className="flex flex-col items-center lg:items-start lg:w-[30%] mb-8 lg:mb-0">
//             <Link href="/">
//               <Image
//                 src="/logo/logo-mcom.png"
//                 alt="Company Logo"
//                 width={120}
//                 height={40}
//                 className="object-contain w-32 sm:w-40"
//               />
//             </Link>
//             <p className="mt-4 text-xs sm:text-sm text-center lg:text-left max-w-xs leading-relaxed">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
//               consequuntur amet culpa cum itaque neque.
//             </p>
// <ul className="mt-6 flex justify-center lg:justify-start gap-4 sm:gap-6">
//   {[
//     {
//       name: "Facebook",
//       icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
//       href: "#",
//       color: "text-blue-600",
//     },
//     {
//       name: "Instagram",
//       icon: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm4.25 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm4.75-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z",
//       href: "#",
//       color: "text-pink-500",
//     },
//     {
//       name: "Twitter",
//       icon: "M8.29 20.251c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.522A8.18 8.18 0 0 0 22 5.92a8.273 8.273 0 0 1-2.357.637 4.07 4.07 0 0 0 1.804-2.223 8.194 8.194 0 0 1-2.605.981 4.104 4.104 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.244 4.07 4.07 0 0 0 1.27 5.482A4.048 4.048 0 0 1 2.8 9.713v.05a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.847.07 4.105 4.105 0 0 0 3.833 2.82A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.816",
//       href: "#",
//       color: "text-sky-500",
//     },
//     {
//       name: "GitHub",
//       icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.528 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026a9.564 9.564 0 0 1 2.5-.336c.849.004 1.705.114 2.5.336 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.308.678.916.678 1.846 0 1.333-.012 2.408-.012 2.734 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2z",
//       href: "#",
//       color: "text-white",
//     },
//   ].map((social) => (
//     <li key={social.name}>
//       <Link
//         href={social.href}
//         rel="noreferrer"
//         target="_blank"
//         className="transition hover:opacity-75"
//       >
//         <span className="sr-only">{social.name}</span>
//         <svg
//           className={`h-5 w-5 ${social.color} sm:h-6 sm:w-6`}
//           fill="currentColor"
//           viewBox="0 0 24 24"
//           aria-hidden="true"
//         >
//           <path
//             fillRule={
//               social.name !== "Twitter" ? "evenodd" : undefined
//             }
//             d={social.icon}
//             clipRule={
//               social.name !== "Twitter" ? "evenodd" : undefined
//             }
//           />
//         </svg>
//       </Link>
//     </li>
//   ))}
// </ul>
//           </div>

//           {/* Links, Contact, and Map Sections */}
//           <div className="flex flex-col sm:flex-row lg:flex-row lg:w-2/5 md:justify-center md:pb-5 sm:justify-center gap-8 lg:gap-4">
//             {/* Links Section */}
//             <div className="flex flex-col items-center sm:items-start lg:w-1/4">
//               <p className="text-base sm:text-lg font-medium">Links</p>
//               <ul className="mt-4 space-y-2 text-xs sm:text-sm">
//                 {["Home", "About us", "Services", "Contact"].map((item) => (
//                   <li key={item}>
//                     <Link
//                       href="#"
//                       className="text-gray-300 transition hover:text-white"
//                     >
//                       {item}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Contact Us Section */}
//             <div className="flex flex-col items-center sm:items-start lg:w-4/4">
//               <p className="text-base sm:text-lg font-medium">Contact Us</p>
//               <ul className="mt-4 flex flex-col gap-2 text-xs sm:text-sm">
//                 <li className="flex items-center justify-center sm:justify-start gap-1.5">
// <Link href="#" className="flex items-center gap-1.5">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="size-4 sm:size-5 shrink-0"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//     />
//   </svg>
//   <span className="text-gray-300">+ (971) 55 956 3722</span>
// </Link>
//                 </li>
//                 <li className="flex items-center justify-center sm:justify-start gap-1.5">
// <Link href="#" className="flex items-center gap-1.5">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="size-4 sm:size-5 shrink-0"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//     />
//   </svg>
//   <span className="text-gray-300">sales@mcomcctv.com</span>
// </Link>
//                 </li>
//                 <li className="flex items-center justify-center sm:justify-start gap-1.5">
// <Link href="#" className="flex items-center gap-1.5">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="size-4 sm:size-5 shrink-0 mt-0.5"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//     />
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//     />
//   </svg>
//   <address className="text-gray-300 not-italic">
//     Office 210, Lulu Office Building, Al Muteena, Dubai, UAE
//   </address>
// </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           {/* Google Map */}
//           <div className="flex flex-col items-center sm:items-start lg:w-[40%]">
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

//       {/* Footer Bottom */}
// <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8 border-t border-gray-200">
//   <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-4">
//     <p className="text-xs sm:text-sm">© 2025 By EAIR</p>
//     <p className="text-xs sm:text-sm text-gray-300">
//       <span className="block sm:inline">All rights reserved. </span>
//       <Link
//         href="#"
//         className="inline-block text-white underline transition hover:text-teal-600"
//       >
//         Terms & Conditions
//       </Link>
//       <span> · </span>
//       <Link
//         href="#"
//         className="inline-block text-white underline transition hover:text-teal-600"
//       >
//         Privacy Policy
//       </Link>
//     </p>
//   </div>
// </div>
//     </footer>
//   );
// };

// export default Footer2;

// "use client";
// import Link from "next/link";
// import Image from "next/image";

// export default function Footer2() {
//   return (
//    <div>
//   <div className="bg-gray-900 text-gray-300 py-12">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
//       <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
//         {/* Logo and Social Links */}
//         <div className="space-y-6 md:col-span-2">
//           <div>
//             <Link href="/" aria-label="Stellar">
//               <Image
//                 src="/logo/logo-mcom.png"
//                 alt="Stellar"
//                 width={108}
//                 height={108}
//                 className="hover:opacity-75 transition-opacity"
//               />
//             </Link>
//           </div>
//           <p className="text-sm">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nulla
//             mollitia tempora sapiente maiores vero a distinctio veritatis
//           </p>
//           <ul className="flex space-x-4">
//             <li>
//               <Link
//                 href="#"
//                 aria-label="Twitter"
//                 className="hover:text-white transition-colors"
//               >
//                 <svg
//                   className="w-6 h-6 fill-current"
//                   viewBox="0 0 32 32"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
//                 </svg>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#"
//                 aria-label="Dev.to"
//                 className="hover:text-white transition-colors"
//               >
//                 <svg
//                   className="w焦作
//                   className="w-6 h-6 fill-current"
//                   viewBox="0 0 32 32"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M12.29 14.3a.69.69 0 0 0-.416-.155h-.623v3.727h.623a.689.689 0 0 0 .416-.156.543.543 0 0 0 .21-.466v-2.488a.547.547 0 0 0-.21-.462ZM22.432 8H9.568C8.704 8 8.002 8.7 8 9.564v12.872A1.568 1.568 0 0 0 9.568 24h12.864c.864 0 1.566-.7 1.568-1.564V9.564A1.568 1.568 0 0 0 22.432 8Zm-8.925 9.257a1.631 1.631 0 0 1-1.727 1.687h-1.657v-5.909h1.692a1.631 1.631 0 0 1 1.692 1.689v2.533ZM17.1 14.09h-1.9v1.372h1.163v1.057H15.2v1.371h1.9v1.056h-2.217a.72.72 0 0 1-.74-.7v-4.471a.721.721 0 0 1 .7-.739H17.1v1.054Zm3.7 4.118c-.471 1.1-1.316.88-1.694 0l-1.372-5.172H18.9l1.058 4.064 1.056-4.062h1.164l-1.378 5.17Z" />
//                 </svg>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#"
//                 aria-label="Github"
//                 className="hover:text-white transition-colors"
//               >
//                 <svg
//                   className="w-6 h-6 fill-current"
//                   viewBox="0 0 32 32"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
//                 </svg>
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Quick Link and Contact in one row for md */}
//         <div className="md:col-span-2 flex flex-col md:flex-row md:space-x-8">
//           {/* Quick Link */}
//           <div className="flex-1">
//             <h6 className="text-white font-semibold mb-4">Quick Link</h6>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link href="#" className="hover:text-white transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-white transition-colors">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-white transition-colors">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-white transition-colors">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="flex-1 mt-6 md:mt-0">
//             <h6 className="text-white font-semibold mb-4">Contact</h6>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link href="#" className="flex items-center gap-1.5">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="size-4 sm:size-5 shrink-0"
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
//                   <span className="text-gray-300">+ (971) 55 956 3722</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="flex items-center gap-1.5">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="size-4 sm:size-5 shrink-0"
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
//                   <span className="text-gray-300">sales@mcomcctv.com</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="flex items-center gap-1.5">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="size-4 sm:size-5 shrink-0 mt-0.5"
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
//                     Office 210, Lulu Office Building, Al Muteena, Dubai, UAE
//                   </address>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Map */}
//         <div className="md:col-span-2">
//           <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153167!3d-37.81627927975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1635781234567!5m2!1sen!2sus"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               title="Company Location"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="mx-auto max-w-screen-xl bg-black px-4 py-6 sm:px-6 lg:px-8 border-t border-gray-200">
//     <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-4">
//       <p className="text-xs sm:text-sm">© 2025 By EAIR</p>
//       <p className="text-xs sm:text-sm text-gray-300">
//         <span className="block sm:inline">All rights reserved. </span>
//         <Link
//           href="#"
//           className="inline-block text-white underline transition hover:text-teal-600"
//         >
//           Terms & Conditions
//         </Link>
//         <span> · </span>
//         <Link
//           href="#"
//           className="inline-block text-white underline transition hover:text-teal-600"
//         >
//           Privacy Policy
//         </Link>
//       </p>
//     </div>
//   </div>
// </div>
//   );
// }

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Footer2() {
//   return (
//     <div className="bg-black">
//       <div className="bg-gray-900 text-gray-300 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
//           <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
//             {/* Logo and Social Links */}
//             <div className="space-y-6 md:col-span-2">
//               <div>
//                 <Link href="/" aria-label="Stellar">
//                   <Image
//                     src="/logo/logo-mcom.png"
//                     alt="Stellar"
//                     width={108}
//                     height={108}
//                     className="hover:opacity-75 transition-opacity"
//                   />
//                 </Link>
//               </div>
//               <p className="text-sm">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
//                 nulla mollitia tempora sapiente maiores vero a distinctio
//                 veritatis
//               </p>
// <ul className="flex space-x-4">
//   <li>
//     <Link
//       href="#"
//       aria-label="Twitter"
//       className="hover:text-white transition-colors"
//     >
//       <svg
//         className="w-6 h-6 fill-current"
//         viewBox="0 0 32 32"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
//       </svg>
//     </Link>
//   </li>
//   <li>
//     <Link
//       href="#"
//       aria-label="Dev.to"
//       className="hover:text-white transition-colors"
//     >
//       <svg
//         className="w-6 h-6 fill-current"
//         viewBox="0 0 32 32"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M12.29 14.3a.69.69 0 0 0-.416-.155h-.623v3.727h.623a.689.689 0 0 0 .416-.156.543.543 0 0 0 .21-.466v-2.488a.547.547 0 0 0-.21-.462ZM22.432 8H9.568C8.704 8 8.002 8.7 8 9.564v12.872A1.568 1.568 0 0 0 9.568 24h12.864c.864 0 1.566-.7 1.568-1.564V9.564A1.568 1.568 0 0 0 22.432 8Zm-8.925 9.257a1.631 1.631 0 0 1-1.727 1.687h-1.657v-5.909h1.692a1.631 1.631 0 0 1 1.692 1.689v2.533ZM17.1 14.09h-1.9v1.372h1.163v1.057H15.2v1.371h1.9v1.056h-2.217a.72.72 0 0 1-.74-.7v-4.471a.721.721 0 0 1 .7-.739H17.1v1.054Zm3.7 4.118c-.471 1.1-1.316.88-1.694 0l-1.372-5.172H18.9l1.058 4.064 1.056-4.062h1.164l-1.378 5.17Z" />
//       </svg>
//     </Link>
//   </li>
//   <li>
//     <Link
//       href="#"
//       aria-label="Github"
//       className="hover:text-white transition-colors"
//     >
//       <svg
//         className="w-6 h-6 fill-current"
//         viewBox="0 0 32 32"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
//       </svg>
//     </Link>
//   </li>
// </ul>
//             </div>

//             {/* Quick Link and Contact in one row for md */}
//             <div className="md:col-span-2 flex flex-col md:flex-row md:space-x-8">
//               {/* Quick Link */}
//               <div className="flex-1">
//                 <h6 className="text-white font-semibold mb-4">Quick Link</h6>
//                 <ul className="space-y-2 text-sm">
//                   <li>
//                     <Link
//                       href="#"
//                       className="hover:text-white transition-colors"
//                     >
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="#"
//                       className="hover:text-white transition-colors"
//                     >
//                       About
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="#"
//                       className="hover:text-white transition-colors"
//                     >
//                       Services
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="#"
//                       className="hover:text-white transition-colors"
//                     >
//                       Contact
//                     </Link>
//                   </li>
//                 </ul>
//               </div>

//               {/* Contact */}
//               <div className="flex-1 mt-6 md:mt-0">
//                 <h6 className="text-white font-semibold mb-4">Contact</h6>
// <ul className="space-y-2 text-sm">
//   <li>
//     <Link href="#" className="flex items-center gap-1.5">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="size-4 sm:size-5 shrink-0"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth="2"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//         />
//       </svg>
//       <span className="text-gray-300">+ (971) 55 956 3722</span>
//     </Link>
//   </li>
//   <li>
//     <Link href="#" className="flex items-center gap-1.5">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="size-4 sm:size-5 shrink-0"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth="2"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//         />
//       </svg>
//       <span className="text-gray-300">sales@mcomcctv.com</span>
//     </Link>
//   </li>
//   <li>
//     <Link href="#" className="flex items-center gap-1.5">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="size-4 sm:size-5 shrink-0 mt-0.5"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth="2"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//         />
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//         />
//       </svg>
//       <address className="text-gray-300 not-italic">
//         Office 210, Lulu Office Building, Al Muteena, Dubai, UAE
//       </address>
//     </Link>
//   </li>
// </ul>
//               </div>
//             </div>

//             {/* Map */}
//             <div className="md:col-span-2">
//               <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153167!3d-37.81627927975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1635781234567!5m2!1sen!2sus"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   title="Company Location"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mx-auto max-w-screen-xl bg-black px-4 py-6 sm:px-6 lg:px-8 border-t border-gray-200">
//         <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-4">
//           <p className="text-xs sm:text-sm text-white">© 2025 By EAIR</p>
//           <p className="text-xs sm:text-sm text-gray-300">
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
//     </div>
//   );
// }
// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Footer2() {
//   return (
//     <footer className="bg-black">
//       <div className="bg-gray-900 text-gray-300 py-8 pt-12 pb-0">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
//             {/* Logo and Social Links */}
//             <div className="space-y-6 lg:col-span-2">
//               <div>
//                 <Link href="/" aria-label="Stellar">
//                   <Image
//                     src="/logo/logo-mcom.png"
//                     alt="Stellar"
//                     width={90}
//                     height={60}
//                     className="hover:opacity-75 transition-opacity w-20 h-10 sm:w-20 sm:h-14"
//                   />
//                 </Link>
//               </div>
//               <p className="text-xs sm:text-sm">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
//                 nulla mollitia tempora sapiente maiores vero a distinctio
//                 veritatis.
//               </p>
//               <ul className="mt-6 flex justify-center lg:justify-start gap-4 sm:gap-6">
//                 {[
//                   {
//                     name: "Facebook",
//                     icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
//                     href: "#",
//                     color: "text-blue-600",
//                   },
//                   {
//                     name: "Instagram",
//                     icon: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm4.25 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm4.75-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z",
//                     href: "#",
//                     color: "text-pink-500",
//                   },
//                   {
//                     name: "Twitter",
//                     icon: "M8.29 20.251c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.522A8.18 8.18 0 0 0 22 5.92a8.273 8.273 0 0 1-2.357.637 4.07 4.07 0 0 0 1.804-2.223 8.194 8.194 0 0 1-2.605.981 4.104 4.104 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.244 4.07 4.07 0 0 0 1.27 5.482A4.048 4.048 0 0 1 2.8 9.713v.05a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.847.07 4.105 4.105 0 0 0 3.833 2.82A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.816",
//                     href: "#",
//                     color: "text-sky-500",
//                   },

//                   {
//                     name: "LinkedIn",
//                     icon: "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 11.25h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.25c.518-.79 1.52-1.25 2.5-1.25 1.93 0 3.5 1.57 3.5 3.5v6.5z",
//                     href: "#",
//                     color: "text-blue-700",
//                   },
//                 ].map((social) => (
//                   <li key={social.name}>
//                     <Link
//                       href={social.href}
//                       rel="noreferrer"
//                       target="_blank"
//                       className="transition hover:opacity-75"
//                     >
//                       <span className="sr-only">{social.name}</span>
//                       <svg
//                         className={`h-5 w-5 ${social.color} sm:h-6 sm:w-6`}
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                         aria-hidden="true"
//                       >
//                         <path
//                           fillRule={
//                             social.name !== "Twitter" ? "evenodd" : undefined
//                           }
//                           d={social.icon}
//                           clipRule={
//                             social.name !== "Twitter" ? "evenodd" : undefined
//                           }
//                         />
//                       </svg>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Quick Links */}
//             <div className="lg:col-span-1">
//               <h6 className="text-white font-semibold mb-4 text-sm sm:text-base">
//                 Quick Links
//               </h6>
//               <ul className="space-y-2 text-xs sm:text-sm">
//                 <li>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     Services
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Contact */}
//             <div className="lg:col-span-1 lg:-translate-x-10 transform md:-translate-x-0">
//               <h6 className="text-white font-semibold mb-4 text-sm sm:text-base">
//                 Contact
//               </h6>
//               <ul className="space-y-2 text-xs sm:text-sm">
//                 <li>
//                   <Link href="#" className="flex items-center gap-1.5">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                       />
//                     </svg>
//                     <span className="text-gray-300">+ (971) 55 956 3722</span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="flex items-center gap-1.5">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                       />
//                     </svg>
//                     <span className="text-gray-300">sales@mcomcctv.com</span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="flex items-start gap-1.5">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                     </svg>
//                     <address className="text-gray-300 not-italic text-xs sm:text-sm">
//                       Office 210, Lulu Office Building, Al Muteena, Dubai, UAE
//                     </address>
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Map */}
//             <div className="lg:col-span-2">
//               <div className="w-full h-40 sm:h-48 bg-gray-700 rounded-lg overflow-hidden">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.733299235245!2d55.32568991504395!3d25.27029798385912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sLulu%20Office%20Building%2C%20Al%20Muteena%2C%20Dubai%2C%20UAE!5e0!3m2!1sen!2sus!4v1635781234567!5m2!1sen!2sus"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   title="Company Location"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mx-auto max-w-screen-xl bg-black px-4 py-6 sm:py-6 sm:px-6 lg:px-8 border-t border-gray-800">
//         <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:gap-4 text-center sm:text-left">
//           <p className="text-xs text-white">© 2025 By EAIR</p>
//           <p className="text-xs text-gray-300">
//             <span className="block sm:inline">All rights reserved. </span>
//             <Link
//               href="#"
//               className="inline-block text-white underline transition hover:text-teal-600"
//             >
//               Terms & Conditions
//             </Link>
//             <span className="hidden sm:inline"> · </span>
//             <span className="block sm:inline">
//               <Link
//                 href="#"
//                 className="inline-block text-white underline transition hover:text-teal-600"
//               >
//                 Privacy Policy
//               </Link>
//             </span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// "use client";
// import Link from "next/link";
// import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
// import Image from "next/image";

// export default function Footer2() {
//   return (
//     <footer className="bg-gray-900 text-white py-8">
//       <div className="container mx-auto px-30">
//         <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-8">
//           {/* Left Section: Logo and Description */}
//           <div className="flex-1 text-center lg:text-left">
//             <div className="mb-4">
//               <div className="w-32 h-15 relative rounded overflow-hidden">
//                 <Image
//                   src="/logo/logo-mcom.png" // replace with your actual path
//                   alt="Company Logo"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//             <p className="text-sm mb-4">
//               Lorem ipsum, dolor sit amet consectetur adipiscing elit. Dolore
//               nulla mollitia tempora sapiente maiores vero a distinctio
//               veritatis.
//             </p>
//             {/* Social Media Icons */}
//             <div className="flex justify-center lg:justify-start space-x-4">
//               <a href="#" className="text-xl hover:text-gray-300">
//                 <FaFacebook />
//               </a>
//               <a href="#" className="text-xl hover:text-gray-300">
//                 <FaInstagram />
//               </a>
//               <a href="#" className="text-xl hover:text-gray-300">
//                 <FaTwitter />
//               </a>
//               <a href="#" className="text-xl hover:text-gray-300">
//                 <FaLinkedin />
//               </a>
//             </div>
//           </div>

//           {/* Middle Section: Quick Links */}
//           <div className="lg:w-32 text-center lg:text-left">
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link href="/" className="hover:text-gray-300">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="hover:text-gray-300">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services" className="hover:text-gray-300">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="hover:text-gray-300">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Right Section: Contact Info */}
//           <div className="w-full lg:w-48 text-center lg:text-left mx-auto">
//             <h3 className="text-lg font-semibold mb-4">Contact</h3>
//             <ul className="space-y-2 text-sm">
//               <li className="flex items-center justify-center lg:justify-start">
//                 <span className="mr-2">📞</span> +971 55 956 3722
//               </li>
//               <li className="flex items-center justify-center lg:justify-start">
//                 <span className="mr-2">✉️</span> sales@mccomcctv.com
//               </li>
//               <li className="flex items-start justify-center lg:justify-start">
//                 <span className="mr-2 mt-1">📍</span>
//                 <span>
//                   Office 210, Lulu Office Building, Al Muteena, Dubai, UAE
//                 </span>
//               </li>
//             </ul>
//           </div>

//           {/* Map Section */}
//           <div className="flex-1">
//             <div className="w-full h-48 rounded overflow-hidden">
//               <iframe
//                 className="w-full h-full border-0"
//                 loading="lazy"
//                 allowFullScreen
//                 referrerPolicy="no-referrer-when-downgrade"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.331203857261!2d55.31852477593921!3d25.27114742921135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434a4e13e249%3A0xa55f0198ec9cbd60!2sLulu%20Building%2C%20Al%20Muteena%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1715869900000!5m2!1sen!2sus"
//               ></iframe>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section: Copyright */}
//         <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
//           <p>
//             © 2025 By EAIR | All Rights Reserved. Terms & Conditions. Privacy
//             Policy
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// "use client";
// import Link from "next/link";
// import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
// import Image from "next/image";

// export default function Footer2() {
//   return (
//     <footer className="bg-gray-900 text-white py-6 px-20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-30">
//         <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-6">
//           {/* Left Section: Logo and Description */}
//           <div className="flex-1 text-center lg:text-left">
//             <div className="mb-4">
//               <div className="w-20 sm:w-24 lg:w-28 h-10 sm:h-12 lg:h-14 relative rounded overflow-hidden mx-auto lg:mx-0">
//                 <Image
//                   src="/logo/logo-mcom.png"
//                   alt="Company Logo"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//             <p className="text-xs sm:text-sm lg:text-base mb-4 max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0">
//               Lorem ipsum, dolor sit amet consectetur adipiscing elit. Dolore
//               nulla mollitia tempora sapiente maiores vero a distinctio
//               veritatis.
//             </p>
//             {/* Social Media Icons */}
//             <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4">
//               <a
//                 href="#"
//                 className="text-base sm:text-lg lg:text-xl hover:text-gray-300"
//               >
//                 <FaFacebook />
//               </a>
//               <a
//                 href="#"
//                 className="text-base sm:text-lg lg:text-xl hover:text-gray-300"
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href="#"
//                 className="text-base sm:text-lg lg:text-xl hover:text-gray-300"
//               >
//                 <FaTwitter />
//               </a>
//               <a
//                 href="#"
//                 className="text-base sm:text-lg lg:text-xl hover:text-gray-300"
//               >
//                 <FaLinkedin />
//               </a>
//             </div>
//           </div>

//           {/* Middle Section: Quick Links */}
//           <div className="w-32 sm:w-36 lg:w-40 text-center lg:text-left">
//             <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3">
//               Links
//             </h3>
//             <ul className="space-y-2 text-xs sm:text-sm lg:text-base">
//               <li>
//                 <Link href="/" className="hover:text-gray-300">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="hover:text-gray-300">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services" className="hover:text-gray-300">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="hover:text-gray-300">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Right Section: Contact Info */}
//           <div className="w-full max-w-44 sm:max-w-48 lg:max-w-52  lg:-translate-x-8 md:-translate-x-0 text-center lg:text-left mx-auto">
//             <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3">
//               Contact
//             </h3>
//             <ul className="space-y-2 text-xs sm:text-sm lg:text-base">
//               <li className="flex items-center justify-center lg:justify-start">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="size-4 sm:size-5 shrink-0 mr-2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                   />
//                 </svg>{" "}
//                 +971 55 956 3722
//               </li>
//               <li className="flex items-center justify-center lg:justify-start">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="size-4 sm:size-5 shrink-0 mr-2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//                 sales@mccomcctv.com
//               </li>
//               <li className="flex items-start justify-center lg:justify-start">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="size-4 sm:size-5 shrink-0 mt-0.5 mr-2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                   />
//                 </svg>
//                 <span className="max-w-36 sm:max-w-40 lg:max-w-44">
//                   Office 210, Lulu Office Building, Al Muteena, Dubai, UAE
//                 </span>
//               </li>
//             </ul>
//           </div>

//           <div className="w-full max-w-44 sm:max-w-48 lg:max-w-52 text-center lg:text-left mx-auto">
//             <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3">
//               Open Hours
//             </h3>
//             <ul className="space-y-2 text-xs sm:text-sm lg:text-base">
//               <li className="flex items-center justify-center lg:justify-start">
//                 Mon-Sat: 9am - 6pm
//               </li>
//             </ul>
//           </div>

//           {/* Map Section */}
//           <div className="flex-1 w-full">
//             <div className="w-full h-36 sm:h-40 lg:h-48 rounded overflow-hidden">
//               <iframe
//                 className="w-full h-full border-0"
//                 loading="lazy"
//                 allowFullScreen
//                 referrerPolicy="no-referrer-when-downgrade"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.331203857261!2d55.31852477593921!3d25.27114742921135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434a4e13e249%3A0xa55f0198ec9cbd60!2sLulu%20Building%2C%20Al%20Muteena%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1715869900000!5m2!1sen!2sus"
//               ></iframe>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section: Copyright */}
//         <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs sm:text-sm lg:text-base">
//           <p>
//             © 2025 By EAIR | All Rights Reserved. Terms & Conditions. Privacy
//             Policy
//           </p>
//         </div>
//       </div>

//       {/* Custom Styles for Responsive Adjustments */}
//       <style jsx>{`
//         @media (max-width: 480px) {
//           .container {
//             padding-left: 12px;
//             padding-right: 12px;
//           }
//           .w-20 {
//             width: 64px;
//             height: 32px;
//           }
//           .text-xs {
//             font-size: 10px;
//           }
//           .text-base {
//             font-size: 14px;
//           }
//           .max-w-36 {
//             max-width: 144px;
//           }
//           .h-36 {
//             height: 120px;
//           }
//           .space-x-3 > :not([hidden]) ~ :not([hidden]) {
//             margin-left: 6px;
//           }
//           .space-y-2 > :not([hidden]) ~ :not([hidden]) {
//             margin-top: 4px;
//           }
//         }

//         @media (min-width: 481px) and (max-width: 768px) {
//           .container {
//             padding-left: 16px;
//             padding-right: 16px;
//           }
//           .w-24 {
//             width: 80px;
//             height: 40px;
//           }
//           .h-40 {
//             height: 160px;
//           }
//         }

//         @media (min-width: 769px) and (max-width: 1024px) {
//           .container {
//             padding-left: 24px;
//             padding-right: 24px;
//           }
//           .w-28 {
//             width: 96px;
//             height: 48px;
//           }
//         }
//       `}</style>
//     </footer>
//   );
// }

"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Footer2() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-5  sm:px-6 md:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 sm:gap-10 md:grid md:grid-cols-2 md:gap-6 lg:flex lg:flex-row lg:justify-between lg:gap-8">
          {/* Left Section: Logo and Description (Full width on md) */}
          <div className="flex-1 text-center md:col-span-2 lg:text-left">
            <div className="mb-4 flex justify-center lg:justify-start">
              <div className="relative w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 lg:w-28 lg:h-14 rounded overflow-hidden">
                <Image
                  src="/logo/white-logo.png"
                  alt="Company Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-xs sm:text-sm md:text-sm mb-4 max-w-[16rem] text-gray-300 sm:max-w-xs md:max-w-2xl lg:max-w-sm mx-auto lg:mx-0">
              At Mcom, we are driven by a singular mission - to cultivate a
              dynamic and diverse portfolio in the realm of Cybersecurity
              Services, complete IT and Cloud Infrastructure solutions, IT
              product distributions, and managed services.
            </p>
            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5">
              <a
                href="#"
                className="text-base sm:text-lg md:text-xl lg:text-xl hover:text-gray-300 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-base sm:text-lg md:text-xl lg:text-xl hover:text-gray-300 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-base sm:text-lg md:text-xl lg:text-xl hover:text-gray-300 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-base sm:text-lg md:text-xl lg:text-xl hover:text-gray-300 transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="text-center md:text-left">
            <h3 className="text-base heading-all sm:text-lg md:text-xl lg:text-xl font-semibold mb-3">
              Links
            </h3>
            <ul className=" text-sm text-gray-300 sm:text-sm md:text-base space-y-4 lg:text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-300 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-gray-300 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left md:ml-10 ml-0">
            <h3 className="text-base sm:text-lg heading-all md:text-xl lg:text-xl font-semibold mb-3">
              Contact Us
            </h3>
            <ul className="space-y-4 text-xs text-gray-300 sm:text-sm md:text-base lg:text-base">
              <li className="flex items-center justify-center md:justify-start text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 shrink-0 mr-2"
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
                +971 55 956 3722
              </li>
              <li className="flex items-center justify-center md:justify-start  text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 shrink-0 mr-2"
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
                sales@mccomcctv.com
              </li>
              <li className="flex items-start justify-center md:justify-start  text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 shrink-0 mt-0.5 mr-2"
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
                <span className="max-w-[9rem] sm:max-w-36 md:max-w-40 lg:max-w-44">
                  Office 210, Lulu Office Building, Al Muteena, Dubai, UAE
                </span>
              </li>
            </ul>
          </div>

          {/* Open Hours Section */}
          <div className="text-center md:text-left">
            <h3 className="text-base sm:text-lg heading-all md:text-xl lg:text-xl font-semibold mb-3">
              Open Hours
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm  md:text-base ">
              <li className="flex items-center justify-center md:justify-start text-sm">
                Mon-Sat: 9am - 6pm
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div className="flex-1 w-full text-center md:text-left">
            <div className="w-full h-32 sm:h-36 md:h-40 lg:h-48 rounded overflow-hidden">
              <iframe
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.331203857261!2d55.31852477593921!3d25.27114742921135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434a4e13e249%3A0xa55f0198ec9cbd60!2sLulu%20Building%2C%20Al%20Muteena%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1715869900000!5m2!1sen!2sus"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-700 mt-8 sm:mt-10 md:mt-12 pt-4 text-center text-xs sm:text-sm md:text-base lg:text-base">
          <p className="text-sm text-gray-300">
            © 2025 By EAIR | All Rights Reserved. Terms & Conditions. Privacy
            Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
