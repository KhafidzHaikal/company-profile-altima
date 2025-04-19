"use client";

import TermCondition from "@/components/TermCondition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, LayoutGrid } from "lucide-react";
import EstimatedAbuDhabiTable from "./EstimateTable";
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
					Paket Itinerary Abu Dhabi (4 Hari)
				</p>

				{/* Day 1 */}
				<p className="text-md font-bold text-[#112A90] mt-4">Hari 1</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Kedatangan di Abu Dhabi</li>
					<li>Penjemputan oleh staf travel di bandara</li>
					<li>
						Transfer ke Hotel & Check-in hotel (bintang 4, area pusat kota)
					</li>
					<li>Briefing singkat itinerary oleh perwakilan travel</li>
					<li>
						Makan malam opsional: Diatur oleh travel (restoran halal dekat
						hotel)
					</li>
				</ul>

				{/* Day 2 */}
				<p className="text-md font-bold text-[#112A90] mt-6">Hari 2</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Sarapan di hotel</li>
					<li>Full day di Ferrari World Abu Dhabi</li>
					<li>Makan siang di dalam area</li>
					<li>Makan malam dan kembali ke hotel</li>
				</ul>

				{/* Day 3 */}
				<p className="text-md font-bold text-[#112A90] mt-6">Hari 3</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Sarapan di hotel</li>
					<li>Setengah hari tour kota:</li>
					<li>Mendatangi Sheikh Zayed Grand Mosque</li>
					<li>Presidential Palace</li>
					<li>Louvre Abu Dhabi</li>
					<li>Waktu bebas di Yas Mall atau Marina Mall</li>
				</ul>

				{/* Day 4 */}
				<p className="text-md font-bold text-[#112A90] mt-6">Hari 4</p>
				<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
					<li>Sarapan di hotel & Check-out</li>
					<li>Waktu bebas untuk belanja di toko lokal</li>
					<li>Transfer ke bandara dan pulang ke tanah air</li>
				</ul>

				<EstimatedAbuDhabiTable />
			</TabsContent>

			{/* Terms & Conditions Tab */}
			<TabsContent value="terms">
				<TermCondition />
			</TabsContent>
		</Tabs>
	);
}
