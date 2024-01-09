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
    label: "Delight in Spinach & Mushroom Quiche: a buttery crust, savory mushroom-spinach filling, and a golden cheese crown—a symphony of flavors in each bite!",
    rating: [{ star }, { star }, { star }, { star }, { star }],
  },
  {
    imgurl: special2,
    name: "Sweet Potato",
    label: "Savor the goodness of Roasted Sweet Potatoes—cubed, seasoned, and oven-baked to golden perfection. A flavorful, nutritious delight in every bite!",
    rating: [{ star }, { star }, { star }, { star }, { blackStar }],
  },
  {
    imgurl: special3,
    name: "Spaghetti",
    label: "Indulge in the timeless classic of Spaghetti — al dente pasta draped in rich tomato sauce, topped with grated Parmesan. A comforting, flavorful delight awaits!",
    rating: [{ star }, { star }, { star }, { star }, { star }],
  },
  {
    imgurl: special4,
    name: "Chickpea Curry",
    label: "Savor Chickpea Curry: tender chickpeas, aromatic spices, and a rich tomato sauce. A hearty, flavorful dish that elevates your dining experience!",
    rating: [{ star }, { star }, { star }, { star }, { star }],
  },
];
