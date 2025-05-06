"use client";

import { Lily_Script_One } from "next/font/google";

const lilyFont = Lily_Script_One({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

export default function EstimatedIndonesiaTable() {
	return (
		<div className="overflow-x-auto mt-6">
			<p
				className={`${lilyFont.className} text-2xl font-bold text-[#112A90] mb-4`}>
				Estimasi Biaya (untuk 1 Orang)
			</p>
			<table className="min-w-full border-separate border-spacing-y-3">
				<thead>
					<tr className="text-[#112A90] text-sm border-b border-[#112A90] uppercase">
						<th className="text-left px-3 py-2">No</th>
						<th className="text-left px-3 py-2">Komponen</th>
						<th className="text-right px-3 py-2">Harga (Rp/orang)</th>
					</tr>
				</thead>
				<tbody className="dark:text-white text-sm font-light">
					<tr className="hover:bg-neutral-800 hover:text-white transition rounded-md">
						<td className="px-3 py-3">1</td>
						<td className="px-3 py-3">Akomodasi (6 malam)</td>
						<td className="px-3 py-3 text-right">Rp 3.200.000</td>
					</tr>
					<tr className="hover:bg-neutral-800 hover:text-white transition rounded-md">
						<td className="px-3 py-3">2</td>
						<td className="px-3 py-3">Transportasi + Driver (7 hari)</td>
						<td className="px-3 py-3 text-right">Rp 2.100.000</td>
					</tr>
					<tr className="hover:bg-neutral-800 hover:text-white transition rounded-md">
						<td className="px-3 py-3">3</td>
						<td className="px-3 py-3">Tiket Wisata & Aktivitas</td>
						<td className="px-3 py-3 text-right">Rp 1.200.000</td>
					</tr>
					<tr className="hover:bg-neutral-800 hover:text-white transition rounded-md">
						<td className="px-3 py-3">4</td>
						<td className="px-3 py-3">Fast Boat Nusa Penida (PP)</td>
						<td className="px-3 py-3 text-right">Rp 400.000</td>
					</tr>
					<tr className="hover:bg-neutral-800 hover:text-white transition rounded-md">
						<td className="px-3 py-3">5</td>
						<td className="px-3 py-3">Konsumsi (makan 3x sehari)</td>
						<td className="px-3 py-3 text-right">Rp 1.200.000</td>
					</tr>
					<tr className="hover:bg-neutral-800 hover:text-white transition rounded-md">
						<td className="px-3 py-3">6</td>
						<td className="px-3 py-3">Koordinasi & Support Agen</td>
						<td className="px-3 py-3 text-right">Rp 600.000</td>
					</tr>
					<tr className="hover:bg-neutral-800 hover:text-white transition rounded-md">
						<td className="px-3 py-3">7</td>
						<td className="px-3 py-3">Cadangan & Margin</td>
						<td className="px-3 py-3 text-right">Rp 464.000</td>
					</tr>
					<tr className="text-[#112A90] font-bold border-t border-[#112A90] text-sm">
						<td colSpan={2} className="px-3 py-3 text-right">
							Total
						</td>
						<td className="px-3 py-3 text-right">Rp 9.164.000</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
