"use client";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function ClientToaster() {
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	return mounted ? <Toaster position="top-center" /> : null;
}
