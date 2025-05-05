import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import { GoDash } from "react-icons/go";
import { Lily_Script_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const lilyFont = Lily_Script_One({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

export default function DestinationPage() {
	return (
		<main className="mt-24">
			<Navbar />
			<section className="mx-12 lg:mx-32">
				<div className="">
					<div className="text-[#112A90] dark:text-white flex items-center mb-4">
						<GoDash className="text-xl" />
						<p className="text-sm font-medium">Destinasi Wisata</p>
					</div>
					<p className={`${lilyFont.className} text-2xl md:text-4xl`}>
						Destinasi Wisata Menanti untuk Anda Kunjungi
					</p>
					<p className="text-[#4C5E70] mt-2 mb-4 lg:mb-8 text-sm">
						Kami menyediakan destinasi wisata ke kota besar di Indonesia untuk anda
						yang ingin merasakan pengalaman yang luar biasa diberbagai kota besar Indonesia.
					</p>
				</div>
			</section>
			<section className="mx-12 lg:mx-32">
				<div className="py-12 md:flex justify-center gap-4 items-center mx-auto">
					{/* Abu Dhabi */}
					<div className="relative inline-block overflow-hidden rounded-xl group">
						<Image
							src="/images/bali.jpg"
							width={0}
							height={0}
							sizes="100vh"
							alt="Bali"
							className="rounded-xl object-fit hover:scale-110 duration-500 transition-transform w-[600px] h-[200px] sm:h-[400px]"
						/>
						<div className="absolute inset-0 flex items-center justify-center">
							<Link href={"/destination/indonesia"}>
								<span
									className={`${lilyFont.className} cursor-pointer text-white px-4 py-2 rounded-md flex items-center gap-2 font-semibold text-2xl lg:text-4xl transition-colors duration-300`}>
									Indonesia
								</span>
							</Link>
						</div>
					</div>

					{/* Dubai */}
					{/* <div className="relative inline-block overflow-hidden rounded-xl group">
						<Image
							src="/images/dubai-poto.png"
							width={0}
							height={0}
							sizes="100vh"
							alt="Dubai"
							className="rounded-xl object-cover hover:scale-110 duration-500 transition-transform w-[600px] h-[200px] sm:h-[400px]"
						/>
						<div className="absolute inset-0 flex items-center justify-center">
							<Link href={"/destination/dubai"}>
								<span
									className={`${lilyFont.className} cursor-pointer text-white px-4 py-2 rounded-md flex items-center gap-2 font-semibold text-2xl lg:text-4xl transition-colors duration-300`}>
									Dubai
								</span>
							</Link>
						</div>
					</div> */}
				</div>
			</section>
			<Footer />
		</main>
	);
}
