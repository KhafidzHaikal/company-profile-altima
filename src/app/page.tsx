import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import { Lily_Script_One } from "next/font/google";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { GoDash } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { IoArrowRedoOutline } from "react-icons/io5";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

const lilyFont = Lily_Script_One({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

export default function Home() {
	return (
		<main className="mt-12 lg:mt-0">
			<Navbar />
			<section className="h-screen flex items-center mt-2 sm:mt-0 mx-12 lg:mx-32">
				<div className="md:flex justify-between items-center gap-4">
					<div className="">
						<div className="text-[#112A90] dark:text-white flex items-center mb-4">
							<BiSolidPlaneAlt className="text-xl" />
							<GoDash className="text-xl" />
							<p className="text-sm font-medium">Yuk, Mulai Petualangan!</p>
						</div>
						<p className={`${lilyFont.className} text-2xl md:text-4xl`}>
							Liburan Tanpa Ribet Kenangan Sepanjang Hidup
						</p>
						<p className="text-[#4C5E70] my-4 text-sm">
							Nikmati pengalaman liburan ke Abu Dhabi atau Dubai tanpa repot!
							Kami siap merancang perjalanan impian Anda dengan layanan terbaik
							dan destinasi eksklusif.
						</p>
						<Link href={""}>
							<Button className=" rounded-md py-4 flex items-center gap-2 mx-auto sm:mx-0 bg-transparent text-[#112A90] dark:text-white dark:hover:text-[#112A90] dark:border-white dark:hover:bg-white border border-[#112A90] hover:bg-[#112A90] hover:text-white cursor-pointer w-full md:w-auto">
								Hubungi Kami
								<FaWhatsapp className="text-md" />
							</Button>
						</Link>
					</div>
					<div className="md:w-1/2 mt-4 md:mt-0">
						<Image
							src="/images/jumbotron-poto.png"
							alt="Altima Logo"
							width={0}
							height={0}
							className="h-full w-full"
							sizes="100vh"
							priority
						/>
					</div>
				</div>
			</section>
			<section
				className="pt-8 pb-20"
				style={{
					backgroundImage: "url(/images/background-homepage.png)",
					width: "100%",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				<div className="text-center py-4">
					<div className="text-white flex justify-center items-center mb-4">
						<GoDash className="text-xl" />
						<p className="text-sm font-medium">
							Layanan Terbaik & Destinasi Ekslusif
						</p>
					</div>
					<p
						className={`${lilyFont.className} text-white text-2xl md:text-4xl`}>
						Rekomendasi Paket untuk Anda
					</p>
					<p className="text-white my-4 text-sm">
						Kami memberikan layanan dengan memberikan pilihan destinasi tempat
						dan harga terbaik.
					</p>
				</div>
			</section>
			<section className="mx-12 lg:mx-32">
				<Carousel className="-mt-12 overflow-hidden p-2">
					<CarouselContent>
						<CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 p-0 ml-4">
							<div className="relative h-[400px] rounded-[30px] overflow-hidden shadow-md border-4 border-white">
								<Image
									src="/images/altima-foto-1.png"
									alt="Mosque"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-black/30 flex items-center justify-center">
									<h3 className={`${lilyFont.className} text-white text-3xl`}>
										Keluarga
									</h3>
								</div>
							</div>
						</CarouselItem>
						<CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 p-0 ml-4">
							<div className="relative h-[400px] rounded-[30px] overflow-hidden shadow-md border-4 border-white">
								<Image
									src="/images/altima-foto-1.png"
									alt="Mosque"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-black/30 flex items-center justify-center">
									<h3 className={`${lilyFont.className} text-white text-3xl`}>
										Keluarga
									</h3>
								</div>
							</div>
						</CarouselItem>
						<CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 p-0 ml-4">
							<div className="relative h-[400px] rounded-[30px] overflow-hidden shadow-md border-4 border-white">
								<Image
									src="/images/altima-foto-1.png"
									alt="Mosque"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-black/30 flex items-center justify-center">
									<h3 className={`${lilyFont.className} text-white text-3xl`}>
										Keluarga
									</h3>
								</div>
							</div>
						</CarouselItem>
						<CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 p-0 ml-4">
							<div className="relative h-[400px] rounded-[30px] overflow-hidden shadow-md border-4 border-white">
								<Image
									src="/images/altima-foto-1.png"
									alt="Mosque"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-black/30 flex items-center justify-center">
									<h3 className={`${lilyFont.className} text-white text-3xl`}>
										Keluarga
									</h3>
								</div>
							</div>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
			</section>
			<section className="mx-12 lg:mx-32 mt-12">
				<div className="md:flex justify-between gap-4">
					<div className="mt-12">
						<div className="text-[#112A90] flex items-center mb-4">
							<GoDash className="text-xl" />
							<p className="text-sm font-medium">Destinasi Wisata</p>
						</div>
						<p className={`${lilyFont.className} text-2xl md:text-4xl`}>
							Destinasi yang Kami Sediakan
						</p>
						<p className="text-[#4C5E70] my-4 text-sm">
							Ukir pengalaman dengan perjalanan di negara Abu Dhabi atau Dubai.
						</p>
					</div>
					<div className="py-12 md:flex justify-center gap-4 items-center mx-auto">
						{/* Abu Dhabi */}
						<div className="relative inline-block overflow-hidden rounded-xl group">
							<Image
								src="/images/abu-dhabi-poto.png"
								width={0}
								height={0}
								sizes="100vh"
								alt="Abu Dhabi"
								className="rounded-xl object-fit hover:scale-110 duration-500 transition-transform w-[600px] h-[200px] sm:h-[400px]"
							/>
							<div className="absolute inset-0 flex items-center justify-center">
								<span
									className={`${lilyFont.className} text-white px-4 py-2 rounded-md flex items-center gap-2 font-semibold text-2xl lg:text-4xl transition-colors duration-300`}>
									Abu Dhabi <IoArrowRedoOutline size={16} />
								</span>
							</div>
						</div>

						{/* Dubai */}
						<div className="relative inline-block overflow-hidden rounded-xl group">
							<Image
								src="/images/dubai-poto.png"
								width={0}
								height={0}
								sizes="100vh"
								alt="Dubai"
								className="rounded-xl object-cover hover:scale-110 duration-500 transition-transform w-[600px] h-[200px] sm:h-[400px]"
							/>
							<div className="absolute inset-0 flex items-center justify-center">
								<span
									className={`${lilyFont.className} text-white px-4 py-2 rounded-md flex items-center gap-2 font-semibold text-2xl lg:text-4xl transition-colors duration-300`}>
									Dubai <IoArrowRedoOutline size={16} />
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="mx-12 lg:mx-32 mt-12">
				<div className="mt-12 text-right">
					<div className="text-[#112A90] dark:text-white flex items-center mb-4 justify-end">
						<p className="text-sm font-medium">Portofolio</p>
						<GoDash className="text-xl" />
					</div>
					<p className={`${lilyFont.className} text-2xl md:text-4xl`}>
						Perjalanan yang Telah Kami Ukir Bersama
					</p>
					<p className="text-[#4C5E70] my-4 text-sm">
						Kami telah memiliki banyak pengalaman bersama dengan pelanggan
						lainnya dalam perjalanan yang luar biasa di Abu Dhabi atau Dubai.
					</p>
				</div>
				<div className="md:flex justify-between gap-4 items-center mt-4">
					<Image
						src={"/images/altima-foto-1.png"}
						alt={`Altima Portfolio`}
						width={300}
						height={100}
						className="w-full rounded-lg object-cover"
					/>
					<Image
						src={"/images/altima-poto-2.png"}
						alt={`Altima Portfolio`}
						width={300}
						height={100}
						className="w-full rounded-lg object-cover"
					/>
				</div>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
					<Image
						src={"/images/altima-poto-3.png"}
						alt={`Altima Portfolio`}
						width={300}
						height={100}
						className="w-full rounded-lg object-cover"
					/>
					<Image
						src={"/images/altima-poto-4.png"}
						alt={`Altima Portfolio`}
						width={300}
						height={100}
						className="w-full rounded-lg object-cover"
					/>
					<Image
						src={"/images/altima-poto-5.png"}
						alt={`Altima Portfolio`}
						width={300}
						height={100}
						className="w-full rounded-lg object-cover"
					/>
					<Image
						src={"/images/altima-poto-6.png"}
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
					<Button className=" rounded-md py-4 flex items-center gap-2 mx-auto bg-transparent bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
						Hubungi Kami
						<FaWhatsapp className="text-md" />
					</Button>
				</Link>
			</section>
			<Footer />
		</main>
	);
}
