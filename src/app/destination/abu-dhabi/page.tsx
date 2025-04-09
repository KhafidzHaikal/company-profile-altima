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

export default function AbuDhabiPage() {
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
					<Link href={""}>
						<Button className=" rounded-md py-4 flex items-center gap-2 bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
							Konsultasi Sekarang
							<FaWhatsapp className="text-md" />
						</Button>
					</Link>
				</div>
			</section>
			<section className="mx-12 lg:mx-32 mt-12">
				<p className={`${lilyFont.className} text-lg md:text-2xl`}>
					Destinasi Wisata Abu Dhabi
				</p>
				<div className="hidden lg:block">
					<div className="md:flex justify-between gap-4 items-center">
						<div className="md:w-1/2">
							<p
								className={`${lilyFont.className} text-[#112A90] dark:text-white text-2xl font-bold`}>
								Masjid Agung Sheikh Zayed
							</p>
							<p className="text-md mt-8">
								Masjid terbesar di UEA dan ikon kota Abu Dhabi. Arsitekturnya
								megah dengan 82 kubah dan 1.000 pilar marmer, menjadi simbol
								keindahan Islam modern yang terbuka untuk wisatawan dari seluruh
								dunia.
							</p>
						</div>
						<Image
							src={"/images/abu-dhabi-poto.png"}
							alt={`Altima Portfolio`}
							width={300}
							height={100}
							className="md:w-1/3 rounded-lg object-cover"
						/>
					</div>
					<div className="md:flex justify-between gap-4 items-center">
						<Image
							src={"/images/Qasr-Al-Watan.png"}
							alt={`Altima Portfolio`}
							width={300}
							height={100}
							className="md:w-1/3 rounded-lg object-cover"
						/>
						<div className="md:w-1/2 text-right">
							<p
								className={`${lilyFont.className} text-[#112A90] dark:text-white text-2xl font-bold`}>
								Qasr Al Watan
							</p>
							<p className="text-md mt-8">
								Istana kenegaraan yang dibuka untuk publik. Pengunjung bisa
								menjelajahi aula megah, perpustakaan kerajaan, dan ruang
								pertemuan para pemimpin dunia.
							</p>
						</div>
					</div>
					<div className="md:flex justify-between gap-4 items-center">
						<div className="md:w-1/2">
							<p
								className={`${lilyFont.className} text-[#112A90] dark:text-white text-2xl font-bold`}>
								Louvre Abu Dhabi
							</p>
							<p className="text-md mt-8">
								Museum seni dan budaya kelas dunia hasil kerja sama dengan
								Prancis. Menampilkan karya dari berbagai peradaban, dari zaman
								kuno hingga modern, dalam bangunan ikonik berbentuk kubah
								bercahaya.
							</p>
						</div>
						<Image
							src={"/images/Louvre-Abu-Dhabi.png"}
							alt={`Altima Portfolio`}
							width={300}
							height={100}
							className="md:w-1/3 rounded-lg object-cover"
						/>
					</div>
					<div className="md:flex justify-between gap-4 items-center">
						<Image
							src={"/images/Desa-Warisan.png"}
							alt={`Altima Portfolio`}
							width={300}
							height={100}
							className="md:w-1/3 rounded-lg object-cover"
						/>
						<div className="md:w-1/2 text-right">
							<p
								className={`${lilyFont.className} text-[#112A90] dark:text-white text-2xl font-bold`}>
								Desa Warisan
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
								Tamasya Corniche
							</p>
							<p className="text-md mt-8">
								Tepi pantai indah yang membentang sepanjang 8 km, dilengkapi
								jalur pejalan kaki, taman, dan pantai publik. Tempat yang cocok
								untuk bersantai sambil menikmati panorama Teluk Arab.
							</p>
						</div>
						<Image
							src={"/images/TamasyaCorniche.png"}
							alt={`Altima Portfolio`}
							width={300}
							height={100}
							className="md:w-1/3 rounded-lg object-cover"
						/>
					</div>
					<div className="md:flex justify-between gap-4 items-center">
						<Image
							src={"/images/pulau-yas.png"}
							alt={`Altima Portfolio`}
							width={300}
							height={100}
							className="md:w-1/3 rounded-lg object-cover"
						/>
						<div className="md:w-1/2 text-right">
							<p
								className={`${lilyFont.className} text-[#112A90] dark:text-white text-2xl font-bold`}>
								Pulau Yas
							</p>
							<p className="text-md mt-8">
								Pulau hiburan keluarga yang terkenal dengan:
							</p>
							<ul className="list-disc list-inside dark:text-white text-black space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
								<li>Ferrari World (wahana bertema Ferrari)</li>
								<li>Yas Waterworld (taman air seru)</li>
								<li>
									Warner Bros World Abu Dhabi (taman hiburan indoor bertema
									film)
								</li>
							</ul>
						</div>
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
								Masjid terbesar di UEA dan ikon kota Abu Dhabi. Arsitekturnya
								megah dengan 82 kubah dan 1.000 pilar marmer, menjadi simbol
								keindahan Islam modern yang terbuka untuk wisatawan dari seluruh
								dunia.
							</p>
						</div>
						<Image
							src={"/images/abu-dhabi-poto.png"}
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
								Qasr Al Watan
							</p>
							<p className="text-md mt-2">
								Istana kenegaraan yang dibuka untuk publik. Pengunjung bisa
								menjelajahi aula megah, perpustakaan kerajaan, dan ruang
								pertemuan para pemimpin dunia.
							</p>
						</div>
						<Image
							src={"/images/Qasr-Al-Watan.png"}
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
								Museum seni dan budaya kelas dunia hasil kerja sama dengan
								Prancis. Menampilkan karya dari berbagai peradaban, dari zaman
								kuno hingga modern, dalam bangunan ikonik berbentuk kubah
								bercahaya.
							</p>
						</div>
						<Image
							src={"/images/Louvre-Abu-Dhabi.png"}
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
								Desa Warisan
							</p>
							<p className="text-md mt-2">
								Replika desa tradisional Emirat yang menampilkan kehidupan
								masyarakat Arab sebelum era modern. Terdapat kerajinan tangan,
								museum kecil, dan pemandangan ke laut.
							</p>
						</div>
						<Image
							src={"/images/Desa-Warisan.png"}
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
								Tamasya Corniche
							</p>
							<p className="text-md mt-2">
								Tepi pantai indah yang membentang sepanjang 8 km, dilengkapi
								jalur pejalan kaki, taman, dan pantai publik. Tempat yang cocok
								untuk bersantai sambil menikmati panorama Teluk Arab.
							</p>
						</div>
						<Image
							src={"/images/TamasyaCorniche.png"}
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
								Pulau Yas
							</p>
							<p className="text-md mt-2">
								Pulau hiburan keluarga yang terkenal dengan:
							</p>
							<ul className="list-disc list-inside dark:text-white text-black space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
								<li>Ferrari World (wahana bertema Ferrari)</li>
								<li>Yas Waterworld (taman air seru)</li>
								<li>
									Warner Bros World Abu Dhabi (taman hiburan indoor bertema
									film)
								</li>
							</ul>
						</div>
						<Image
							src={"/images/pulau-yas.png"}
							alt={`Altima Portfolio`}
							width={300}
							height={100}
							className="rounded-lg object-cover"
						/>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}
