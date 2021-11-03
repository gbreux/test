export default function Loader({ className = "", loading = false }) {
	return (
		<div className={className}>
			<div className="relative">
				<svg viewBox="0 0 151 151">
					<path
						className={`${loading ? "animate-spinReverse" : ""} origin-center`}
						d="M61,1.51C4.93,13.13-18.71,78.08,16.8,123a73.83,73.83,0,0,0,72.72,26.45c56.09-11.6,79.74-76.55,44.21-121.52A73.86,73.86,0,0,0,61,1.51Zm79.25,85.84c-2.86,16.19-14.27,27.7-25.49,25.72a15.28,15.28,0,0,1-3.42-1,1,1,0,0,0-1.41.34,1,1,0,0,0,0,1,14.09,14.09,0,0,1,.77,3.07c1.58,11.27-10.32,22.29-26.64,24.58s-30.73-5-32.33-16.29a13.49,13.49,0,0,1,0-3.59A1,1,0,0,0,51,120a1,1,0,0,0-1,.29,14.75,14.75,0,0,1-2.67,1.67c-10.24,5-24.39-2.92-31.59-17.69S11,73.34,21.22,68.34a14.85,14.85,0,0,1,3.36-1.16,1,1,0,0,0,.94-1.1,1,1,0,0,0-.58-.85,14.33,14.33,0,0,1-2.41-2c-7.92-8.2-4.76-24.11,7.06-35.52s27.83-14,35.75-5.83a15,15,0,0,1,2.15,2.87,1,1,0,0,0,2-.26,14,14,0,0,1,1.23-2.9c5.35-10.07,21.51-12,36-4.25s21.94,22.12,16.58,32.18a13.85,13.85,0,0,1-2,2.94,1,1,0,0,0-.1,1.45,1,1,0,0,0,1,.33,14.47,14.47,0,0,1,3.08.21C136.36,56.43,143.12,71.15,140.26,87.35Z"
						fill="currentColor"
					/>
				</svg>
				<svg
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
					viewBox="0 0 151 151"
				>
					<path
						className={`${loading ? "animate-spin" : ""} origin-center`}
						d="M108.73,58.32c-6.53.79-14.21-.66-21.51-4.53s-13-9.69-16-15.69a1,1,0,0,0-2,.27c-1.27,6.45-5,13.31-11,19.05S45.07,66.81,38.46,67.76a1,1,0,0,0-1,1,1,1,0,0,0,.64.94c5.75,3.2,11.08,8.88,14.73,16.3,3.7,7.59,4.85,15.51,3.7,22.09a1,1,0,0,0,1.78,1c4.81-4.49,11.87-7.84,20-9,8.36-1.17,16.23.19,22.14,3.31A1,1,0,0,0,102,102c-2.78-6-3.78-13.72-2.35-21.84,1.47-8.32,5.2-15.37,10-20.05a1,1,0,0,0,.21-1.43A1,1,0,0,0,108.73,58.32Z"
						fill="currentColor"
					/>
				</svg>
			</div>
		</div>
	);
}
