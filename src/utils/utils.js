export const CATEGORIES = [
  {
    name: "Dresses",
    icon: "categories/dress.svg",
  },
  {
    name: "Tees",
    icon: "categories/tees.svg",
  },
  {
    name: "Swimwear",
    icon: "categories/swimwear.svg",
  },
  {
    name: "Denim",
    icon: "categories/denim.svg",
  },
  {
    name: "Tops",
    icon: "categories/tops.svg",
  },
  {
    name: "Beauty",
    icon: "categories/beauty.svg",
  },
];

export const FOOTER_SERVICE = [
  {
    title: "CONTACT",
    link: "#",
  },
  {
    title: "TRACK ORDER",
    link: "#",
  },
  {
    title: "DELIVERY & RETURNS",
    link: "#",
  },
  {
    title: "PAYMENT",
    link: "#",
  },
  {
    title: "MAKE A RETURN",
    link: "#",
  },
  {
    title: "FAQ",
    link: "#",
  },
];
export const FOOTER_INFO = [
  {
    title: "GIFT VOUCHERS",
    link: "#",
  },
  {
    title: "SIZE GUIDE",
    link: "#",
  },
  {
    title: "CAREERS AT MODNIKKY",
    link: "#",
  },
  {
    title: "ABOUT US",
    link: "#",
  },
  {
    title: "LEGAL POLICIES",
    link: "#",
  },
];

export const CLOTHES_ITEMS = [
  {
    id: "aa560608-a879-48a7-80b6-deff2806b250",
    name: "item1",
    imageUrl: "clothesItems/insta1.jpg",
    price: "13.00",
    lowPrice: "5.90",
  },
  {
    id: "a2bf824d-edd8-41f0-8b70-244334086ab4",
    name: "item2",
    imageUrl: "clothesItems/insta2.jpg",
    price: "8.00",
    lowPrice: "4.90",
  },
  {
    id: "4024535d-a498-4274-b7cb-f01ada962971",
    name: "item3",
    imageUrl: "clothesItems/insta3.jpg",
    price: "14.00",
    lowPrice: "5.90",
  },
  {
    id: "e51e71f6-6baf-4493-b3ae-25dc27cdc238",
    name: "item4",
    imageUrl: "clothesItems/insta4.jpg",
    price: "9.00",
    lowPrice: "5.90",
  },
  {
    id: "87d2b966-2431-43f3-8c0d-2c8723474dfc",
    name: "item5",
    imageUrl: "clothesItems/insta1.jpg",
    price: "13.00",
    lowPrice: "5.90",
  },
];

const madeQueueFrom = (array, start, end) => {
  return array.slice(start, end);
};

const decrement = (index) => {
  if (index > 0) {
    return --index;
  }
  return false;
};

const increment = (index, array) => {
  if (index < array.length) {
    return ++index;
  }
  return false;
};

export { madeQueueFrom, increment, decrement };
