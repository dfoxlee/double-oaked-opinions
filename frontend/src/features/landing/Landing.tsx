import { useEffect, useState } from "react";
import type { BourbonType } from "../../types/types";
import BourbonCard from "./components/BourbonCard";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import type { FilterType } from "./types/landingTypes";

import styles from "./Landing.module.css";

const bourbons: BourbonType[] = [
   {
      name: "Sazerac Rye",
      distillery: "Buffalo Trace",
      description:
         "From the website: The One and Only New Orleans Original. Sazerac Rye Whiskey symbolizes the tradition and history of New Orleans. Rye Whiskey dates back to the 1800’s, around the time when saloons, veiled as Coffee Houses, began lining the streets of New Orleans. It was at the Sazerac Coffee House on Royal Street where local patrons were served toddies made with Rye Whiskey and Peychaud’s Bitters. The libation became known as the “Sazerac” and America’s first branded cocktail was born. This is the whiskey that started it all.",
      averagePurchasePrice: 29.99,
      thumbnailImg:
         "https://www.buffalotracedistillery.com/our-brands/sazerac/sazerac-rye/_jcr_content/root/container/container_477176612/image.coreimg.100.1200.png/1597369114750/saz-rye-desktop-bottle.png", // Added a placeholder
      averageStars: 4.8, // Adjusted average based on new reviews
      reviews: [
         {
            reviewDate: new Date("2024-05-10T14:00:00Z"),
            purchasePrice: 29.99,
            stars: 5,
            review:
               "Really good experience. I enjoy the little bite at the end. One thing that really bothers me is the cap. The cork has come unglued numerous times from the decorative wood piece.",
         },
         {
            reviewDate: new Date("2025-07-13T10:05:00Z"),
            purchasePrice: 32.5,
            stars: 4,
            review:
               "A classic for a reason. Excellent for cocktails, especially its namesake. Neat, it's quite good, though I find it a bit thin on the palate compared to some other ryes. Great value at this price point. The bottle design is iconic.",
         },
         {
            reviewDate: new Date("2025-07-13T11:20:00Z"),
            purchasePrice: 28.0,
            stars: 5,
            review:
               "My go-to rye. It's got that perfect balance of spice and subtle sweetness, making it incredibly versatile. It shines in a Sazerac, of course, but also fantastic in an Old Fashioned. Always have a bottle on hand. No issues with the cork on mine!",
         },
         {
            reviewDate: new Date("2025-07-13T12:00:00Z"),
            purchasePrice: 29.99,
            stars: 3,
            review:
               "Decent entry-level rye. It's smooth enough, but I was hoping for a bit more complexity. The finish is a little quick for my taste. Good for mixing if you're not looking for anything too dominant, but I prefer other ryes for sipping neat.",
         },
         {
            reviewDate: new Date("2025-07-13T13:45:00Z"),
            purchasePrice: 31.99,
            stars: 4,
            review:
               "Reliable and consistent. Sazerac Rye offers good spice upfront, followed by hints of vanilla and caramel. It's not a powerhouse, but it's exceptionally well-behaved and makes a fantastic base for any rye cocktail. A solid everyday sipper or mixer.",
         },
         {
            reviewDate: new Date("2025-07-13T15:30:00Z"),
            purchasePrice: 27.5,
            stars: 5,
            review:
               "This is liquid gold for anyone who appreciates a classic cocktail. The flavor profile is exactly what you want in a rye - bold, spicy, and just a touch of sweetness. Makes the absolute best Sazerac, hands down. Highly recommended for any home bar.",
         },
      ],
   },
   {
      name: "Four Roses Single Barrel",
      distillery: "Four Roses Distillery",
      description:
         "From the website: You'll want to savor the taste of this premium Single Barrel again and again. It's complex, full-bodied and surprisingly smooth with a delicate, long finish that's unbelievably mellow. Drink straight up or on the rocks. 100 proof. 50% alcohol/volume. (Note: Specific recipes like OBSV, OESK, etc., vary by bottle for this single barrel offering).",
      averagePurchasePrice: 49.99,
      thumbnailImg:
         "https://www.fourrosesbourbon.com/_next/image?url=https%3A%2F%2Foptimise2.assets-servd.host%2Ffour-roses%2Fproduction%2Fimages%2Fbourbons%2FWeb_FR-Single-Barrel.png%3Fw%3D795%26h%3D1350%26auto%3Dcompress%252Cformat%26fit%3Dcrop%26dm%3D1687219568%26s%3D876db3b505c8ba6d095ea74fb6d2d27f&w=768&q=75",
      averageStars: 4.7,
      reviews: [
         {
            reviewDate: new Date("2025-07-13T09:00:00Z"),
            purchasePrice: 52.0,
            stars: 5,
            review:
               "An absolute gem. The OBSV recipe (my bottle) is bursting with delicate fruit and rye spice. Fantastic neat, and holds up incredibly well with a single ice cube. This is a must-have for any bourbon lover.",
         },
         {
            reviewDate: new Date("2025-07-13T14:10:00Z"),
            purchasePrice: 48.99,
            stars: 4,
            review:
               "Solid single barrel offering. Lots of caramel and vanilla notes, with a nice oak presence. It's consistently good, though sometimes a particular barrel might be just 'very good' instead of 'outstanding'. Still, excellent value for a 100 proof bourbon.",
         },
         {
            reviewDate: new Date("2025-07-13T17:00:00Z"),
            purchasePrice: 50.0,
            stars: 5,
            review:
               "Always a winner. The complexity you get from the different recipes is amazing. My current bottle has prominent baking spices and a rich, long finish. It's smooth for its proof and definitely a step up from the Small Batch.",
         },
      ],
   },
   {
      name: "Bulleit Rye",
      distillery: "Bulleit Distilling Co. (sourced from MGP)",
      description:
         "From the website: Bulleit Rye is an award-winning, straight rye whiskey with a character of unparalleled spice and a clean finish. Bulleit Rye is 95% rye and 5% malted barley, a mashbill that's typically found in a young whiskey, but here, it offers a distinctively bold and complex character.",
      averagePurchasePrice: 27.99,
      thumbnailImg:
         "https://images.ctfassets.net/awz4vj3h97d6/4G4lDcXH1qMQUDd38nwm17/208e45a53d9ce77773eba1261ab4cb43/bulleit-rye.jpg?fm=avif&w=320&q=60",
      averageStars: 4.0,
      reviews: [
         {
            reviewDate: new Date("2025-07-13T08:30:00Z"),
            purchasePrice: 26.5,
            stars: 4,
            review:
               "A great workhorse rye. It's got that classic high-rye spice, plenty of dill and mint, and holds up beautifully in cocktails. It might be a bit too spicy for sipping neat for some, but for Manhattans and Old Fashioneds, it's perfect. Excellent value.",
         },
         {
            reviewDate: new Date("2025-07-13T16:00:00Z"),
            purchasePrice: 29.0,
            stars: 4,
            review:
               "Good bang for your buck. I usually use this for mixing, and it never disappoints. The spiciness cuts through other ingredients nicely. On its own, it's decent, a bit hot, but enjoyable with a single ice cube.",
         },
      ],
   },
   {
      name: "Maker's Mark",
      distillery: "Maker's Mark Distillery",
      description:
         "From the website: A handmade bourbon, made with soft red winter wheat for a one-of-a-kind, full-flavored bourbon that's easy to drink. It's smooth and approachable with a unique, caramel-forward taste.",
      averagePurchasePrice: 24.99,
      thumbnailImg:
         "https://www.makersmark.com/sites/default/files/styles/card_1_1/public/2024-07/makers-mark-bottle-bourbon-whiskey-classic.png.webp?itok=bAEjc6RE",
      averageStars: 4.2,
      reviews: [
         {
            reviewDate: new Date("2025-07-13T09:45:00Z"),
            purchasePrice: 24.99,
            stars: 5,
            review:
               "My everyday sipper. Incredibly smooth and approachable, with those signature red winter wheat notes of caramel and vanilla. Always reliable, always enjoyable. Great for beginners but also a staple for seasoned drinkers.",
         },
         {
            reviewDate: new Date("2025-07-13T11:00:00Z"),
            purchasePrice: 25.5,
            stars: 4,
            review:
               "A very solid, consistent bourbon. It's sweet, easy-drinking, and never disappoints. Not the most complex, but it doesn't try to be. Perfect for a casual pour or in a cocktail. Love the iconic red wax.",
         },
         {
            reviewDate: new Date("2025-07-13T13:00:00Z"),
            purchasePrice: 23.99,
            stars: 4,
            review:
               "Good, but sometimes a bit too sweet for my preference. Still, you can't beat the smoothness and the price. A great entry point into bourbon, and it mixes well.",
         },
      ],
   },
   {
      name: "Wild Turkey 101",
      distillery: "Wild Turkey Distilling Co.",
      description:
         "From the website: Bold, authentic, and legendary. Aged longer than the law requires in American white oak barrels with the deepest char, Wild Turkey 101 has a high rye content and delivers a big, bold flavor. It’s the perfect bourbon for those who appreciate a full-bodied, complex spirit.",
      averagePurchasePrice: 26.99,
      thumbnailImg:
         "https://www.wildturkeybourbon.com/app/uploads/2022/07/Whiskey-Sour_Detail-.png",
      averageStars: 4.6,
      reviews: [
         {
            reviewDate: new Date("2025-07-13T09:30:00Z"),
            purchasePrice: 27.99,
            stars: 5,
            review:
               "The quintessential high-proof value bourbon. Full of caramel, vanilla, and plenty of spice. It stands up in cocktails beautifully but is surprisingly sippable neat. Always a fantastic pour for the price.",
         },
         {
            reviewDate: new Date("2025-07-13T12:15:00Z"),
            purchasePrice: 25.0,
            stars: 4,
            review:
               "Robust and flavorful. It's got that classic Wild Turkey funk in the best way. Great for an Old Fashioned. It's strong but not harsh, a testament to good distilling.",
         },
         {
            reviewDate: new Date("2025-07-13T15:00:00Z"),
            purchasePrice: 26.99,
            stars: 5,
            review:
               "My absolute favorite budget bourbon. It drinks well above its price point. Spicy, sweet, and a long, satisfying finish. Never without a bottle of 101 on my shelf.",
         },
      ],
   },
   {
      name: "Buffalo Trace",
      distillery: "Buffalo Trace Distillery",
      description:
         "From the website: A benchmark bourbon, distilled, aged, and bottled at the most awarded distillery in the world. This deep amber whiskey has a complex aroma of vanilla, mint, and molasses. Pleasantly sweet to the taste with notes of brown sugar and spice that give way to a long, smooth finish. Made from corn, rye, and malted barley.",
      averagePurchasePrice: 28.99,
      thumbnailImg:
         "https://www.buffalotracedistillery.com/our-brands/buffalo-trace/_jcr_content/root/container/container_477176612/image.coreimg.100.1200.png/1670448723195/buffalo-desktop-bottle.png",
      averageStars: 4.5,
      reviews: [
         {
            reviewDate: new Date("2025-07-13T10:15:00Z"),
            purchasePrice: 28.99,
            stars: 5,
            review:
               "For its price and availability (when you can find it!), this is hard to beat. Smooth, balanced, and great both neat or in cocktails. Vanilla and caramel notes are prominent, very easy-drinking.",
         },
         {
            reviewDate: new Date("2025-07-13T13:30:00Z"),
            purchasePrice: 30.0,
            stars: 4,
            review:
               "A reliable pour. It's got classic bourbon flavors, nothing too challenging, but consistently good. A bit of a hunt to find sometimes, but worth it for a solid everyday bourbon.",
         },
      ],
   },
];

export default function Landing() {
   const [currentBourbonIndex, setCurrentBourbonIndex] = useState(
      Math.floor(Math.random() * bourbons.length)
   );
   const [filteredBourbons, setFilteredBourbons] = useState<BourbonType[] | []>(
      bourbons
   );
   const [filter, setFilter] = useState<FilterType | null>(null);

   useEffect(() => {
      const bourbonIndexTimer = setInterval(() => {
         setCurrentBourbonIndex((prev) => {
            if (prev >= bourbons.length - 1) {
               return 0;
            }

            return prev + 1;
         });
      }, 3000);

      return () => clearInterval(bourbonIndexTimer);
   }, []);

   const updateFilter = (newFilter: Partial<FilterType>) => {
      setFilter(newFilter);

      setFilteredBourbons(() => {
         let updatedFilteredBourbons = [...bourbons];

         if (newFilter.searchValue && newFilter.searchValue.length) {
            updatedFilteredBourbons = updatedFilteredBourbons.filter(
               (bourbon) =>
                  bourbon.name.toLowerCase().includes(newFilter.searchValue) ||
                  bourbon.distillery
                     .toLowerCase()
                     .includes(newFilter.searchValue)
            );
         }

         if (newFilter.sort && newFilter.sort.field.length) {
            updatedFilteredBourbons.sort((a, b) => {
               if (newFilter.sort?.dir === "asc") {
                  return a[newFilter.sort.field] - b[newFilter.sort.field];
               } else {
                  return b[newFilter.sort.field] - a[newFilter.sort.field];
               }
            });
         }
      });
   };

   return (
      <>
         <Navbar />
         <Search updateFilter={updateFilter} filter={filter} />
         {(filter.searchValue && filter.searchValue.length) ||
         filter.sort.field ? (
            <SearchResults bourbons={filteredBourbons} />
         ) : (
            <BourbonCard key={""} bourbon={bourbons[currentBourbonIndex]} />
         )}
      </>
   );
}
