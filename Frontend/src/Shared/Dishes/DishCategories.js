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
    image: <ImSpoonKnife size={40} />,
  },
  {
    id: "2",
    title: "Chicken",
    category: "chicken",
    image: <GiChickenOven size={40} />,
  },
  {
    id: "3",
    title: "Fruits",
    category: "fruits",
    image: <GiFruitTree size={40} />,
  },
  {
    id: "4",
    title: "Soft Drinks",
    category: "drinks",
    image: <TbBottle size={40} />,
  },
  {
    id: "5",
    title: "Fast Foods",
    category: "fast-food",
    image: <IoFastFoodOutline size={40} />,
  },
  {
    id: "7",
    title: "Icecreams",
    category: "icecreams",
    image: <FaIceCream size={40} />,
  },
  {
    id: "8",
    title: "Fish",
    category: "fish",
    image: <FaFishFins size={40} />,
  },
  {
    id: "9",
    title: "Rice",
    category: "rice",
    image: <FaBowlRice size={40} />,
  },
  {
    id: "10",
    title: "Curry",
    category: "curry",
    image: <FaBowlRice size={40} />,
  },
];
