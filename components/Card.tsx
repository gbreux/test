import { useRef, useState } from "react";
import { gql } from "@apollo/client";

import client from "apollo-client.js";
import Loader from "components/Loader";
import PlayerCard, { Player } from "components/PlayerCard";

export default function Card({ slug }) {
	const [loading, setloading] = useState(false);
	const [player, setplayer] = useState<Player>();
	const ref = useRef<any>();

	return (
		<article
			ref={ref}
			onMouseEnter={() => {
				ref.current.animate(
					[
						{
							transform: "perspective(150px) rotate3d(1, 0, 0, 0deg)",
						},
						{ transform: "perspective(150px) rotate3d(1, 0, 0, 2deg)" },
						{
							transform: "scale(1.1)",
						},
					],
					{ duration: 300, fill: "forwards", easing: "ease" }
				);
			}}
			onMouseLeave={() => {
				ref.current.animate(
					[{ transform: "scale(1.1)" }, { transform: "scale(1)" }],
					{ duration: 150, fill: "forwards" }
				);
			}}
		>
			<div className={`card ${player && !loading ? "card--active" : ""}`}>
				<div className="card-inner" style={{ height: 831 / 2, width: 514 / 2 }}>
					<button
						className="card-front flex items-center justify-center relative bg-gray-900 h-full w-full cursor-pointer rounded-xl transition-shadow shadow-sm hover:shadow-2xl"
						onClick={() => reveal(slug)}
						tabIndex={player && !loading ? -1 : 0}
					>
						<Loader className="w-16 text-white" loading={loading} />
					</button>
					<div className="card-back h-full w-full rounded-xl overflow-hidden transition-shadow shadow-sm hover:shadow-2xl">
						<PlayerCard player={player} />
					</div>
				</div>
			</div>
		</article>
	);

	async function reveal(slug: string) {
		setloading(true);
		let data: { card: Player };
		try {
			const result = await client.query({
				query: gql`
      {
        card(slug: "${slug}") {
          slug,
          age,
          shirtNumber,
          name,
          position,
          rarity,
          season {
            name
          },
          teamPictureUrl,
          playerSeasonPicture { pictureUrl }
          team {
            ... on Club {
              country {
                code
              }
            }
          }
        }
      }
    `,
			});
			data = result.data;
			setplayer(data?.card);
		} catch (e) {}
		setTimeout(() => {
			setloading(false);
		}, 300); // Delay loading for suspense because api is too fast
	}
}
