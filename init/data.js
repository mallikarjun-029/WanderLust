const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and direct beach access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259],
    },
  },

  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of New York City in this stylish loft apartment with skyline views and modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "rooms",
    geometry: {
      type: "Point",
      coordinates: [-74.0060, 40.7128],
    },
  },

  {
    title: "Mountain Retreat",
    description:
      "Relax in a peaceful mountain cabin surrounded by pine forests and breathtaking scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911],
    },
  },

  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience authentic Tuscan living in a beautifully restored villa surrounded by vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "iconic",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696],
    },
  },

  {
    title: "Secluded Treehouse Getaway",
    description:
      "Enjoy a magical stay among the trees with modern comforts and spectacular forest views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [-122.6765, 45.5231],
    },
  },

  {
    title: "Beachfront Paradise",
    description:
      "Wake up to crystal-clear Caribbean waters in this luxurious beachfront condo.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancún",
    country: "Mexico",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [-86.8515, 21.1619],
    },
  },

  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your vacation kayaking, fishing, and relaxing beside beautiful Lake Tahoe.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-120.0324, 39.0968],
    },
  },

  {
    title: "Luxury Penthouse with City Views",
    description:
      "Experience premium living with floor-to-ceiling windows overlooking Los Angeles.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [-118.2437, 34.0522],
    },
  },

  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Enjoy direct access to world-famous ski slopes from this luxury alpine chalet.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [7.2263, 46.0960],
    },
  },

  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Watch the Great Migration and enjoy unforgettable wildlife experiences from your luxury safari lodge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [34.6857, -2.3333],
    },
  },
    {
    title: "Historic Canal House",
    description:
      "Stay in a beautifully preserved canal house in Amsterdam's historic district with picturesque waterfront views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "iconic",
    geometry: {
      type: "Point",
      coordinates: [4.9041, 52.3676],
    },
  },

  {
    title: "Private Island Retreat",
    description:
      "Enjoy complete privacy on your own tropical island with crystal-clear waters and white sandy beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [178.0650, -17.7134],
    },
  },

  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Relax in a charming countryside cottage surrounded by rolling green hills and peaceful villages.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "farms",
    geometry: {
      type: "Point",
      coordinates: [-1.8433, 51.8330],
    },
  },

  {
    title: "Historic Brownstone in Boston",
    description:
      "Experience classic Boston charm in this elegant brownstone close to historic landmarks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "iconic",
    geometry: {
      type: "Point",
      coordinates: [-71.0589, 42.3601],
    },
  },

  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax in a luxurious beachfront bungalow featuring a private pool and stunning ocean sunsets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095],
    },
  },

  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking views of the Canadian Rockies from this cozy mountain cabin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-115.5708, 51.1784],
    },
  },

  {
    title: "Art Deco Apartment in Miami",
    description:
      "Stay in a stylish Art Deco apartment just minutes from South Beach and vibrant nightlife.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    category: "rooms",
    geometry: {
      type: "Point",
      coordinates: [-80.1918, 25.7617],
    },
  },

  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a luxurious villa featuring an infinity pool overlooking the Andaman Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [98.3381, 7.8804],
    },
  },

  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in a magnificent castle surrounded by Scotland's breathtaking Highlands.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [-4.2026, 57.1200],
    },
  },

  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience unmatched luxury in an elegant desert resort with private pools and world-class amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048],
    },
  },
    {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by Montana's breathtaking forests and wildlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-110.3626, 46.8797],
    },
  },

  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy spectacular sunsets and crystal-clear Mediterranean waters from this luxurious beachfront villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [25.3289, 37.4467],
    },
  },

  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Reconnect with nature in this sustainable treehouse surrounded by lush rainforest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [-84.0907, 9.9281],
    },
  },

  {
    title: "Historic Cottage in Charleston",
    description:
      "Stay in a beautifully restored historic cottage with a private courtyard in charming Charleston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    category: "iconic",
    geometry: {
      type: "Point",
      coordinates: [-79.9311, 32.7765],
    },
  },

  {
    title: "Modern Apartment in Tokyo",
    description:
      "Discover Tokyo from this stylish apartment conveniently located near shopping, restaurants, and transport.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "rooms",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895],
    },
  },

  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Wake up to peaceful lake views and enjoy hiking, kayaking, and fishing in the White Mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-71.5724, 43.1939],
    },
  },

  {
    title: "Luxury Villa in the Maldives",
    description:
      "Stay in an overwater villa with panoramic ocean views, private deck, and direct lagoon access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [73.2207, 3.2028],
    },
  },

  {
    title: "Ski Chalet in Aspen",
    description:
      "Experience world-class skiing and luxury accommodations in the heart of Aspen.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911],
    },
  },

  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a peaceful beach house on Costa Rica's Pacific coast with surfing, wildlife, and unforgettable sunsets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Santa Teresa",
    country: "Costa Rica",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [-85.1683, 9.6439],
    },
  },

  {
    title: "Luxury Desert Camp",
    description:
      "Spend the night beneath a sky full of stars in a premium desert camp offering modern comforts and authentic local experiences.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Wadi Rum",
    country: "Jordan",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [35.4444, 29.5735],
    },
  },
];

module.exports = { data: sampleListings };