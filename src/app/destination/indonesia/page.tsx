import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Lily_Script_One } from "next/font/google";
import Link from "next/link";
import { GoDash } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const lilyFont = Lily_Script_One({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

export default function DubaiPage() {
	return (
		<main className="mt-24">
			<Navbar />
			<section className="mx-12 lg:mx-32">
				<div className="">
					<div className="text-[#112A90] dark:text-white flex items-center mb-4">
						<GoDash className="text-xl" />
						<p className="text-sm font-medium">Detail Destinasi</p>
					</div>
					<p className={`${lilyFont.className} text-2xl md:text-4xl`}>
						Indonesia
					</p>
					<p className="text-[#4C5E70] mt-2 mb-4 lg:mb-8 text-sm">
						Jelajahi keindahan Indonesia melalui destinasi unggulan seperti
						Bali, Yogyakarta, Bandung, dan Malang. Paket wisata ini menawarkan
						perpaduan budaya, alam, dan kuliner khas Nusantara yang tak
						terlupakan. Nikmati pantai eksotis di Bali, situs sejarah di
						Yogyakarta, udara sejuk pegunungan Bandung, serta pesona alam dan
						petualangan di Malang. Cocok untuk wisata keluarga, edukasi, atau
						liburan santai, tur ini dirancang khusus agar Anda bisa merasakan
						keanekaragaman budaya Indonesia dalam satu perjalanan.
					</p>
					<Link href={"https://wa.me/6281388266868"}>
						<Button className=" rounded-md py-4 flex items-center gap-2 bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
							Konsultasi Sekarang
							<FaWhatsapp className="text-md" />
						</Button>
					</Link>
				</div>
			</section>
			<section className="mx-12 lg:mx-32 mt-12">
				<p className={`${lilyFont.className} text-lg md:text-2xl`}>
					Destinasi Wisata Indonesia
				</p>
				<div className="hidden lg:block">
					{/* Bali */}
					<div className="md:flex justify-between gap-4 items-center">
						<div className="md:w-1/2">
							<p
								className={`${lilyFont.className} text-[#112A90] dark:text-white text-2xl font-bold`}>
								Bali - Pantai & Budaya
							</p>
							<p className="text-md mt-8">
								Nikmati keindahan Pantai Kuta, keagungan Pura Luhur Uluwatu, dan
								suasana artistik di Ubud. Bali menawarkan kombinasi relaksasi,
								kuliner, dan tradisi budaya yang tak terlupakan.
							</p>
						</div>
						<Image
							src={"/images/bali.jpg"}
							alt="Pantai Bali"
							width={300}
							height={100}
							className="md:w-1/3 rounded-lg object-cover"
						/>
					</div>

					{/* Bandung */}
					<div className="md:flex justify-between gap-4 items-center">
						<Image
							src={"/images/bandung-dago.jpg"}
							alt="Bandung View"
							width={300}
							height={100}
							className="md:w-1/3 rounded-lg object-cover"
						/>
						<div className="md:w-1/2 text-right">
							<p
								className={`${lilyFont.className} text-[#112A90] dark:text-white text-2xl font-bold`}>
								Bandung - Alam & Belanja
							</p>
							<p className="text-md mt-8">
								Jelajahi keindahan alam di Lembang, belanja di Factory Outlet
								Dago, dan nikmati kuliner khas Sunda. Bandung terkenal sebagai
								kota kreatif dan penuh pesona pegunungan.
							</p>
						</div>
					</div>

					{/* Yogyakarta */}
					<div className="md:flex justify-between gap-4 items-center">
						<div className="md:w-1/2">
							<p
								className={`${lilyFont.className} text-[#112A90] dark:text-white text-2xl font-bold`}>
								Yogyakarta - Budaya & Sejarah
							</p>
							<p className="text-md mt-8">
								Kunjungi Candi Borobudur, Candi Prambanan, dan Kraton
								Yogyakarta. Kota ini menawarkan warisan budaya Jawa yang kuat
								dengan suasana hangat dan edukatif.
							</p>
						</div>
						<Image
							src={"/images/yogyakarta-candi.png"}
							alt="Candi Borobudur"
							width={300}
							height={100}
							className="md:w-1/3 rounded-lg object-cover"
						/>
					</div>

					{/* Malang */}
					<div className="md:flex justify-between gap-4 items-center">
						<Image
							src={"/images/malang-bromo.png"}
							alt="Gunung Bromo"
							width={300}
							height={100}
							className="md:w-1/3 rounded-lg object-cover"
						/>
						<div className="md:w-1/2 text-right">
							<p
								className={`${lilyFont.className} text-[#112A90] dark:text-white text-2xl font-bold`}>
								Malang - Pegunungan & Eduwisata
							</p>
							<p className="text-md mt-8">
								Rasakan udara sejuk Kota Batu, jelajahi Jatim Park dan Museum
								Angkut, hingga petualangan ke Gunung Bromo. Malang cocok untuk
								wisata keluarga dan edukasi.
							</p>
						</div>
					</div>
				</div>

				{/* Mobile View */}
				<div className="block lg:hidden mt-12">
					{[
						{
							title: "Bali - Pantai & Budaya",
							desc: "Nikmati keindahan Pantai Kuta, keagungan Pura Luhur Uluwatu, dan suasana artistik di Ubud. Bali menawarkan kombinasi relaksasi, kuliner, dan tradisi budaya yang tak terlupakan.",
							image: "/images/bali.jpg",
						},
						{
							title: "Bandung - Alam & Belanja",
							desc: "Jelajahi keindahan alam di Lembang, belanja di Factory Outlet Dago, dan nikmati kuliner khas Sunda. Bandung terkenal sebagai kota kreatif dan penuh pesona pegunungan.",
							image: "/images/bandung-dago.jpg",
						},
						{
							title: "Yogyakarta - Budaya & Sejarah",
							desc: "Kunjungi Candi Borobudur, Candi Prambanan, dan Kraton Yogyakarta. Kota ini menawarkan warisan budaya Jawa yang kuat dengan suasana hangat dan edukatif.",
							image: "/images/yogyakarta-candi.png",
						},
						{
							title: "Malang - Pegunungan & Eduwisata",
							desc: "Rasakan udara sejuk Kota Batu, jelajahi Jatim Park dan Museum Angkut, hingga petualangan ke Gunung Bromo. Malang cocok untuk wisata keluarga dan edukasi.",
							image: "/images/malang-bromo.png",
						},
					].map((item, index) => (
						<div className="mb-12" key={index}>
							<div>
								<p
									className={`${lilyFont.className} text-[#112A90] dark:text-white text-2xl font-bold`}>
									{item.title}
								</p>
								<p className="text-md mt-2">{item.desc}</p>
							</div>
							<Image
								src={item.image}
								alt={item.title}
								width={300}
								height={100}
								className="rounded-lg object-cover"
							/>
						</div>
					))}
				</div>
			</section>

			{/* <section className="mx-12 lg:mx-32 mt-12">
				<p className={`${lilyFont.className} text-lg md:text-2xl`}>
					Destinasi Wisata Abu Dhabi
				</p>
				<div className="hidden lg:block">
					<div className="md:flex justify-between gap-4 items-center">
						<div className="md:w-1/2">
							<p
								className={`${lilyFont.className} text-[#112A90] dark:text-white text-2xl font-bold`}>
								Dubai Fountain & Burj Lake
							</p>
							<p className="text-md mt-8">
								Dubai Fountain adalah air mancur menari terbesar di dunia,
								dengan pertunjukan air yang spektakuler disertai dengan musik
								dan tata lampu yang memukau. Burj Lake adalah danau buatan
								seluas 30 hektar yang mengelilingi air mancur.
							</p>
						</div>
						<Image
							src={"/images/altima-foto-9.png"}
							alt={`Altima Portfolio`}
							width={300}
							height={100}
							className="md:w-1/3 rounded-lg object-cover"
						/>
					</div>
					<div className="md:flex justify-between gap-4 items-center">
						<Image
							src={"/images/altima-foto-10.png"}
							alt={`Altima Portfolio`}
							width={300}
							height={100}
							className="md:w-1/3 rounded-lg object-cover"
						/>
						<div className="md:w-1/2 text-right">
							<p
								className={`${lilyFont.className} text-[#112A90] dark:text-white text-2xl font-bold`}>
								Museum of The Future
							</p>
							<p className="text-md mt-8">
								Museum Masa Depan merupakan salah satu ikon terbaru Dubai yang
								memamerkan inovasi teknologi, kecerdasan buatan, dan masa depan
								umat manusia. Terletak di Sheikh Zayed Road, museum ini memiliki
								desain arsitektur unik berbentuk oval dengan lubang di
								tengahnya, yang dipenuhi kaligrafi Arab yang menggambarkan
								kutipan inspiratif dari Sheikh Mohammed bin Rashid Al Maktoum.
							</p>
						</div>
					</div>
					<div className="md:flex justify-between gap-4 items-center">
						<div className="md:w-1/2">
							<p
								className={`${lilyFont.className} text-[#112A90] dark:text-white text-2xl font-bold`}>
								Dubai Desert Safari
							</p>
							<p className="text-md mt-8">
								Safari Gurun Dubai merupakan pengalaman wisata petualangan di
								padang pasir Dubai yang menawarkan berbagai aktivitas seru,
								mulai dari menjelajahi gurun pasir hingga pertunjukan budaya
								Arab. Ini merupakan salah satu pengalaman paling populer bagi
								wisatawan yang ingin merasakan keindahan dan keganasan padang
								pasir Arab.
							</p>
						</div>
						<Image
							src={"/images/altima-foto-11.png"}
							alt={`Altima Portfolio`}
							width={300}
							height={100}
							className="md:w-1/3 rounded-lg object-cover"
						/>
					</div>
					<div className="md:flex justify-between gap-4 items-center">
						<Image
							src={"/images/altima-foto-12.png"}
							alt={`Altima Portfolio`}
							width={300}
							height={100}
							className="md:w-1/3 rounded-lg object-cover"
						/>
						<div className="md:w-1/2 text-right">
							<p
								className={`${lilyFont.className} text-[#112A90] dark:text-white text-2xl font-bold`}>
								Al Fahidi Histrical District
							</p>
							<p className="text-md mt-8">
								Replika desa tradisional Emirat yang menampilkan kehidupan
								masyarakat Arab sebelum era modern. Terdapat kerajinan tangan,
								museum kecil, dan pemandangan ke laut.
							</p>
						</div>
					</div>
					<div className="md:flex justify-between gap-4 items-center">
						<div className="md:w-1/2">
							<p
								className={`${lilyFont.className} text-[#112A90] dark:text-white text-2xl font-bold`}>
								Dubai Marina
							</p>
							<p className="text-md mt-8">
								Dubai Marina adalah kawasan tepi laut yang modern dan mewah di
								Dubai, terkenal dengan pemandangan gedung pencakar langit,
								restoran mewah, kapal pesiar, dan kehidupan malam yang elegan.
								Terletak di sepanjang kanal buatan manusia sepanjang 3 km, Dubai
								Marina adalah salah satu tujuan wisata dan hunian paling
								eksklusif di kota ini.
							</p>
						</div>
						<Image
							src={"/images/altima-foto-8.png"}
							alt={`Altima Portfolio`}
							width={300}
							height={100}
							className="md:w-1/3 rounded-lg object-cover"
						/>
					</div>
				</div>
				<div className="block lg:hidden mt-12">
					<div className="mb-12">
						<div className="">
							<p
								className={`${lilyFont.className} text-[#112A90] dark:text-white text-2xl font-bold`}>
								Masjid Agung Sheikh Zayed
							</p>
							<p className="text-md mt-2">
								Dubai Fountain adalah air mancur menari terbesar di dunia,
								dengan pertunjukan air yang spektakuler disertai dengan musik
								dan tata lampu yang memukau. Burj Lake adalah danau buatan
								seluas 30 hektar yang mengelilingi air mancur.
							</p>
						</div>
						<Image
							src={"/images/altima-foto-9.png"}
							alt={`Altima Portfolio`}
							width={300}
							height={100}
							className="rounded-lg object-cover"
						/>
					</div>
					<div className="mb-12">
						<div className="">
							<p
								className={`${lilyFont.className} text-[#112A90] dark:text-white text-2xl font-bold`}>
								Museum of The Future
							</p>
							<p className="text-md mt-2">
								Museum Masa Depan merupakan salah satu ikon terbaru Dubai yang
								memamerkan inovasi teknologi, kecerdasan buatan, dan masa depan
								umat manusia. Terletak di Sheikh Zayed Road, museum ini memiliki
								desain arsitektur unik berbentuk oval dengan lubang di
								tengahnya, yang dipenuhi kaligrafi Arab yang menggambarkan
								kutipan inspiratif dari Sheikh Mohammed bin Rashid Al Maktoum.
							</p>
						</div>
						<Image
							src={"/images/altima-foto-10.png"}
							alt={`Altima Portfolio`}
							width={300}
							height={100}
							className="rounded-lg object-cover"
						/>
					</div>
					<div className="mb-12">
						<div className="">
							<p
								className={`${lilyFont.className} text-[#112A90] dark:text-white text-2xl font-bold`}>
								Louvre Abu Dhabi
							</p>
							<p className="text-md mt-2">
								Safari Gurun Dubai merupakan pengalaman wisata petualangan di
								padang pasir Dubai yang menawarkan berbagai aktivitas seru,
								mulai dari menjelajahi gurun pasir hingga pertunjukan budaya
								Arab. Ini merupakan salah satu pengalaman paling populer bagi
								wisatawan yang ingin merasakan keindahan dan keganasan padang
								pasir Arab.
							</p>
						</div>
						<Image
							src={"/images/altima-foto-11.png"}
							alt={`Altima Portfolio`}
							width={300}
							height={100}
							className="rounded-lg object-cover"
						/>
					</div>
					<div className="mb-12">
						<div className="">
							<p
								className={`${lilyFont.className} text-[#112A90] dark:text-white text-2xl font-bold`}>
								Al Fahidi Histrical District
							</p>
							<p className="text-md mt-2">
								Replika desa tradisional Emirat yang menampilkan kehidupan
								masyarakat Arab sebelum era modern. Terdapat kerajinan tangan,
								museum kecil, dan pemandangan ke laut.
							</p>
						</div>
						<Image
							src={"/images/altima-foto-12.png"}
							alt={`Altima Portfolio`}
							width={300}
							height={100}
							className="rounded-lg object-cover"
						/>
					</div>
					<div className="mb-12">
						<div className="">
							<p
								className={`${lilyFont.className} text-[#112A90] dark:text-white text-2xl font-bold`}>
								Dubai Marina
							</p>
							<p className="text-md mt-2">
								Dubai Marina adalah kawasan tepi laut yang modern dan mewah di
								Dubai, terkenal dengan pemandangan gedung pencakar langit,
								restoran mewah, kapal pesiar, dan kehidupan malam yang elegan.
								Terletak di sepanjang kanal buatan manusia sepanjang 3 km, Dubai
								Marina adalah salah satu tujuan wisata dan hunian paling
								eksklusif di kota ini.
							</p>
						</div>
						<Image
							src={"/images/altima-foto-8.png"}
							alt={`Altima Portfolio`}
							width={300}
							height={100}
							className="rounded-lg object-cover"
						/>
					</div>
				</div>
			</section> */}
			<Footer />
		</main>
	);
}
