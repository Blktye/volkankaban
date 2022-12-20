import React from "react";

import { linksList } from "../../data/links";
import LinkElement from "../profile/LinkElement";

function Socials() {
	const imgFormatter = (title: string) =>
		title.toLowerCase().split(" ").join("");

	return (
		<ul className="flex justify-center gap-8">
			{linksList
				.filter(({ category }) => category)
				.map(({ title, url }) => (
					<li
						key={title}
						className="backdrop rounded-lg bg-blue-200 duration-300 ease-in-out hover:scale-125"
					>
						<LinkElement url={url}>
							<img
								className="aspect-square w-12 p-1"
								src={`./images/icons/${imgFormatter(title)}.svg`}
								alt={title}
							/>
						</LinkElement>
					</li>
				))}
		</ul>
	);
}

export default Socials;
