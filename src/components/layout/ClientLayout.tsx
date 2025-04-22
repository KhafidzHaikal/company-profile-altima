/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

interface User {
	name: string;
	email: string;
}

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const router = useRouter();
	const [isMounted, setIsMounted] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		if (!isMounted) return;

		if (
			pathname === "/login-admin-altima" ||
			pathname === "/register-just-admin"
		) {
			return;
		}

		const token = localStorage.getItem("token");
		const expiry = localStorage.getItem("tokenExpiry");
		const userData = localStorage.getItem("user");

		if (!token || !expiry) {
			router.push("/login-admin-altima");
			return;
		}

		const now = new Date().getTime();
		if (now > Number(expiry)) {
			router.push("/login-admin-altima");
			return;
		}

		if (userData) {
			try {
				setUser(JSON.parse(userData));
			} catch {
				logout();
			}
		}

		setIsAuthenticated(!!token);
	}, [isMounted, pathname]);

	const logout = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "You will be logged out.",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, logout",
		}).then((result: any) => {
			if (result.isConfirmed) {
				localStorage.removeItem("token");
				localStorage.removeItem("tokenExpiry");
				localStorage.removeItem("user");

				Swal.fire({
					title: "Logged out",
					text: "You have been successfully logged out.",
					icon: "success",
					timer: 1500,
					showConfirmButton: false,
				});

				setTimeout(() => {
					router.push("/login-admin-altima");
				}, 1500);
			}
		});
	};

	if (!isMounted) {
		return null;
	}

	if (
		pathname === "/login-admin-altima" ||
		pathname === "/register-just-admin"
	) {
		return <>{children}</>;
	}

	if (!isAuthenticated) {
		return null;
	}

	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default ClientLayout;
