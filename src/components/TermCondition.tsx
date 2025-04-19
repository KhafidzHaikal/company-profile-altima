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
			<p className={`${lilyFont.className} text-2xl font-bold mb-4 text-[#112A90] dark:text-white`}>
				Term and Condition
			</p>
			<ul className="list-disc list-inside text-black dark:text-white space-y-2 ml-4 lg:ml-12 mt-2 text-sm">
				<li>Belum termasuk tiket pesawat dan Visa</li>
				<li>Uang muka pendaftaran tidak dapat dikembalikan</li>
				<li>
					Airport Tax International, Fuel Surcharge, biaya visa dan asuransi
					perjalanan pribadi dapat berubah sewaktu-waktu, dan akan disesuaikan
					kepada peserta sebelum keberangkatan.
				</li>
				<li>
					Apabila dalam periode tour di kota-kota yang dikunjungi sedang
					berlangsung pameran / konferensi, atau hotel yang ditawarkan sedang
					penuh, maka akan diganti dengan hotel-hotel lain yang setaraf di kota
					terdekat
				</li>
				<li>
					Apabila terjadi Force Majeur (kondisi di luar kendali seperti :
					kehilangan, kerusakan, gangguan, keterlambatan sarana angkutan/
					transportasi, bencana alam dll) yang dapat memengaruhi acara tour akan
					diubah dan bersifat non-refundable (tidak dapat dikembalikan). Dan
					Biaya Tour tidak termasuk segala pengeluaran tambahan yang disebabkan
					oleh Force Majeur
				</li>
				<li>
					Apabila tamu ada yg mau mengubah jadwal penerbangan / extend (Deviasi
					akan dikenakan biaya sesuai dengan kondisi Airlines yang bersangkutan)
				</li>
			</ul>
			<p className="text-lg font-medium my-4 text-[#112A90] dark:text-white">
				Dengan membayar uang muka pendaftaran Biaya Tour, Anda dianggap telah
				memahami dan menerima syarat & kondisi di atas.
			</p>
		</>
	);
}
