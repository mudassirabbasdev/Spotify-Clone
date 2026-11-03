const img = (n) => `./assets/image${n}.jpg`;

export const sections = [
  {
    title: "Trending Songs",
    cards: [
      { img: img(1), title: "Majboor", info: "Sheheryar Rehan,Zoha Waseem" },
      { img: img(2), title: "Hum", info: "Murtaza Qizilbash" },
      { img: img(3), title: "Khasara", info: "Abdul Hunnan, Samar Jafri" },
      { img: img(4), title: "Moves", info: "Shubh" },
      { img: img(5), title: "Beauty And A Beat", info: "Justin Bieber, Nicki Minaj" },
    ],
  },
  {
    title: "Popular artist",
    cards: [
      { img: img(6), title: "Pritam", info: "Artist" },
      { img: img(7), title: "Afusic", info: "Artist" },
      { img: img(8), title: "Atif Aslam", info: "Artist" },
      { img: img(9), title: "Shubh", info: "Artist" },
      { img: img(10), title: "Anuv Jain", info: "Artist" },
    ],
  },
  {
    title: "Popular albums and singles",
    cards: [
      { img: img(11), title: "Pritam", info: "Artist" },
      { img: img(12), title: "Hum", info: "Murtaza Qizilbash" },
      { img: img(13), title: "Khasara", info: "Abdul Hunnan, Samar Jafri" },
      { img: img(14), title: "Moves", info: "Shubh" },
      { img: img(15), title: "Beauty And A Beat", info: "Justin Bieber, Nicki Minaj" },
    ],
  },
  {
    title: "Popular radio",
    cards: [
      { img: img(16), info: "With Sachin-Jigar Jeet Gunnguli, Pritam and more" },
      { img: img(17), info: "With Sidhu Moose Wala, AP Dhillon, YO YO Honey Singh and more" },
      { img: img(18), info: "With Afusic, Anuv Jain, Talha Anjum and more" },
      { img: img(19), info: "With Shubh, AP Dhillon, Sidhu Moose Wala and more" },
      { img: img(20), info: "By Spotify" },
    ],
  },
  {
    title: "Future Charts",
    cards: [
      { img: img(21), info: "Your weekly update of the most played tracks right now - Global." },
      { img: img(22), info: "Your weekly update of the most played tracks right now - Pakistan." },
      { img: img(23), info: "Your weekly update of the most played tracks right now - Global." },
      { img: img(24), info: "Your weekly update of the most played tracks right now - Pakistan." },
      { img: img(25), info: "Your weekly update of the most played tracks right now - Global." },
    ],
  },
];

export const libraryBoxes = [
  { title: "Create your first playlist", text: "It's easy, we'll help you", cta: "Create playlist" },
  { title: "Let's find some podcast to follow", text: "We'll keep you updated on new episodes", cta: "Browse podcasts" },
];

export const legalLinks = [
  "Legal",
  "Safety & Privacy Center",
  "Privacy Policy",
  "Cookies",
  "About Ads",
  "Accessibility",
];

export const footerColumns = [
  { title: "Company", links: ["About", "Jobs", "For the Record"] },
  { title: "Communities", links: ["For Artist", "Developers", "Advertising", "Investors", "Vendors"] },
  { title: "Useful links", links: ["Support", "Free Mobile App", "Popular by Country", "Import your music"] },
  { title: "Spotify Plans", links: ["Premium Duo", "Premium Family", "Premium Student", "Spotify Free"] },
];

export const socials = ["fa-instagram", "fa-square-twitter", "fa-facebook"];

export const navLinks = ["Premium", "Support", "Download"];
