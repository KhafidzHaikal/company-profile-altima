"use client";

import TermCondition from "@/components/TermCondition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, LayoutGrid } from "lucide-react";
import { Lily_Script_One } from "next/font/google";
import EstimatedDubai2DudeTable from "./EstimateTable";

const lilyFont = Lily_Script_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Dubai2DudeTabs() {
  return (
    <Tabs defaultValue="itinerary" className="w-full mt-8">
      <TabsList className="flex w-full justify-start gap-8 border-b-2 bg-transparent pb-1">
        <TabsTrigger
          value="itinerary"
          className="flex items-center gap-2 text-sm px-1 py-2 bg-transparent data-[state=active]:text-black data-[state=active]:underline data-[state=active]:underline-solid data-[state=active]:underline-[#112A90] data-[state=active]:w-full"
        >
          <LayoutGrid size={16} />
          Detail
        </TabsTrigger>

        <TabsTrigger
          value="terms"
          className="flex items-center gap-2 text-sm px-1 py-2 bg-transparent data-[state=active]:text-black data-[state=active]:underline data-[state=active]:underline-solid data-[state=active]:underline-[#112A90] data-[state=active]:w-full"
        >
          <Info size={16} />
          Term and Condition
        </TabsTrigger>
      </TabsList>

      {/* Itinerary Tab */}
      <TabsContent value="itinerary">
        <p className={`${lilyFont.className} text-2xl font-bold`}>
          Paket Itinerary Dubai 2 Dude (4 Hari)
        </p>

        {/* Day 1 */}
        <p className="text-md font-bold text-[#112A90] mt-4">Hari 1</p>
        <ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
          <li>Kedatangan di Abu Dhabi</li>
          <li>Penjemputan oleh staf travel di bandara</li>
          <li>Transfer ke Hotel & Check-in hotel (bintang 4, area pusat kota)</li>
          <li>Makan malam di restoran tradisional</li>
          <li>Sempatkan jalan-jalan di area Corniche</li>
          <li>Kembali ke hotel</li>
        </ul>

        {/* Day 2 */}
        <p className="text-md font-bold text-[#112A90] mt-6">Hari 2</p>
        <ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
          <li>Sarapan di hotel</li>
          <li>Tur Kota singkat ke Masjid Sheikh Zayed Grand, Qasr Al Watan (Photo Stop)</li>
          <li>Makan siang di Street Food di Mina Market atau Khalifah Street</li>
          <li>Kelas memasak ringan di tempat lokal</li>
          <li>Makan malam di restoran rooftop dengan masakan Levantine</li>
        </ul>

        {/* Day 3 */}
        <p className="text-md font-bold text-[#112A90] mt-6">Hari 3</p>
        <ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
          <li>Sarapan</li>
          <li>Kunjungan ke Souk Qaryat Al Beri</li>
          <li>Food Tasting di restoran fusion Emirati</li>
          <li>Waktu bebas/ santai</li>
          <li>Dinner eksklusif di restoran Emirati bintang 5</li>
          <li>Kembali ke hotel</li>
        </ul>

        {/* Day 4 */}
        <p className="text-md font-bold text-[#112A90] mt-6">Hari 4</p>
        <ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
          <li>Sarapan di hotel & Check-out</li>
          <li>Waktu bebas untuk belanja di toko lokal</li>
          <li>Transfer ke bandara dan pulang ke tanah air</li>
        </ul>

		<EstimatedDubai2DudeTable />
      </TabsContent>

      {/* Terms & Conditions Tab */}
      <TabsContent value="terms">
        <TermCondition />
      </TabsContent>
    </Tabs>
  );
}
