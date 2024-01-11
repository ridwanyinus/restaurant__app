import special1 from "public/assets/special1.png";
import special2 from "public/assets/special2.png";
import special3 from "public/assets/special3.png";
import special4 from "public/assets/special4.png";
import star from "public/assets/star.svg";
import blackStar from "public/assets/Starblack.svg";

export const navLinks = [
  {
    name: "Menu",
    link: "#specialMenu",
    id: "1",
  },
  {
    name: "News",
    link: "#news",
    id: "2",
  },
  {
    name: "Fine Dining",
    link: "#dining",
    id: "3",
  },
  {
    name: "About Us",
    link: "#about",
    id: "4",
  },
  {
    name: "Contact",
    link: "#footer",
    id: "5",
  },
];

export const specialData = [
  {
    imgurl: special1,
    name: "Spinach & Mushroom Quiche",
    label: "Indulge in Spinach & Mushroom Quiche: buttery crust, savory filling, golden cheese crown a symphony of flavors in each bite!",
    rating: [{ star }, { star }, { star }, { star }, { star }],
    id: 1,
  },
  {
    imgurl: special2,
    name: "Sweet Potato",
    label: "Savor Roasted Sweet Potatoes cubed, seasoned, oven-baked to golden perfection. A flavorful, nutritious delight in every bite!",
    rating: [{ star }, { star }, { star }, { star }, { blackStar }],
    id: 2,
  },
  {
    imgurl: special3,
    name: "Spaghetti",
    label: "Savor Spaghetti: al dente pasta in rich tomato sauce, crowned with Parmesan. A comforting, flavorful classic in every indulgent bite, delighting your senses!",
    rating: [{ star }, { star }, { star }, { star }, { star }],
    id: 3,
  },
  {
    imgurl: special4,
    name: "Chickpea Curry",
    label: "Savor Chickpea Curry: tender chickpeas, aromatic spices, and rich tomato sauce create a hearty, flavorful dish, elevating your dining experience!",
    rating: [{ star }, { star }, { star }, { star }],
    id: 4,
  },
];
