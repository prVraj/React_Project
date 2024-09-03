import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
    {
        name: "Boiled Egg",
        price: 10,
        text: "A simple and nutritious breakfast option, boiled to perfection.",
        image: "/images/egg.png",
        type: "breakfast",
    },
    {
        name: "RAMEN",
        price: 25,
        text: "A flavorful and hearty bowl of ramen, perfect for lunch.",
        image: "/images/ramen.png",
        type: "lunch",
    },
    {
        name: "GRILLED CHICKEN",
        price: 45,
        text: "Tender and juicy grilled chicken, ideal for a satisfying dinner.",
        image: "/images/chicken.png",
        type: "dinner",
    },
    {
        name: "CAKE",
        price: 18,
        text: "A delightful and sweet treat, perfect to start your morning.",
        image: "/images/cake.png",
        type: "breakfast",
    },
    {
        name: "BURGER",
        price: 23,
        text: "A classic and juicy burger, great for a quick lunch.",
        image: "/images/burger.png",
        type: "lunch",
    },
    {
        name: "PANCAKE",
        price: 25,
        text: "Fluffy pancakes served with syrup, a delicious dinner choice.",
        image: "/images/pancake.png",
        type: "dinner",
    },
];


  res.json(foodData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
