"use client";

import TermCondition from "@/components/TermCondition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, LayoutGrid } from "lucide-react";
import EstimatedIndonesiaTable from "./EstimateTable";
import { Lily_Script_One } from "next/font/google";

const lilyFont = Lily_Script_One({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

export default function AbuDhabiTabsFull() {
	return (
		<Tabs defaultValue="itinerary" className="w-full mt-8">
			<TabsList className="flex w-full justify-start gap-8 border-b-2 bg-transparent pb-1">
				<TabsTrigger
					value="itinerary"
					className="flex items-center gap-2 text-sm px-1 py-2 
            bg-transparent data-[state=active]:text-black
            data-[state=active]:underline data-[state=active]:underline-solid data-[state=active]:underline-[#112A90]
            data-[state=active]:w-full">
					<LayoutGrid size={16} />
					Detail
				</TabsTrigger>

				<TabsTrigger
					value="terms"
					className="flex items-center gap-2 text-sm px-1 py-2 
            bg-transparent data-[state=active]:text-black
            data-[state=active]:underline data-[state=active]:underline-solid data-[state=active]:underline-[#112A90]
            data-[state=active]:w-full">
					<Info size={16} />
					Term and Condition
				</TabsTrigger>
			</TabsList>

			{/* Itinerary Tab */}
			<TabsContent value="itinerary">
				<p className={`${lilyFont.className} text-2xl font-bold`}>
					Paket Itinerary Wisata Indonesia (10 Hari)
				</p>

				{/* Hari 1 - Kedatangan di Bali */}
				<p className="text-md font-bold text-[#112A90] mt-4">Hari 1 – Bali</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Kedatangan di Bandara Ngurah Rai</li>
					<li>Penjemputan oleh staf travel</li>
					<li>Mengunjungi Pantai Melasti dan menonton Tari Kecak</li>
					<li>Makan malam seafood di Jimbaran</li>
					<li>Check-in hotel</li>
				</ul>

				{/* Hari 2 */}
				<p className="text-md font-bold text-[#112A90] mt-6">Hari 2 – Bali</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Sarapan di hotel</li>
					<li>Mengunjungi Desa Penglipuran</li>
					<li>Makan siang di Kintamani</li>
					<li>Berbelanja di Pasar Seni Sukawati</li>
					<li>Makan malam Ayam Taliwang</li>
					<li>Kembali ke hotel</li>
				</ul>

				{/* Hari 3 */}
				<p className="text-md font-bold text-[#112A90] mt-6">Hari 3 – Bali</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Sarapan & check-out hotel</li>
					<li>Water sport di Tanjung Benoa</li>
					<li>Berbelanja oleh-oleh di Krisna</li>
					<li>Pengantaran ke bandara, terbang ke Yogyakarta</li>
				</ul>

				{/* Hari 4 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 4 – Yogyakarta
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Kedatangan di Yogyakarta & perjalanan ke Magelang</li>
					<li>Sarapan di Kampung Ulu Resto</li>
					<li>Rafting Sungai Elo</li>
					<li>Makan siang lokal</li>
					<li>Wisata ke Candi Borobudur</li>
					<li>Makan malam Bakmi Mbah Gito</li>
					<li>Check-in hotel</li>
				</ul>

				{/* Hari 5 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 5 – Yogyakarta
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Sarapan & check-out hotel</li>
					<li>Berbelanja oleh-oleh bakpia</li>
					<li>Mengunjungi Museum Ullen Sentalu</li>
					<li>Obelix Village & makan siang</li>
					<li>Jalan-jalan di Malioboro</li>
					<li>Makan malam & kembali ke hotel</li>
				</ul>

				{/* Hari 6 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 6 – Bandung
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Terbang pagi ke Bandung</li>
					<li>Mengunjungi Tebing Keraton & Curug Omas</li>
					<li>Makan siang di restoran lokal</li>
					<li>Floating Market Lembang</li>
					<li>Makan malam & check-in hotel</li>
				</ul>

				{/* Hari 7 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 7 – Bandung
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Sarapan & check-out hotel</li>
					<li>Berbelanja di Rumah Mode & Pasar Baru</li>
					<li>Makan siang & transfer ke bandara/kereta</li>
					<li>Perjalanan ke Malang</li>
				</ul>

				{/* Hari 8 */}
				<p className="text-md font-bold text-[#112A90] mt-6">Hari 8 – Malang</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Kebun Apel & Taman Selecta</li>
					<li>Makan siang & kunjungan ke Museum Angkut</li>
					<li>Makan malam di Alun-Alun Batu</li>
					<li>Check-in hotel</li>
				</ul>

				{/* Hari 9 */}
				<p className="text-md font-bold text-[#112A90] mt-6">Hari 9 – Malang</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Sarapan & check-out hotel</li>
					<li>Mengunjungi Candi Singosari</li>
					<li>Berbelanja oleh-oleh di Pasar Besar Malang</li>
					<li>Makan siang & transfer ke bandara</li>
				</ul>

				{/* Hari 10 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 10 – Kepulangan
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Penerbangan dari Malang ke kota asal (Bandung/Jakarta)</li>
					<li>Tour selesai</li>
				</ul>

				<EstimatedIndonesiaTable />
			</TabsContent>

			{/* Terms & Conditions Tab */}
			<TabsContent value="terms">
				<TermCondition />
			</TabsContent>
		</Tabs>
	);
}
