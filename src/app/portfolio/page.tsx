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
						Abu Dhabi
					</p>
					<p className="text-[#4C5E70] mt-2 mb-4 lg:mb-8 text-sm">
						Abu Dhabi adalah ibu kota Uni Emirat Arab (UEA) dan merupakan kota
						terbesar kedua setelah Dubai. Terletak di sebuah pulau di Teluk
						Persia, kota ini dikenal sebagai pusat pemerintahan, budaya, dan
						ekonomi negara. Abu Dhabi menawarkan perpaduan menarik antara
						arsitektur modern, kekayaan budaya Islam, dan keindahan alam gurun
						serta pesisir.
					</p>
				</div>
				<PortfolioCard />
			</section>
			<Footer />
		</main>
	);
}
