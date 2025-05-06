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
					Paket Itinerary Wisata Bali – 6 Hari 5 Malam (Beach Tour)
				</p>

				{/* Hari 1 */}
				<p className="text-md font-bold text-[#112A90] mt-4">
					Hari 1 – Kedatangan & Garuda Wisnu Kencana
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Kedatangan di Bandara Ngurah Rai</li>
					<li>Transfer ke hotel & waktu bebas</li>
					<li>Sore hari mengunjungi Garuda Wisnu Kencana Cultural Park</li>
				</ul>

				{/* Hari 2 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 2 – Nusa Penida Tour
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Sarapan di hotel</li>
					<li>Penyeberangan ke Nusa Penida (07:45)</li>
					<li>
						Mengunjungi Angel’s Billabong, Broken Beach, Kelingking Beach,
						Crystal Bay
					</li>
					<li>Makan siang di restoran lokal</li>
					<li>Kembali ke Bali sore hari (16:00)</li>
				</ul>

				{/* Hari 3 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 3 – Kintamani & Tirta Empul Tour
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Sarapan di hotel</li>
					<li>Desa Mas (kerajinan kayu)</li>
					<li>Gunung dan Danau Batur (Kintamani)</li>
					<li>Makan siang dengan pemandangan Gunung Batur</li>
					<li>Mengunjungi Pura Tirta Empul di Tampaksiring</li>
					<li>Foto & Swing di Tegallalang Rice Terrace</li>
				</ul>

				{/* Hari 4 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 4 – Water Sports & Uluwatu Sunset
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Sarapan di hotel</li>
					<li>Water sports: 1x banana boat & 1x jet ski</li>
					<li>Makan siang di restoran India</li>
					<li>Mengunjungi Pura Uluwatu</li>
					<li>Menonton Tari Kecak saat matahari terbenam</li>
				</ul>

				{/* Hari 5 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 5 – Jatiluwih & Tanah Lot
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Sarapan di hotel</li>
					<li>Mengunjungi Jatiluwih Rice Terrace (UNESCO site)</li>
					<li>Mengunjungi Danau & Pura Ulun Danu Beratan</li>
					<li>Makan siang di restoran lokal</li>
					<li>Wisata ke Pura Tanah Lot saat matahari terbenam</li>
				</ul>

				{/* Hari 6 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 6 – Kepulangan
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Sarapan & check-out hotel</li>
					<li>Transfer ke Bandara Ngurah Rai</li>
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
