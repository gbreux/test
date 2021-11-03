import { useRouter } from "next/router";
import Head from "next/head";
import Card from "components/Card";

export default function Cards() {
	const { query } = useRouter();
	const cards = (query.id as string)?.split(",") || [];

	return (
		<section
			className="flex items-center justify-center min-h-fullScreen flex-col"
			style={{
				background: "linear-gradient(180deg, #0D0C11 0%, #0707FF 47.92%)",
			}}
		>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
					rel="stylesheet"
				/>
				<title>Sorare - Discover your cards</title>
			</Head>
			<div className="whitespace-nowrap my-auto overflow-auto w-full max-w-full text-center py-20">
				{cards.map((id) => (
					<div className="p-6 inline-flex" key={id}>
						<Card slug={id} />
					</div>
				))}
			</div>
			<footer className="w-full">
				<div className="border-line w-full h-24" />
				<div className="bg w-full h-24" />
				<style jsx>{`
					.bg {
						margin-top: -86px;
						background-color: #0d0c11;
						border-top-left-radius: 100% 10vw;
						border-top-right-radius: 100% 10vw;
					}
					.border-line {
						background: linear-gradient(
							0.25turn,
							#0e0633,
							#d13f5b,
							#fb4aff,
							#d13f5b,
							#0e0633
						);
						border-top-left-radius: 100% 10vw;
						border-top-right-radius: 100% 10vw;
					}
				`}</style>
			</footer>
		</section>
	);
}
