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
					Paket Itinerary Wisata Bali – 5 Hari 4 Malam (Beach Tour)
				</p>

				{/* Hari 1 */}
				<p className="text-md font-bold text-[#112A90] mt-4">
					Hari 1 – Kedatangan & Uluwatu
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Kedatangan di Bandara Ngurah Rai</li>
					<li>Makan siang di Ayam Betutu Gilimanuk</li>
					<li>Check-in hotel</li>
					<li>Mengunjungi Pura Uluwatu dan menonton Tari Kecak</li>
					<li>Makan malam seafood di Jimbaran</li>
				</ul>

				{/* Hari 2 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 2 – Bedugul & Tanah Lot
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Sarapan di hotel</li>
					<li>Mengunjungi Pura Ulun Danu Beratan</li>
					<li>Foto di Handara Gate</li>
					<li>Makan siang di restoran lokal</li>
					<li>Wanagiri Hidden Hill</li>
					<li>Wisata ke Pura Tanah Lot</li>
					<li>Makan malam dan kembali ke hotel</li>
				</ul>

				{/* Hari 3 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 3 – East Bali Tour
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Sarapan di hotel</li>
					<li>Mengunjungi Lempuyang Temple (Gate of Heaven)</li>
					<li>Wisata ke Tirta Gangga Water Palace</li>
					<li>Makan siang di restoran lokal</li>
					<li>Bersantai di Virgin Beach</li>
					<li>Makan malam dan kembali ke hotel</li>
				</ul>

				{/* Hari 4 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 4 – Nusa Penida Tour
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Sarapan pagi</li>
					<li>Penyeberangan ke Nusa Penida</li>
					<li>Mengunjungi Kelingking Beach, Angel’s Billabong, Broken Beach</li>
					<li>Makan siang di Nusa Penida</li>
					<li>(Jika waktu memungkinkan) Bersantai di Crystal Bay</li>
					<li>Kembali ke Bali</li>
					<li>Makan malam dan kembali ke hotel</li>
				</ul>

				{/* Hari 5 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 5 – Belanja & Kepulangan
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Sarapan dan check-out hotel</li>
					<li>Berbelanja oleh-oleh di Krisna atau toko souvenir</li>
					<li>Pengantaran ke bandara</li>
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
