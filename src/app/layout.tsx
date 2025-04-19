import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Altima",
	description: "Generated by Altima",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="shortcut icon" href="/images/favicon.ico" />
			</head>
			<body
				className={`${inter.variable} font-inter antialiased flex flex-col min-h-screen scroll-smoot mx-auto`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}
