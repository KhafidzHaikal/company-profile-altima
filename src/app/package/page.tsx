import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import { GoDash } from "react-icons/go";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { FaWhatsapp } from "react-icons/fa";
import { IoArrowRedoOutline } from "react-icons/io5";

import { Lily_Script_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const lilyFont = Lily_Script_One({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

export default function PaketPage() {
	return (
		<main className="mt-24">
			<Navbar />
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
						Paket Keluarga
					</p>
					<p className="text-[#4C5E70] mt-2 mb-8 text-sm">
						Bersama keluarga Anda dapat Menikmati Liburan ke Abu Dhabi atau
						Dubai.
					</p>
					<Carousel className="overflow-hidden p-2">
						<CarouselContent>
							<CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 p-0 ml-4">
								<div className="h-full dark:bg-white shadow-xl rounded-md ml-2.5 sm:ml-4 p-2">
									<Image
										src={"/images/altima-poto-7.png"}
										width={0}
										height={0}
										sizes="100vh"
										alt="Mosque"
										className=" h-44 w-full rounded-md"
									/>
									<div className="p-4">
										<p
											className={`${lilyFont.className} text-md font-semibold text-[#112A90] dark:text-white`}>
											Tempat Bersejarah Abu Dhabi
										</p>
										<p
											className={`${lilyFont.className} text-[#112A90] dark:text-white my-2 text-md font-semibold`}>
											Rp 42.000.000
										</p>
										<p className="text-sm font-normal text-black">
											Perjalanan mengunjungi tempat - tempat bersejarah yang
											berada di Abu Dhabi bersama keluarga.
										</p>
										<div className="flex md:block xl:flex justify-between items-center mt-8 gap-2">
											<Link href={""}>
												<Button className=" rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
													Konsultasi
													<FaWhatsapp className="text-md" />
												</Button>
											</Link>
											<Link href={"/package/abu-dhabi"}>
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
										src={"/images/altima-poto-7.png"}
										width={0}
										height={0}
										sizes="100vh"
										alt="Mosque"
										className=" h-44 w-full rounded-md"
									/>
									<div className="p-4">
										<p
											className={`${lilyFont.className} text-md font-semibold text-[#112A90] dark:text-white`}>
											Tempat Bersejarah Abu Dhabi
										</p>
										<p
											className={`${lilyFont.className} text-[#112A90] dark:text-white my-2 text-md font-semibold`}>
											Rp 42.000.000
										</p>
										<p className="text-sm font-normal text-black">
											Perjalanan mengunjungi tempat - tempat bersejarah yang
											berada di Abu Dhabi bersama keluarga.
										</p>
										<div className="flex md:block xl:flex justify-between items-center mt-8 gap-2">
											<Link href={""}>
												<Button className=" rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
													Konsultasi
													<FaWhatsapp className="text-md" />
												</Button>
											</Link>
											<Link href={"/package/abu-dhabi"}>
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
										src={"/images/altima-poto-7.png"}
										width={0}
										height={0}
										sizes="100vh"
										alt="Mosque"
										className=" h-44 w-full rounded-md"
									/>
									<div className="p-4">
										<p
											className={`${lilyFont.className} text-md font-semibold text-[#112A90] dark:text-white`}>
											Tempat Bersejarah Abu Dhabi
										</p>
										<p
											className={`${lilyFont.className} text-[#112A90] dark:text-white my-2 text-md font-semibold`}>
											Rp 42.000.000
										</p>
										<p className="text-sm font-normal text-black">
											Perjalanan mengunjungi tempat - tempat bersejarah yang
											berada di Abu Dhabi bersama keluarga.
										</p>
										<div className="flex md:block xl:flex justify-between items-center mt-8 gap-2">
											<Link href={""}>
												<Button className=" rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
													Konsultasi
													<FaWhatsapp className="text-md" />
												</Button>
											</Link>
											<Link href={"/package/abu-dhabi"}>
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
										src={"/images/altima-poto-7.png"}
										width={0}
										height={0}
										sizes="100vh"
										alt="Mosque"
										className=" h-44 w-full rounded-md"
									/>
									<div className="p-4">
										<p
											className={`${lilyFont.className} text-md font-semibold text-[#112A90] dark:text-white`}>
											Tempat Bersejarah Abu Dhabi
										</p>
										<p
											className={`${lilyFont.className} text-[#112A90] dark:text-white my-2 text-md font-semibold`}>
											Rp 42.000.000
										</p>
										<p className="text-sm font-normal text-black">
											Perjalanan mengunjungi tempat - tempat bersejarah yang
											berada di Abu Dhabi bersama keluarga.
										</p>
										<div className="flex md:block xl:flex justify-between items-center mt-8 gap-2">
											<Link href={""}>
												<Button className=" rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
													Konsultasi
													<FaWhatsapp className="text-md" />
												</Button>
											</Link>
											<Link href={"/package/abu-dhabi"}>
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
				</div>
				<div className="mt-8">
					<p className={`${lilyFont.className} text-md md:text-lg`}>
						Paket Bulan Madu
					</p>
					<p className="text-[#4C5E70] mt-2 mb-8 text-sm">
						Nikmati Liburan ke Dubai ataupun ke Abu Dhabi Bersama Kekasih.
					</p>
					<Carousel className="overflow-hidden p-2">
						<CarouselContent>
							<CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 p-0 ml-4">
								<div className="h-full dark:bg-white shadow-xl rounded-md ml-2.5 sm:ml-4 p-2">
									<Image
										src={"/images/altima-poto-7.png"}
										width={0}
										height={0}
										sizes="100vh"
										alt="Mosque"
										className=" h-44 w-full rounded-md"
									/>
									<div className="p-4">
										<p
											className={`${lilyFont.className} text-md font-semibold text-[#112A90] dark:text-white`}>
											Tempat Bersejarah Abu Dhabi
										</p>
										<p
											className={`${lilyFont.className} text-[#112A90] dark:text-white my-2 text-md font-semibold`}>
											Rp 42.000.000
										</p>
										<p className="text-sm font-normal text-black">
											Perjalanan mengunjungi tempat - tempat bersejarah yang
											berada di Abu Dhabi bersama keluarga.
										</p>
										<div className="flex md:block xl:flex justify-between items-center mt-8 gap-2">
											<Link href={""}>
												<Button className=" rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
													Konsultasi
													<FaWhatsapp className="text-md" />
												</Button>
											</Link>
											<Link href={"/package/abu-dhabi"}>
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
										src={"/images/altima-poto-7.png"}
										width={0}
										height={0}
										sizes="100vh"
										alt="Mosque"
										className=" h-44 w-full rounded-md"
									/>
									<div className="p-4">
										<p
											className={`${lilyFont.className} text-md font-semibold text-[#112A90] dark:text-white`}>
											Tempat Bersejarah Abu Dhabi
										</p>
										<p
											className={`${lilyFont.className} text-[#112A90] dark:text-white my-2 text-md font-semibold`}>
											Rp 42.000.000
										</p>
										<p className="text-sm font-normal text-black">
											Perjalanan mengunjungi tempat - tempat bersejarah yang
											berada di Abu Dhabi bersama keluarga.
										</p>
										<div className="flex md:block xl:flex justify-between items-center mt-8 gap-2">
											<Link href={""}>
												<Button className=" rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
													Konsultasi
													<FaWhatsapp className="text-md" />
												</Button>
											</Link>
											<Link href={"/package/abu-dhabi"}>
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
										src={"/images/altima-poto-7.png"}
										width={0}
										height={0}
										sizes="100vh"
										alt="Mosque"
										className=" h-44 w-full rounded-md"
									/>
									<div className="p-4">
										<p
											className={`${lilyFont.className} text-md font-semibold text-[#112A90] dark:text-white`}>
											Tempat Bersejarah Abu Dhabi
										</p>
										<p
											className={`${lilyFont.className} text-[#112A90] dark:text-white my-2 text-md font-semibold`}>
											Rp 42.000.000
										</p>
										<p className="text-sm font-normal text-black">
											Perjalanan mengunjungi tempat - tempat bersejarah yang
											berada di Abu Dhabi bersama keluarga.
										</p>
										<div className="flex md:block xl:flex justify-between items-center mt-8 gap-2">
											<Link href={""}>
												<Button className=" rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
													Konsultasi
													<FaWhatsapp className="text-md" />
												</Button>
											</Link>
											<Link href={"/package/abu-dhabi"}>
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
										src={"/images/altima-poto-7.png"}
										width={0}
										height={0}
										sizes="100vh"
										alt="Mosque"
										className=" h-44 w-full rounded-md"
									/>
									<div className="p-4">
										<p
											className={`${lilyFont.className} text-md font-semibold text-[#112A90] dark:text-white`}>
											Tempat Bersejarah Abu Dhabi
										</p>
										<p
											className={`${lilyFont.className} text-[#112A90] dark:text-white my-2 text-md font-semibold`}>
											Rp 42.000.000
										</p>
										<p className="text-sm font-normal text-black">
											Perjalanan mengunjungi tempat - tempat bersejarah yang
											berada di Abu Dhabi bersama keluarga.
										</p>
										<div className="flex md:block xl:flex justify-between items-center mt-8 gap-2">
											<Link href={""}>
												<Button className=" rounded-md py-4 flex items-center gap-2 mx-auto bg-white text-[#112A90] border border-[#112A90] hover:bg-[#112A90] hover:text-white hover:border-white cursor-pointer w-full md:w-auto">
													Konsultasi
													<FaWhatsapp className="text-md" />
												</Button>
											</Link>
											<Link href={"/package/abu-dhabi"}>
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
				</div>
			</section>
			<Footer />
		</main>
	);
}
