import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import { Lily_Script_One } from "next/font/google";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { GoDash } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { IoArrowRedoOutline } from "react-icons/io5";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

const lilyFont = Lily_Script_One({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

export default function Home() {
	return (
		<main className="mt-20 lg:mt-0">
			<Navbar />
			<section className="h-screen flex items-center mt-2 sm:mt-0 mx-12 lg:mx-32">
				<div className="md:flex justify-between items-center gap-4">
					<div className="">
						<div className="text-[#112A90] dark:text-white flex items-center mb-4">
							<BiSolidPlaneAlt className="text-xl" />
							<GoDash className="text-xl" />
							<p className="text-sm font-medium">Yuk, Mulai Petualangan!</p>
						</div>
						<p className={`${lilyFont.className} text-2xl md:text-4xl`}>
							Liburan Tanpa Ribet Kenangan Sepanjang Hidup
						</p>
						<p className="text-[#4C5E70] my-4 text-sm">
							Nikmati pengalaman liburan di Indonesia tanpa repot! Kami siap
							merancang perjalanan impian Anda dengan layanan terbaik dan
							destinasi eksklusif.
						</p>
						<Link href={"https://wa.me/6281388266868"}>
							<Button className=" rounded-md py-4 flex items-center gap-2 mx-auto sm:mx-0 bg-transparent text-[#112A90] dark:text-white dark:hover:text-[#112A90] dark:border-white dark:hover:bg-white border border-[#112A90] hover:bg-[#112A90] hover:text-white cursor-pointer w-full md:w-auto">
								Hubungi Kami
								<FaWhatsapp className="text-md" />
							</Button>
						</Link>
					</div>
					<div className="md:w-1/2 mt-4 md:mt-0">
						<Image
							src="/images/jumbotron-poto-1.png"
							alt="Altima Logo"
							width={0}
							height={0}
							className="h-full w-full rounded-2xl"
							sizes="100vh"
							priority
						/>
					</div>
				</div>
			</section>
			<section
				className="pt-8 pb-20"
				style={{
					backgroundImage: "url(/images/background-homepage.png)",
					width: "100%",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				<div className="text-center py-4">
					<div className="text-white flex justify-center items-center mb-4">
						<GoDash className="text-xl" />
						<p className="text-sm font-medium">
							Layanan Terbaik & Destinasi Ekslusif
						</p>
					</div>
					<p
						className={`${lilyFont.className} text-white text-2xl md:text-4xl`}>
						Rekomendasi Paket untuk Anda
					</p>
					<p className="text-white my-4 text-sm">
						Kami memberikan layanan dengan memberikan pilihan destinasi tempat
						dan harga terbaik.
					</p>
				</div>
			</section>
			<section className="mx-12 lg:mx-32">
				<Carousel className="-mt-12 overflow-hidden">
					<CarouselContent>
						<CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 p-0 ml-4">
							<div className="relative h-[400px] rounded-[30px] overflow-hidden shadow-md border-4 border-white">
								<Image
									src="/images/altima-foto-1.png"
									alt="Mosque"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-black/30 flex items-center justify-center">
									<h3 className={`${lilyFont.className} text-white text-3xl`}>
										Keluarga
									</h3>
								</div>
							</div>
						</CarouselItem>
						<CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 p-0 ml-4">
							<div className="relative h-[400px] rounded-[30px] overflow-hidden shadow-md border-4 border-white">
								<Image
									src="/images/kuliner.jpg"
									alt="Mosque"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-black/30 flex items-center justify-center">
									<h3 className={`${lilyFont.className} text-white text-3xl`}>
										Kuliner
									</h3>
								</div>
							</div>
						</CarouselItem>
						<CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 p-0 ml-4">
							<div className="relative h-[400px] rounded-[30px] overflow-hidden shadow-md border-4 border-white">
								<Image
									src="/images/hiburan.jpg"
									alt="Mosque"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-black/30 flex items-center justify-center">
									<h3 className={`${lilyFont.className} text-white text-3xl`}>
										Hiburan
									</h3>
								</div>
							</div>
						</CarouselItem>
						<CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 p-0 ml-4">
							<div className="relative h-[400px] rounded-[30px] overflow-hidden shadow-md border-4 border-white">
								<Image
									src="/images/meditasi.png"
									alt="Mosque"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-black/30 flex items-center justify-center">
									<h3 className={`${lilyFont.className} text-white text-3xl`}>
										Meditasi
									</h3>
								</div>
							</div>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
			</section>
			<section className="mx-12 lg:mx-32 mt-12">
				<div className="md:flex justify-between gap-4">
					<div className="mt-12">
						<div className="text-[#112A90] flex items-center mb-4">
							<GoDash className="text-xl" />
							<p className="text-sm font-medium">Destinasi Wisata</p>
						</div>
						<p className={`${lilyFont.className} text-2xl md:text-4xl`}>
							Destinasi yang Kami Sediakan
						</p>
						<p className="text-[#4C5E70] my-4 text-sm">
							Ukir pengalaman dengan perjalanan di negara Abu Dhabi atau Dubai.
						</p>
					</div>
					<div className="py-12 md:flex justify-center gap-4 items-center mx-auto">
						{/* Abu Dhabi */}
						<div className="relative inline-block overflow-hidden rounded-xl group">
							<Image
								src="/images/bali.jpg"
								width={0}
								height={0}
								sizes="100vh"
								alt="Indonesia"
								className="rounded-xl object-fit hover:scale-110 duration-500 transition-transform w-[600px] h-[200px] sm:h-[400px]"
							/>
							<div className="absolute inset-0 flex items-center justify-center">
								<span
									className={`${lilyFont.className} text-white px-4 py-2 rounded-md flex items-center gap-2 font-semibold text-2xl lg:text-4xl transition-colors duration-300`}>
									Indonesia <IoArrowRedoOutline size={16} />
								</span>
							</div>
						</div>

						{/* Dubai */}
						{/* <div className="relative inline-block overflow-hidden rounded-xl group">
							<Image
								src="/images/dubai-poto.png"
								width={0}
								height={0}
								sizes="100vh"
								alt="Dubai"
								className="rounded-xl object-cover hover:scale-110 duration-500 transition-transform w-[600px] h-[200px] sm:h-[400px]"
							/>
							<div className="absolute inset-0 flex items-center justify-center">
								<span
									className={`${lilyFont.className} text-white px-4 py-2 rounded-md flex items-center gap-2 font-semibold text-2xl lg:text-4xl transition-colors duration-300`}>
									Dubai <IoArrowRedoOutline size={16} />
								</span>
							</div>
						</div> */}
					</div>
				</div>
			</section>
			<section className="mx-12 lg:mx-32">
				<div className="">
					<div className="text-[#112A90] dark:text-white flex items-center mb-4">
						<GoDash className="text-xl" />
						<p className="text-sm font-medium">Paket Liburan</p>
					</div>
					<p className={`${lilyFont.className} text-2xl md:text-4xl`}>
						Paket Liburan Hebat untuk Pengalaman Hebat !
					</p>
				</div>
				<div className="mt-8">
					<p className={`${lilyFont.className} text-md md:text-lg`}>
						Indonesia
					</p>
					<p className="text-[#4C5E70] mt-2 mb-8 text-sm">
						Menikmati Perjalanan ke Indonesia dengan Paket Terbaik Kami.
					</p>
					<Carousel className="overflow-hidden p-2">
						<CarouselContent>
							{/* <CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 p-0 ml-4">
											<div className="h-full dark:bg-white shadow-xl rounded-md ml-2.5 sm:ml-4 p-2">
												<Image
													src={"/images/jumbotron-poto-1.png"}
													width={0}
													height={0}
													sizes="100vh"
													alt="Mosque"
													className=" h-44 w-full rounded-md"
												/>
												<div className="p-4">
													<p
														className={`${lilyFont.className} text-md font-semibold text-[#112A90] dark:text-white`}>
														Paket Tour Indonesia
													</p>
													<p
														className={`${lilyFont.className} text-[#112A90] dark:text-white my-2 text-md font-semibold`}>
														Rp 15.270.000
													</p>
													<div>
														<p className="text-sm font-normal text-black dark:text-white mb-2">
															Perjalanan mengunjungi tempat - tempat wisata pada Kota
															besar di Indonesia.
														</p>
														<ul className="list-disc pl-5 text-sm text-black dark:text-white space-y-1">
															<li>Perjalanan 1 Orang</li>
															<li>Selama 10 Hari & 9 Malam</li>
															<li>Hotel + Makan Pagi, Siang, dan Malam</li>
															<li>Gratis Transportasi</li>
														</ul>
													</div>
			
													<div className="flex md:block xl:flex justify-between items-center mt-8 gap-2">
														<Link href={"https://wa.me/6281388266868"}>
															<Button className=" rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
																Konsultasi
																<FaWhatsapp className="text-md" />
															</Button>
														</Link>
														<Link href={"/package/indonesia"}>
															<Button className="mt-0 md:mt-4 xl:mt-0 rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
																Detail
																<IoArrowRedoOutline className="text-md" />
															</Button>
														</Link>
													</div>
												</div>
											</div>
										</CarouselItem> */}
							<CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 p-0 ml-4">
								<div className="h-full dark:bg-white shadow-xl rounded-md ml-2.5 sm:ml-4 p-2">
									<Image
										src={"/images/bali-beach.jpg"}
										width={0}
										height={0}
										sizes="100vh"
										alt="Mosque"
										className=" h-44 w-full rounded-md"
									/>
									<div className="p-4">
										<p
											className={`${lilyFont.className} text-md font-semibold text-[#112A90] dark:text-white`}>
											Bali - Beach
										</p>
										<p
											className={`${lilyFont.className} text-[#112A90] dark:text-white my-2 text-md font-semibold`}>
											Rp 7.500.000
										</p>
										<div>
											<p className="text-sm font-normal text-black dark:text-white mb-2">
												Perjalanan mengunjungi tempat - tempat wisata di Bali.
											</p>
											<ul className="list-disc pl-5 text-sm text-black dark:text-white space-y-1">
												<li>Perjalanan 1 Orang</li>
												<li>Selama 5 Hari & 4 Malam</li>
												<li>Hotel + Makan Pagi, Siang, dan Malam</li>
												<li>Gratis Transportasi</li>
											</ul>
										</div>

										<div className="flex md:block xl:flex justify-between items-center mt-8 gap-2">
											<Link href={"https://wa.me/6281388266868"}>
												<Button className=" rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
													Konsultasi
													<FaWhatsapp className="text-md" />
												</Button>
											</Link>
											<Link href={"/package/indonesia/bali-1"}>
												<Button className="mt-0 md:mt-4 xl:mt-0 rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
													Detail
													<IoArrowRedoOutline className="text-md" />
												</Button>
											</Link>
										</div>
									</div>
								</div>
							</CarouselItem>
							<CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 p-0 ml-4">
								<div className="h-full dark:bg-white shadow-xl rounded-md ml-2.5 sm:ml-4 p-2">
									<Image
										src={"/images/gwk.jpg"}
										width={0}
										height={0}
										sizes="100vh"
										alt="Mosque"
										className=" h-44 w-full rounded-md"
									/>
									<div className="p-4">
										<p
											className={`${lilyFont.className} text-md font-semibold text-[#112A90] dark:text-white`}>
											Bali - Beach
										</p>
										<p
											className={`${lilyFont.className} text-[#112A90] dark:text-white my-2 text-md font-semibold`}>
											Rp 6.600.000
										</p>
										<div>
											<p className="text-sm font-normal text-black dark:text-white mb-2">
												Perjalanan mengunjungi tempat - tempat wisata di Bali.
											</p>
											<ul className="list-disc pl-5 text-sm text-black dark:text-white space-y-1">
												<li>Perjalanan 1 Orang</li>
												<li>Selama 6 Hari & 5 Malam</li>
												<li>Hotel + Makan Pagi, Siang, dan Malam</li>
												<li>Gratis Transportasi</li>
											</ul>
										</div>

										<div className="flex md:block xl:flex justify-between items-center mt-8 gap-2">
											<Link href={"https://wa.me/6281388266868"}>
												<Button className=" rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
													Konsultasi
													<FaWhatsapp className="text-md" />
												</Button>
											</Link>
											<Link href={"/package/indonesia/bali-2"}>
												<Button className="mt-0 md:mt-4 xl:mt-0 rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
													Detail
													<IoArrowRedoOutline className="text-md" />
												</Button>
											</Link>
										</div>
									</div>
								</div>
							</CarouselItem>
							<CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 p-0 ml-4">
								<div className="h-full dark:bg-white shadow-xl rounded-md ml-2.5 sm:ml-4 p-2">
									<Image
										src={"/images/bali-beach-5.jpg"}
										width={0}
										height={0}
										sizes="100vh"
										alt="Mosque"
										className=" h-44 w-full rounded-md"
									/>
									<div className="p-4">
										<p
											className={`${lilyFont.className} text-md font-semibold text-[#112A90] dark:text-white`}>
											Bali - Honeymoon at Beach & Hill
										</p>
										<p
											className={`${lilyFont.className} text-[#112A90] dark:text-white my-2 text-md font-semibold`}>
											Rp 9.164.000
										</p>
										<div>
											<p className="text-sm font-normal text-black dark:text-white mb-2">
												Perjalanan mengunjungi tempat - tempat wisata di Bali.
											</p>
											<ul className="list-disc pl-5 text-sm text-black dark:text-white space-y-1">
												<li>Perjalanan 1 Orang</li>
												<li>Selama 7 Hari & 6 Malam</li>
												<li>Hotel + Makan Pagi, Siang, dan Malam</li>
												<li>Gratis Transportasi</li>
											</ul>
										</div>

										<div className="flex md:block xl:flex justify-between items-center mt-8 gap-2">
											<Link href={"https://wa.me/6281388266868"}>
												<Button className=" rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
													Konsultasi
													<FaWhatsapp className="text-md" />
												</Button>
											</Link>
											<Link href={"/package/indonesia/bali-3"}>
												<Button className="mt-0 md:mt-4 xl:mt-0 rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
													Detail
													<IoArrowRedoOutline className="text-md" />
												</Button>
											</Link>
										</div>
									</div>
								</div>
							</CarouselItem>
							<CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 p-0 ml-4">
								<div className="h-full dark:bg-white shadow-xl rounded-md ml-2.5 sm:ml-4 p-2">
									<Image
										src={"/images/bali-beach-6.jpg"}
										width={0}
										height={0}
										sizes="100vh"
										alt="Mosque"
										className=" h-44 w-full rounded-md"
									/>
									<div className="p-4">
										<p
											className={`${lilyFont.className} text-md font-semibold text-[#112A90] dark:text-white`}>
											Bali - Adventurous Honeymoon
										</p>
										<p
											className={`${lilyFont.className} text-[#112A90] dark:text-white my-2 text-md font-semibold`}>
											Rp 11.000.000
										</p>
										<div>
											<p className="text-sm font-normal text-black dark:text-white mb-2">
												Perjalanan mengunjungi tempat - tempat wisata di Bali.
											</p>
											<ul className="list-disc pl-5 text-sm text-black dark:text-white space-y-1">
												<li>Perjalanan 1 Orang</li>
												<li>Selama 8 Hari & 7 Malam</li>
												<li>Hotel + Makan Pagi, Siang, dan Malam</li>
												<li>Gratis Transportasi</li>
											</ul>
										</div>

										<div className="flex md:block xl:flex justify-between items-center mt-8 gap-2">
											<Link href={"https://wa.me/6281388266868"}>
												<Button className=" rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
													Konsultasi
													<FaWhatsapp className="text-md" />
												</Button>
											</Link>
											<Link href={"/package/indonesia/bali-4"}>
												<Button className="mt-0 md:mt-4 xl:mt-0 rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
													Detail
													<IoArrowRedoOutline className="text-md" />
												</Button>
											</Link>
										</div>
									</div>
								</div>
							</CarouselItem>
							{/* <CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 p-0 ml-4">
											<div className="h-full dark:bg-white shadow-xl rounded-md ml-2.5 sm:ml-4 p-2">
												<Image
													src={"/images/kuliner.jpg"}
													width={0}
													height={0}
													sizes="100vh"
													alt="Mosque"
													className=" h-44 w-full rounded-md"
												/>
												<div className="p-4">
													<p
														className={`${lilyFont.className} text-md font-semibold text-[#112A90] dark:text-white`}>
														Kuliner Abu Dhabi
													</p>
													<p
														className={`${lilyFont.className} text-[#112A90] dark:text-white my-2 text-md font-semibold`}>
														Rp 23.500.000
													</p>
													<div>
														<p className="text-sm font-normal text-black dark:text-white mb-2">
															Perjalanan dengan menikmati kuliner khas kota Abu Dhabi
															Timur Tengah yang halal dan nikmat.
														</p>
														<ul className="list-disc pl-5 text-sm text-black dark:text-white space-y-1">
															<li>Cocok bersama pasangan, teman, atau solo</li>
															<li>Selama 4 Hari & 3 Malam</li>
															<li>Hotel + Makan Pagi, Siang, dan Malam</li>
															<li>Gratis Transportasi</li>
														</ul>
													</div>
			
													<div className="flex md:block xl:flex justify-between items-center mt-8 gap-2">
														<Link href={""}>
															<Button className=" rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
																Konsultasi
																<FaWhatsapp className="text-md" />
															</Button>
														</Link>
														<Link href={"/package/abu-dhabi-2"}>
															<Button className="mt-0 md:mt-4 xl:mt-0 rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
																Detail
																<IoArrowRedoOutline className="text-md" />
															</Button>
														</Link>
													</div>
												</div>
											</div>
										</CarouselItem> */}
						</CarouselContent>
					</Carousel>
				</div>
				{/* <div className="mt-8">
								<p className={`${lilyFont.className} text-md md:text-lg`}>Dubai</p>
								<p className="text-[#4C5E70] mt-2 mb-8 text-sm">
									Menikmati Perjalanan ke Dubai dengan Paket Terbaik Kami.
								</p>
								<Carousel className="overflow-hidden p-2">
									<CarouselContent>
										<CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 p-0 ml-4">
											<div className="h-full dark:bg-white shadow-xl rounded-md ml-2.5 sm:ml-4 p-2">
												<Image
													src={"/images/altima-poto-3.png"}
													width={0}
													height={0}
													sizes="100vh"
													alt="Mosque"
													className=" h-44 w-full rounded-md"
												/>
												<div className="p-4">
													<p
														className={`${lilyFont.className} text-md font-semibold text-[#112A90] dark:text-white`}>
														Paket Keluarga
													</p>
													<p
														className={`${lilyFont.className} text-[#112A90] dark:text-white my-2 text-md font-semibold`}>
														Rp. 25.500.000
													</p>
													<div>
														<p className="text-sm font-normal text-black dark:text-white mb-2">
															Perjalanan mengunjungi tempat - tempat bersejarah yang
															berada di Dubai bersama keluarga.
														</p>
														<ul className="list-disc pl-5 text-sm text-black dark:text-white space-y-1">
															<li>Perjalanan untuk 2 Dewasa & 1 Anak</li>
															<li>Selama 4 Hari & 3 Malam</li>
															<li>Hotel + Makan Pagi, Siang, dan Malam</li>
															<li>Gratis Transportasi</li>
														</ul>
													</div>
			
													<div className="flex md:block xl:flex justify-between items-center mt-8 gap-2">
														<Link href={""}>
															<Button className=" rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
																Konsultasi
																<FaWhatsapp className="text-md" />
															</Button>
														</Link>
														<Link href={"/package/dubai-1"}>
															<Button className="mt-0 md:mt-4 xl:mt-0 rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
																Detail
																<IoArrowRedoOutline className="text-md" />
															</Button>
														</Link>
													</div>
												</div>
											</div>
										</CarouselItem>
										<CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 p-0 ml-4">
											<div className="h-full dark:bg-white shadow-xl rounded-md ml-2.5 sm:ml-4 p-2">
												<Image
													src={"/images/hiburan.jpg"}
													width={0}
													height={0}
													sizes="100vh"
													alt="Mosque"
													className=" h-44 w-full rounded-md"
												/>
												<div className="p-4">
													<p
														className={`${lilyFont.className} text-md font-semibold text-[#112A90] dark:text-white`}>
														Taman Hiburan Dubai
													</p>
													<p
														className={`${lilyFont.className} text-[#112A90] dark:text-white my-2 text-md font-semibold`}>
														Rp. 23.000.000
													</p>
													<div>
														<p className="text-sm font-normal text-black dark:text-white mb-2">
															Perjalanan dengan menikmati kuliner khas kota Abu Dhabi
															Timur Tengah yang halal dan nikmat.
														</p>
														<ul className="list-disc pl-5 text-sm text-black dark:text-white space-y-1">
															<li>Cocok bersama pasangan, teman, atau solo</li>
															<li>Selama 4 Hari & 3 Malam</li>
															<li>Hotel + Makan Pagi, Siang, dan Malam</li>
															<li>Gratis Transportasi</li>
														</ul>
													</div>
			
													<div className="flex md:block xl:flex justify-between items-center mt-8 gap-2">
														<Link href={""}>
															<Button className=" rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
																Konsultasi
																<FaWhatsapp className="text-md" />
															</Button>
														</Link>
														<Link href={"/package/dubai-2"}>
															<Button className="mt-0 md:mt-4 xl:mt-0 rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
																Detail
																<IoArrowRedoOutline className="text-md" />
															</Button>
														</Link>
													</div>
												</div>
											</div>
										</CarouselItem>
									</CarouselContent>
								</Carousel>
							</div> */}
			</section>
			<section className="mx-12 lg:mx-32 mt-12">
				<div className="mt-12 text-right">
					<div className="text-[#112A90] dark:text-white flex items-center mb-4 justify-end">
						<p className="text-sm font-medium">Portofolio</p>
						<GoDash className="text-xl" />
					</div>
					<p className={`${lilyFont.className} text-2xl md:text-4xl`}>
						Perjalanan yang Telah Kami Ukir Bersama
					</p>
					<p className="text-[#4C5E70] my-4 text-sm">
						Kami telah memiliki banyak pengalaman bersama dengan pelanggan
						lainnya dalam perjalanan yang luar biasa di Abu Dhabi atau Dubai.
					</p>
				</div>
				<div className="md:flex justify-between gap-4 items-center mt-4">
					<Image
						src={"/images/altima-foto-1.png"}
						alt={`Altima Portfolio`}
						width={300}
						height={100}
						className="w-full rounded-lg object-cover"
					/>
					<Image
						src={"/images/altima-poto-2.png"}
						alt={`Altima Portfolio`}
						width={300}
						height={100}
						className="w-full rounded-lg object-cover"
					/>
				</div>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
					<Image
						src={"/images/altima-poto-3.png"}
						alt={`Altima Portfolio`}
						width={300}
						height={100}
						className="w-full rounded-lg object-cover"
					/>
					<Image
						src={"/images/altima-poto-4.png"}
						alt={`Altima Portfolio`}
						width={300}
						height={100}
						className="w-full rounded-lg object-cover"
					/>
					<Image
						src={"/images/altima-poto-5.png"}
						alt={`Altima Portfolio`}
						width={300}
						height={100}
						className="w-full rounded-lg object-cover"
					/>
					<Image
						src={"/images/altima-poto-6.png"}
						alt={`Altima Portfolio`}
						width={300}
						height={100}
						className="w-full rounded-lg object-cover"
					/>
				</div>
			</section>
			<section className="py-12 bg-[#112A90] mt-8">
				<div className="text-center py-4">
					<div className="text-white flex justify-center items-center mb-4">
						<GoDash className="text-xl" />
						<p className="text-sm font-medium">Konsultasi atau Pemesanan</p>
					</div>
					<p
						className={`${lilyFont.className} text-white text-2xl md:text-4xl`}>
						Tertarik untuk Memulai Perjalanan Bersama Kami?
					</p>
					<p className="text-white my-4 text-sm">
						Hubungi Kami untuk Konsultasi dan Pemesanan, Kami Siap Melayani Anda
						dengan Sepenuh Hati.
					</p>
				</div>
				<Link href={"https://wa.me/6281388266868"}>
					<Button className="rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
						Hubungi Kami
						<FaWhatsapp className="text-md" />
					</Button>
				</Link>
			</section>
			<Footer />
		</main>
	);
}
