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

export default function Dubai1DudeTabs() {
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
          <li>Kedatangan di Dubai</li>
          <li>Penjemputan oleh staf travel di bandara</li>
          <li>Transfer ke Hotel & Check-in hotel (bintang 4, area Marina/Al Barsha)</li>
          <li>Istirahat dan jalan santai di Marina Walk (waktu bebas)</li>
          <li>Briefing singkat itinerary oleh perwakilan travel</li>
          <li>Makan malam opsional: restoran di Marina/Al Barsha</li>
        </ul>

        {/* Day 2 */}
        <p className="text-md font-bold text-[#112A90] mt-6">Hari 2</p>
        <ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
          <li>Sarapan di hotel</li>
          <li>Setengah hari menikmati tur ke Masjid Jumeirah, Burj Al Arab, Atlantis The Palm, Dubai Frame</li>
          <li>Makan siang</li>
          <li>Sore - malam: Desert Safari Dubai</li>
          <li>4x4 Jeep Dune Bashing, sandboarding, BBQ dinner</li>
        </ul>

        {/* Day 3 */}
        <p className="text-md font-bold text-[#112A90] mt-6">Hari 3</p>
        <ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
          <li>Sarapan di hotel</li>
          <li>Tur seharian: Dubai Aquarium & Underwater Zoo, At The Top Burj Khalifa</li>
          <li>Belanja di Dubai Mall</li>
          <li>Sore menikmati Dubai Fountain Show</li>
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
