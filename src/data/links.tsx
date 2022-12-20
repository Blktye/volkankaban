interface List {
	id: string;
	title: string;
	url: string;
	category?: string;
	background?: string;
}

export const linksList: List[] = [
    {
		id: "0",
		title: "Phone",
		url: "8323964569",
		background: `red`,
	  },
	  {
		id: "1",
		title: "Email",
		url: "youremail@hotmail.com",
		background: `red`,
	  },
	  {
		id: "2",
		title: "Youtube",
		url: "youtube.com/@volkankaban",
		background: `red`,
	  },
	  {
		id: "3",
		title: "Instagram",
		url: "instagram.com/imvolkankaban",
		background: `linear-gradient(73deg, rgb(232, 80, 80), rgb(172, 33, 214), rgb(89, 39, 227))`,
	  },
	  {
		id: "4",
		title: "TikTok",
		url: "tiktok.com/@volkankaban",
		background: `black`,
	  },
	  {
		id: "5",
		title: "Github",
		url: "github.com/volkankaban",
		background: `red`,
	  },
	  {
		id: "6",
		title: "Facebook",
		url: "volkankaban.com/imvolkankaban",
		background: `#1877F2`,
	  },
	  {
		id: "7",
		title: "Twitter",
		url: "twitter.com/imvolkankaban",
		background: `#1DA1F2 `,
	  },
	  {
		id: "8",
		title: "Website",
		url: "yourwebsiteurl.com",
		background: `red`,
	  },
];
