import { IoFastFoodOutline } from "react-icons/io5";
import { GiFruitTree, GiChickenOven } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { TbBottle } from "react-icons/tb";
import { FaIceCream, FaFishFins, FaBowlRice } from "react-icons/fa6";

export const DishCategories = [
  {
    id: "1",
    title: "Menu",
    category: "All",
    selected: true,
    image: <ImSpoonKnife size={40} />,
  },
  {
    id: "2",
    title: "Chicken",
    category: "chicken",
    selected: false,
    image: <GiChickenOven size={40} />,
  },
  {
    id: "3",
    title: "Fruits",
    category: "fruits",
    selected: false,
    image: <GiFruitTree size={40} />,
  },
  {
    id: "4",
    title: "Soft Drinks",
    category: "drinks",
    selected: false,
    image: <TbBottle size={40} />,
  },
  {
    id: "5",
    title: "Fast Foods",
    category: "fast-food",
    selected: false,
    image: <IoFastFoodOutline size={40} />,
  },
  {
    id: "7",
    title: "Icecreams",
    category: "icecreams",
    selected: false,
    image: <FaIceCream size={40} />,
  },
  {
    id: "8",
    title: "Fish",
    category: "fish",
    selected: false,
    image: <FaFishFins size={40} />,
  },
  {
    id: "9",
    title: "Rice",
    category: "rice",
    selected: false,
    image: <FaBowlRice size={40} />,
  },
  {
    id: "10",
    title: "Curry",
    category: "curry",
    selected: false,
    image: <FaBowlRice size={40} />,
  },
];
