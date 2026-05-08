// interface District {
//   name: string;
//   description: string;
//   image: string;
// }

// export default function FeaturedDistricts() {
//   const districts: District[] = [
//     {
//       name: "Cox's Bazar",
//       description: "World's longest natural sea beach",
//       image: "/Home/cox-bazar.png",
//     },
//     {
//       name: "Sylhet",
//       description: "The land of tea gardens and spirituality",
//       image: "/Home/sylhet.png",
//     },
//     {
//       name: "Bandarban",
//       description: "Hills, waterfalls, and tribal culture",
//       image: "/Home/bandarban.png",
//     },
//     {
//       name: "Sundarbans",
//       description: "The land of rivers and royal bengal tigers",
//       image: "/Home/sundarban.png",
//     },
//     {
//       name: "Rangamati",
//       description: "Lakes, hills, and hanging bridges",
//       image: "/Home/rangamati.png",
//     },
//     {
//       name: "Dhaka",
//       description: "Rich heritage and vibrant culture",
//       image: "/Home/dhaka.png",
//     },
//   ];

//   return (
//     <section className="py-12 bg-white">
//       <div className="customContainer mx-auto px-6">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Explore Featured Districts
//           </h2>
//           <p className="text-gray-600 max-w-3xl mx-auto">
//             Discover the diverse beauty and rich culture across Bangladesh's most
//             enchanting destinations
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {districts.map((district, index) => (
//             <DistrictCard
//               key={index}
//               title={district.name}
//               description={district.description}
//               image={district.image}
//               buttonText="View Attractions"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }