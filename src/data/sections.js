import { asset } from "../lib/assets";

const card = (n) => asset(`images/cards/image${n}.jpg`);

export const filters = [
  { id: "all", label: "All" },
  { id: "music", label: "Music" },
  { id: "artists", label: "Artists" },
  { id: "radio", label: "Radio" },
  { id: "charts", label: "Charts" },
];

// `round` renders artist portraits as circles; `category` drives the filter chips.
export const sections = [
  {
    id: "trending-songs",
    title: "Trending Songs",
    category: "music",
    items: [
      { img: card(1), title: "Majboor", info: "Sheheryar Rehan, Zoha Waseem" },
      { img: card(2), title: "Hum", info: "Murtaza Qizilbash" },
      { img: card(3), title: "Khasara", info: "Abdul Hunnan, Samar Jafri" },
      { img: card(4), title: "Moves", info: "Shubh" },
      { img: card(5), title: "Beauty And A Beat", info: "Justin Bieber, Nicki Minaj" },
    ],
  },
  {
    id: "popular-artists",
    title: "Popular artists",
    category: "artists",
    round: true,
    items: [
      { img: card(6), title: "Pritam", info: "Artist" },
      { img: card(7), title: "Afusic", info: "Artist" },
      { img: card(8), title: "Atif Aslam", info: "Artist" },
      { img: card(9), title: "Shubh", info: "Artist" },
      { img: card(10), title: "Anuv Jain", info: "Artist" },
    ],
  },
  {
    id: "popular-albums",
    title: "Popular albums and singles",
    category: "music",
    items: [
      { img: card(11), title: "Pritam", info: "Artist" },
      { img: card(12), title: "Hum", info: "Murtaza Qizilbash" },
      { img: card(13), title: "Khasara", info: "Abdul Hunnan, Samar Jafri" },
      { img: card(14), title: "Moves", info: "Shubh" },
      { img: card(15), title: "Beauty And A Beat", info: "Justin Bieber, Nicki Minaj" },
    ],
  },
  {
    id: "popular-radio",
    title: "Popular radio",
    category: "radio",
    items: [
      { img: card(16), info: "With Sachin-Jigar, Jeet Gannguli, Pritam and more" },
      { img: card(17), info: "With Sidhu Moose Wala, AP Dhillon, Yo Yo Honey Singh and more" },
      { img: card(18), info: "With Afusic, Anuv Jain, Talha Anjum and more" },
      { img: card(19), info: "With Shubh, AP Dhillon, Sidhu Moose Wala and more" },
      { img: card(20), info: "By Spotify" },
    ],
  },
  {
    id: "future-charts",
    title: "Future Charts",
    category: "charts",
    items: [
      { img: card(21), info: "Your weekly update of the most played tracks right now: Global." },
      { img: card(22), info: "Your weekly update of the most played tracks right now: Pakistan." },
      { img: card(23), info: "Your weekly update of the most played tracks right now: Global." },
      { img: card(24), info: "Your weekly update of the most played tracks right now: Pakistan." },
      { img: card(25), info: "Your weekly update of the most played tracks right now: Global." },
    ],
  },
];
