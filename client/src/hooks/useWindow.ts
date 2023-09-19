import { useEffect, useState } from "react";

type WindowSize = {
  width: number;
  height: number;
}

export default function useWindowSize(): WindowSize {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: typeof window !== "undefined" ? window.innerWidth : 1200,
		height: typeof window !== "undefined" ? window.innerHeight : 800,
	});

	function changeWindowSize(): void {
		if (typeof window !== "undefined") {
			setWindowSize({ width: window.innerWidth, height: window.innerHeight });
		}
	}

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("resize", changeWindowSize);

			return () => {
				window.removeEventListener("resize", changeWindowSize);
			};
		}
	}, []);

	return windowSize;
}
