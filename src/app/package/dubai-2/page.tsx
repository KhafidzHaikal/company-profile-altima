import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Lily_Script_One } from "next/font/google";

import { GoDash } from "react-icons/go";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import DubaiThemeParkTabs from "./components/TabDetail";

const lilyFont = Lily_Script_One({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

export default function AbuDhabiPage() {
	return (
		<main className="mt-24">
			<Navbar />
			<section className="mx-12 lg:mx-32">
				<div className="lg:flex justify-between items-center gap-4">
					<div className="">
						<div className="text-[#112A90] dark:text-white flex items-center mb-4">
							<GoDash className="text-xl" />
							<p className="text-sm font-medium">Detail Paket</p>
						</div>
						<p className={`${lilyFont.className} text-2xl md:text-4xl`}>
							Taman Hiburan Dubai (4 Hari 3 Malam)
						</p>
						<p className="text-[#112A90] dark:text-white flex items-center mt-4 font-medium text-md">
							Harga Rp 23.000.000/ keluarga (2 dewasa + 1 anak)
						</p>
						<p className="text-[#4C5E70] mt-2 mb-4 lg:mb-8 text-sm">
							Perjalanan dengan menikmati kuliner khas kota Abu Dhabi Timur
							Tengah yang halal dan nikmat.
						</p>
						<Link href={""}>
							<Button className=" rounded-md py-4 flex items-center gap-2 bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
								Pesan Sekarang
								<FaWhatsapp className="text-md" />
							</Button>
						</Link>
					</div>
					<div className="w-full lg:w-1/3 mt-4 lg:mt-0">
						<Image
							src={"/images/hiburan.jpg"}
							width={0}
							height={0}
							sizes="100vh"
							alt="Altima"
							className=" h-full w-full rounded-md"
						/>
					</div>
				</div>
			</section>
			<section className="mx-12 lg:mx-32 mt-12">
				<DubaiThemeParkTabs />
			</section>
			<section className="mx-12 lg:mx-32 mt-12">
				<p className={`${lilyFont.className} text-lg md:text-xl`}>
					Layanan Anda Dapatkan
				</p>
				<div className="md:flex justify-between gap-4 items-center mt-4">
					<Image
						src={"/images/dubai-poto.png"}
						alt={`Altima Portfolio`}
						width={300}
						height={100}
						className="w-full rounded-lg object-cover"
					/>
					<Image
						src={"/images/abu-dhabi-poto.png"}
						alt={`Altima Portfolio`}
						width={300}
						height={100}
						className="w-full rounded-lg object-cover"
					/>
				</div>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
					<Image
						src={"/images/altima-foto-10.png"}
						alt={`Altima Portfolio`}
						width={300}
						height={100}
						className="w-full rounded-lg object-cover"
					/>
					<Image
						src={"/images/altima-foto-11.png"}
						alt={`Altima Portfolio`}
						width={300}
						height={100}
						className="w-full rounded-lg object-cover"
					/>
					<Image
						src={"/images/altima-foto-12.png"}
						alt={`Altima Portfolio`}
						width={300}
						height={100}
						className="w-full rounded-lg object-cover"
					/>
					<Image
						src={"/images/altima-foto-8.png"}
						alt={`Altima Portfolio`}
						width={300}
						height={100}
						className="w-full rounded-lg object-cover"
					/>
				</div>
			</section>
			<section className="py-12 bg-[#112A90] mt-8">
				<div className="text-center py-4">
					<div className="text-white flex justify-center items-center mb-4">
						<GoDash className="text-xl" />
						<p className="text-sm font-medium">Konsultasi atau Pemesanan</p>
					</div>
					<p
						className={`${lilyFont.className} text-white text-2xl md:text-4xl`}>
						Tertarik untuk Memulai Perjalanan Bersama Kami?
					</p>
					<p className="text-white my-4 text-sm">
						Hubungi Kami untuk Konsultasi dan Pemesanan, Kami Siap Melayani Anda
						dengan Sepenuh Hati.
					</p>
				</div>
				<Link href={""}>
					<Button className="rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
						Hubungi Kami
						<FaWhatsapp className="text-md" />
					</Button>
				</Link>
			</section>
			<Footer />
		</main>
	);
}
