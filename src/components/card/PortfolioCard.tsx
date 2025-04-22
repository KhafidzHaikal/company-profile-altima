"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
interface ImageData {
	id: number;
	source: string;
}

export default function PortfolioCard() {
	const [images, setImages] = useState<ImageData[]>([]);

	useEffect(() => {
		const fetchImages = async () => {
			const res = await fetch("/api/images");
			if (!res.ok) return console.error("Failed to load images");

			const data = await res.json();
			setImages(data);
		};

		fetchImages();
	}, []);
	return (
		<div className="px-4 py-10 lg:px-20">
			<div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
				{images.map((img) => (
					<div
						key={img.id}
						className="break-inside-avoid overflow-hidden rounded-lg">
						<Image
							src={img.source}
							alt={`Optima Portfolio ${img.id}`}
							width={500}
							height={500}
							className="w-full h-auto rounded-lg object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
