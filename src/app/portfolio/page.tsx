import PortfolioCard from "@/components/card/PortfolioCard";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import { Lily_Script_One } from "next/font/google";
import { GoDash } from "react-icons/go";

const lilyFont = Lily_Script_One({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

export default function PortfolioPage() {
	return (
		<main className="mt-12 lg:mt-0">
			<Navbar />
			<section className="py-12 mx-12 lg:mx-32 lg:mt-12">
				<div className="">
					<div className="text-[#112A90] dark:text-white flex items-center mb-4">
						<GoDash className="text-xl" />
						<p className="text-sm font-medium">Detail Destinasi</p>
					</div>
					<p className={`${lilyFont.className} text-2xl md:text-4xl`}>
						Indonesia
					</p>
					<p className="text-[#4C5E70] mt-2 mb-4 lg:mb-8 text-sm">
						Indonesia adalah negara kepulauan yang kaya akan budaya, sejarah,
						dan keindahan alam. Dari pantai tropis Bali, gunung-gunung berapi
						yang memukau di Yogyakarta, hingga hutan tropis di Sumatra,
						Indonesia menawarkan berbagai destinasi wisata yang mempesona.
						Negara ini juga terkenal dengan keramahannya, kuliner yang menggugah
						selera, dan warisan budaya yang sangat kaya.
					</p>
				</div>
				<PortfolioCard />
			</section>
			<Footer />
		</main>
	);
}
