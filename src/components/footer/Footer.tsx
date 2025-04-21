/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { Lily_Script_One } from "next/font/google";
import { useState } from "react";
import { toast } from "react-hot-toast";

const lilyFont = Lily_Script_One({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

const Footer = () => {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const handleSubmit = async () => {
		if (!email) {
			toast.error("Please enter an email");
			return;
		}

		const sendEmail = async () => {
			const res = await fetch("/api/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email }),
			});

			await new Promise((resolve) => setTimeout(resolve, 1000));

			if (!res.ok) {
				throw new Error("Failed to send");
			}
			setEmail("");
		};

		toast.promise(sendEmail(), {
			loading: "Sending email...",
			success: "Email sent successfully!",
			error: "Failed to send email. Try again.",
		});
	};
	return (
		<footer className="px-6 py-12">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="w-full">
					<h2
						className={`${lilyFont.className} text-2xl text-[#112A90] dark:text-white`}>
						Petualangan Selanjutnya Menanti Masukkan email Anda untuk
						mendapatkan informasi terbaru!
					</h2>
					<div className="flex items-center w-full mb-4 mt-8">
						<input
							type="email"
							placeholder="Masukkan Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="px-4 py-2 w-full md:w-3/4 text-md rounded-l-md border border-black dark:border-white dark:bg-white"
						/>
						<button
							onClick={handleSubmit}
							disabled={loading}
							className="bg-transparent border border-black dark:border-white px-4 py-2 rounded-r-md hover:bg-white hover:text-black transition">
							<ArrowRight />
						</button>
					</div>

					<p className="text-sm">
						<span
							className={`${lilyFont.className} text-[#112A90] dark:text-white font-semibold`}>
							Alamat Kantor:
						</span>{" "}
						<br />
						Jl. Lap. Tembak No.4, RT.1/RW.11, Cibubur, Kec. Ciracas, Kota
						Jakarta Timur, Daerah Khusus Ibukota Jakarta 13720
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div>
						<h3
							className={`${lilyFont.className} text-[#112A90] dark:text-white font-semibold mb-2`}>
							Destinasi
						</h3>
						<ul className="space-y-1">
							<li>Abu Dhabi</li>
							<li>Dubai</li>
						</ul>
					</div>

					<div>
						<h3
							className={`${lilyFont.className} text-[#112A90] dark:text-white font-semibold mb-2`}>
							Portfolio
						</h3>
						<ul className="space-y-1">
							<li>Abu Dhabi Travel Pic</li>
							<li>Dubai Travel Pic</li>
						</ul>
					</div>

					<div>
						<h3
							className={`${lilyFont.className} text-[#112A90] dark:text-white font-semibold mb-2`}>
							Social Media
						</h3>
						<div className="flex gap-4 text-2xl mt-2">
							<a href="" target="_blank" rel="noopener noreferrer">
								<FaWhatsapp />
							</a>
							<a href="" target="_blank" rel="noopener noreferrer">
								<FaInstagram />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
