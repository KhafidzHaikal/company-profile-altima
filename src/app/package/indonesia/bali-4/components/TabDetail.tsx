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
					Paket Itinerary Wisata Bali – 8 Hari 7 Malam (Adventurous Honeymoon)
				</p>

				{/* Hari 1 */}
				<p className="text-md font-bold text-[#112A90] mt-4">
					Hari 1 – Arrival in Bali
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Kedatangan di Bandara Ngurah Rai</li>
					<li>Check-in di hotel Ubud</li>
					<li>Free time / Rest at hotel</li>
				</ul>

				{/* Hari 2 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 2 – Ubud Adventure
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Sarapan di hotel</li>
					<li>ATV ride di sekitar Ubud</li>
					<li>Rafting di Sungai Ayung</li>
					<li>Makan siang</li>
					<li>Sore: Spa & couple massage</li>
				</ul>

				{/* Hari 3 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 3 – Explore East Bali
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Sarapan di hotel</li>
					<li>Gate of Heaven - Lempuyang Temple</li>
					<li>Tirta Gangga Water Palace</li>
					<li>Makan siang</li>
					<li>Virgin Beach untuk bersantai</li>
				</ul>

				{/* Hari 4 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 4 – Transfer to South Bali
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Check-out dari hotel Ubud</li>
					<li>Berhenti di Jatiluwih Rice Terrace</li>
					<li>Bedugul – Pura Ulun Danu Beratan</li>
					<li>Makan siang</li>
					<li>Check-in hotel di Uluwatu atau Nusa Dua</li>
				</ul>

				{/* Hari 5 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 5 – Nusa Penida Adventure
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Berangkat pagi ke Pelabuhan Sanur</li>
					<li>Fast boat ke Nusa Penida</li>
					<li>Angel’s Billabong, Broken Beach, Kelingking Beach</li>
					<li>Makan siang</li>
					<li>Kembali ke Bali</li>
				</ul>

				{/* Hari 6 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 6 – Leisure & Romantic Sunset
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Pagi: Free time di hotel</li>
					<li>Sore: Mengunjungi Pura Uluwatu</li>
					<li>Menonton Tari Kecak Sunset</li>
					<li>Makan malam romantis di tepi pantai (Jimbaran)</li>
				</ul>

				{/* Hari 7 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 7 – Watersport & Beach Club
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>
						Watersport di Tanjung Benoa (banana boat, parasailing, jet ski)
					</li>
					<li>Makan siang</li>
					<li>
						Sore: Waktu santai di beach club (misalnya: Palmilla, Tropical
						Temptation, atau Atlas)
					</li>
				</ul>

				{/* Hari 8 */}
				<p className="text-md font-bold text-[#112A90] mt-6">
					Hari 8 – Kepulangan
				</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Sarapan dan check-out hotel</li>
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
