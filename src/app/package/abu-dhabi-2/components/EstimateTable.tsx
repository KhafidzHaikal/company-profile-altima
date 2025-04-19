"use client";

import { Lily_Script_One } from "next/font/google";

const lilyFont = Lily_Script_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function EstimatedDubai2DudeTable() {
  return (
    <div className="overflow-x-auto mt-6">
      <p className={`${lilyFont.className} text-2xl font-bold text-[#112A90] mb-4`}>
        Estimasi Biaya (untuk 1 keluarga)
      </p>
      <table className="min-w-full border-separate border-spacing-y-3">
        <thead>
          <tr className="text-[#112A90] text-sm border-b border-[#112A90] uppercase">
            <th className="text-left px-3 py-2">No</th>
            <th className="text-left px-3 py-2">Komponen</th>
            <th className="text-right px-3 py-2">Harga (Rp/keluarga)</th>
          </tr>
        </thead>
        <tbody className="dark:text-white text-sm font-light">
          <tr className="hover:bg-neutral-800 hover:text-white transition rounded-md">
            <td className="px-3 py-3">1</td>
            <td className="px-3 py-3">Akomodasi (3 malam)</td>
            <td className="px-3 py-3 text-right">Rp 5.500.000</td>
          </tr>
          <tr className="hover:bg-neutral-800 hover:text-white transition rounded-md">
            <td className="px-3 py-3">2</td>
            <td className="px-3 py-3">Transportasi, dan Tour</td>
            <td className="px-3 py-3 text-right">Rp 5.000.000</td>
          </tr>
          <tr className="hover:bg-neutral-800 hover:text-white transition rounded-md">
            <td className="px-3 py-3">3</td>
            <td className="px-3 py-3">Kuliner (6x Makan)</td>
            <td className="px-3 py-3 text-right">Rp 4.500.000</td>
          </tr>
          <tr className="hover:bg-neutral-800 hover:text-white transition rounded-md">
            <td className="px-3 py-3">4</td>
            <td className="px-3 py-3">Kelas memasak</td>
            <td className="px-3 py-3 text-right">Rp 1.000.000</td>
          </tr>
          <tr className="hover:bg-neutral-800 hover:text-white transition rounded-md">
            <td className="px-3 py-3">5</td>
            <td className="px-3 py-3">Guide & Koordinasi</td>
            <td className="px-3 py-3 text-right">Rp 2.500.000</td>
          </tr>
          <tr className="hover:bg-neutral-800 hover:text-white transition rounded-md">
            <td className="px-3 py-3">6</td>
            <td className="px-3 py-3">Tiket wisata & Handling</td>
            <td className="px-3 py-3 text-right">Rp 2.000.000</td>
          </tr>
          <tr className="text-[#112A90] font-bold border-t border-[#112A90] text-sm">
            <td colSpan={2} className="px-3 py-3 text-right">
              Total
            </td>
            <td className="px-3 py-3 text-right">Rp 23.500.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
