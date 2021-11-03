const textColor = {
	common: {
		label: "rgba(255,255,255,0.6)",
		text: "rgba(255,255,255,1)",
	},
	rare: {
		label: "rgba(255,255,255,0.6)",
		text: "rgba(255,255,255,1)",
	},
	limited: {
		label: "rgba(73,73,73,0.6)",
		text: "rgba(73,73,73,1)",
	},
	unique: {
		label: "rgba(255,255,255,0.6)",
		text: "rgba(255,255,255,1)",
	},
	super_rare: {
		label: "rgba(255,255,255,0.6)",
		text: "rgba(255,255,255,1)",
	},
};

export type Player = {
	age: number;
	name: string;
	shirtNumber: number;
	position: string;
	rarity: string;
	season: { name: string };
	teamPictureUrl: string;
	playerSeasonPicture: { pictureUrl: string };
	team: {
		country: {
			code: string;
		};
	};
};

export default function PlayerCard({ player }: { player: Player }) {
	const currentColor = textColor[player?.rarity || "common"];
	return (
		<svg viewBox="0 0 514 831" fill="none">
			<g id="card">
				<image
					width="514"
					height="831"
					xlinkHref={`/bg--${player?.rarity || "common"}.png`}
				/>
				<g id="picture">
					<mask
						id="mask0_102:11"
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="514"
						height="591"
					>
						<rect
							y="0"
							width="514"
							height="591"
							fill="url(#linearGradientMAsk)"
						/>
					</mask>
					<g mask="url(#mask0_102:11)">
						<image
							x="-30"
							y="20"
							width="555"
							xlinkHref={player?.playerSeasonPicture?.pictureUrl}
						/>
					</g>
				</g>
				<g id="scarcity">
					<text
						id="scarcity_2"
						fill={currentColor.text}
						xmlSpace="preserve"
						fontFamily="Roboto"
						fontSize="26"
						letterSpacing="0em"
					>
						<tspan x="75" y="85.8867" textAnchor="middle">
							{player?.rarity.toUpperCase()}
						</tspan>
					</text>
					<text
						id="release_date"
						fill={currentColor.label}
						fillOpacity="0.62"
						xmlSpace="preserve"
						fontFamily="Roboto"
						fontSize="26"
						letterSpacing="0em"
					>
						<tspan x="28" y="54.8867">
							{player?.season?.name}
						</tspan>
					</text>
				</g>
				<text
					id="name"
					fill={currentColor.text}
					xmlSpace="preserve"
					fontFamily="Roboto"
					fontSize="52"
					fontWeight="500"
					letterSpacing="0em"
				>
					<tspan x="257" y="521.273" textAnchor="middle">
						{player?.name?.split(" ")?.[0]}
					</tspan>
					<tspan x="257" y="582.273" textAnchor="middle">
						{player?.name?.split(" ")?.[1]}
					</tspan>
				</text>
				<g id="age">
					<text
						id="age_2"
						fill={currentColor.text}
						xmlSpace="preserve"
						fontFamily="Roboto"
						fontSize="26"
						letterSpacing="0em"
					>
						<tspan x="73" y="689.887">
							{player?.age}
						</tspan>
					</text>
					<text
						id="label"
						fill={currentColor.label}
						fillOpacity="0.62"
						xmlSpace="preserve"
						fontFamily="Roboto"
						fontSize="18"
						letterSpacing="0em"
					>
						<tspan x="68" y="645.652">
							AGE
						</tspan>
					</text>
				</g>
				<g id="position">
					<text
						id="position_2"
						fill={currentColor.text}
						xmlSpace="preserve"
						fontFamily="Roboto"
						fontSize="26"
						letterSpacing="0em"
					>
						<tspan x="257" y="689.887" textAnchor="middle">
							{player?.position}
						</tspan>
					</text>
					<text
						id="label_2"
						fill={currentColor.label}
						fillOpacity="0.62"
						xmlSpace="preserve"
						fontFamily="Roboto"
						fontSize="18"
						letterSpacing="0em"
					>
						<tspan x="217" y="644.652">
							POSITION
						</tspan>
					</text>
				</g>
				<g id="country">
					<text
						id="country_2"
						fill={currentColor.text}
						xmlSpace="preserve"
						fontFamily="Roboto"
						fontSize="26"
						letterSpacing="0em"
					>
						<tspan x="412" y="689.887">
							{player?.team?.country?.code.toUpperCase()}
						</tspan>
					</text>
					<text
						id="label_3"
						fill={currentColor.label}
						fillOpacity="0.62"
						xmlSpace="preserve"
						fontFamily="Roboto"
						fontSize="18"
						letterSpacing="0em"
					>
						<tspan x="387" y="644.652">
							COUNTRY
						</tspan>
					</text>
				</g>
				<g id="club">
					<text
						id="id"
						fill={currentColor.text}
						xmlSpace="preserve"
						fontFamily="Roboto"
						fontSize="26"
						letterSpacing="0em"
					>
						<tspan x="455" y="125.887" textAnchor="middle">
							{player?.shirtNumber}
						</tspan>
					</text>

					<image
						width="48"
						height="63"
						id="club"
						x="430"
						y="28"
						xlinkHref={player?.teamPictureUrl}
					/>
				</g>
			</g>
			<defs>
				<linearGradient
					id="linearGradientMAsk"
					x1="257"
					y1="600"
					x2="257"
					y2="200"
					gradientUnits="userSpaceOnUse"
				>
					<stop />
					<stop offset="1" stopColor="#ffffff" />
				</linearGradient>
			</defs>
		</svg>
	);
}
