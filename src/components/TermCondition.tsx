"use client";

import React from "react";
import { Lily_Script_One } from "next/font/google";

const lilyFont = Lily_Script_One({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

export default function TermCondition() {
	return (
		<>
			<p
				className={`${lilyFont.className} text-2xl font-bold mb-4 text-[#112A90] dark:text-white`}>
				Term and Condition
			</p>
			<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
				<li>
					Biaya belum termasuk tiket pesawat menuju dan dari titik awal
					keberangkatan (jika di luar kota asal peserta)
				</li>
				<li>
					Uang muka pendaftaran bersifat non-refundable (tidak dapat
					dikembalikan)
				</li>
				<li>
					Harga dapat berubah sewaktu-waktu menyesuaikan dengan harga tiket,
					hotel, atau kebijakan pemerintah setempat
				</li>
				<li>
					Hotel yang tertera bersifat tentatif. Jika penuh, akan diganti dengan
					hotel setara di lokasi terdekat
				</li>
				<li>
					Perubahan jadwal kegiatan bisa terjadi karena cuaca buruk, kemacetan,
					atau kondisi darurat lainnya (Force Majeure), dan tidak dapat diklaim
					untuk pengembalian dana
				</li>
				<li>
					Biaya tidak termasuk pengeluaran pribadi seperti laundry, mini bar,
					telepon, serta biaya tambahan untuk upgrade hotel atau kamar
				</li>
				<li>
					Jika peserta ingin melakukan perubahan jadwal keberangkatan atau
					perpanjangan perjalanan (extend), biaya akan disesuaikan dengan
					kebijakan penyedia layanan (maskapai/hotel)
				</li>
			</ul>
			<p className="text-lg font-medium my-4 text-[#112A90] dark:text-white">
				Dengan membayar uang muka pendaftaran, peserta dianggap telah membaca,
				memahami, dan menyetujui seluruh syarat dan ketentuan di atas.
			</p>
		</>
	);
}
