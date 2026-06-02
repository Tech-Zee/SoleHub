import air1 from "./assets/airrunner.png";
import air2 from "./assets/airrunner2.png"
import air3 from "./assets/airrunner3.png"
import glide1 from "./assets/glide1.png"
import glide2 from "./assets/glide2.png"
import glide3 from "./assets/glide3.png"
import pulse1 from "./assets/pulse1.png"
import pulse2 from "./assets/pulse2.png"
import pulse3 from "./assets/pulse3.png"
import neo1 from "./assets/neo1.png"
import neo2 from "./assets/neo2.png"
import neo3 from "./assets/neo3.png"
import cloud1 from "./assets/cloud1.png"
import cloud2 from "./assets/cloud2.png"
import cloud3 from "./assets/cloud3.png"
import lite1 from "./assets/lite1.png"
import lite2 from "./assets/lite2.png"
import lite3 from "./assets/lite3.png"
import classic1 from "./assets/classic1.png"
import classic2 from "./assets/classic2.png"
import classic3 from "./assets/classic3.png"
import urban1 from "./assets/urban1.png"
import urban2 from "./assets/urban2.png"
import urban3 from "./assets/urban3.png"
import desert1 from "./assets/desert1.png"
import desert2 from "./assets/desert2.png"
import desert3 from "./assets/desert3.png"
import winter1 from "./assets/winter1.png"
import winter2 from "./assets/winter2.png"
import winter3 from "./assets/winter3.png"
import street1 from "./assets/street1.png"
import street2 from "./assets/street2.png"
import street3 from "./assets/street3.png"
import rugged1 from "./assets/rugged1.png"
import rugged2 from "./assets/rugged2.png"
import rugged3 from "./assets/rugged3.png"
import beach1 from "./assets/beach1.png"
import beach2 from "./assets/beach2.png"
import beach3 from "./assets/beach3.png"
import summer1 from "./assets/summer1.png"
import summer2 from "./assets/summer2.png"
import summer3 from "./assets/summer3.png"
import ocean1 from "./assets/ocean1.png"
import ocean2 from "./assets/ocean2.png"
import ocean3 from "./assets/ocean3.png"
import relax1 from "./assets/relax1.png"
import relax2 from "./assets/relax2.png"
import relax3 from "./assets/relax3.png"
import sunny1 from "./assets/sunny1.png"
import sunny2 from "./assets/sunny2.png"
import sunny3 from "./assets/sunny3.png"
import pool1 from "./assets/pool1.png"
import pool2 from "./assets/pool2.png"
import pool3 from "./assets/pool3.png"
import pro1 from "./assets/pro1.png"
import pro2 from "./assets/pro2.png"
import pro3 from "./assets/pro3.png"
import speed1 from "./assets/speed1.png"
import speed2 from "./assets/speed2.png"
import speed3 from "./assets/speed3.png"
import athletic1 from "./assets/athletic1.png"
import athletic2 from "./assets/athletic2.png"
import athletic3 from "./assets/athletic3.png"
import ultra1 from "./assets/ultra1.png"
import ultra2 from "./assets/ultra2.png"
import ultra3 from "./assets/ultra3.png"
import power1 from "./assets/power1.png"
import power2 from "./assets/power2.png"
import power3 from "./assets/power3.png"
import gym1 from "./assets/gym1.png"
import gym2 from "./assets/gym2.png"
import gym3 from "./assets/gym3.png"



export const products =
  [
{
  id: 1,
  name: "Air Flex Runner",
  category: "sneakers",
  price: 120,
  rating: 4.5,
  inStock: true,
  tags: ["bestsellers"],
  image: air1,
  images: [air1, air2, air3],
  description: "Lightweight sneaker designed for everyday comfort, breathability, and smooth performance."
},
{
  id: 2,
  name: "Urban Glide",
  category: "sneakers",
  price: 140,
  rating: 4,
  inStock: true,
  tags: ["newarrivals"],
  image: glide1,
  images: [glide1, glide2, glide3],
  description: "Modern street-style sneaker built for comfort, durability, and urban movement."
},
{
  id: 3,
  name: "Street Pulse",
  category: "sneakers",
  price: 500,
  rating: 3.5,
  inStock: true,
  tags: ["newarrivals"],
  image: pulse2,
  images: [pulse1, pulse2, pulse3],
  description: "Bold performance sneaker with responsive cushioning for daily wear and style."
},
{
  id: 4,
  name: "Neo Runner X",
  category: "sneakers",
  price: 350,
  rating: 5,
  inStock: true,
  tags: ["bestsellers"],
  image: neo1,
  images: [neo1, neo2, neo3],
  description: "High-performance runner designed with futuristic comfort and maximum support."
},
{
  id: 5,
  name: "Cloud Step",
  category: "sneakers",
  price: 250,
  rating: 4,
  inStock: false,
  tags: ["newarrivals"],
  image: cloud1,
  images: [cloud1, cloud2, cloud3],
  description: "Ultra-soft cushioning sneaker that feels like walking on clouds all day."
},
{
  id: 6,
  name: "Velocity Lite",
  category: "sneakers",
  price: 125,
  rating: 4.2,
  inStock: true,
  tags: ["newarrivals"],
  image: lite1,
  images: [lite1, lite2, lite3],
  description: "Lightweight speed-focused sneaker designed for agility and everyday performance."
},

{
  id: 7,
  name: "Classic Leather Boot",
  category: "boots",
  price: 200,
  rating: 5,
  inStock: true,
  tags: ["bestsellers"],
  image: classic1,
  images: [classic1, classic2, classic3],
  description: "Premium leather boot with timeless design, built for durability and style."
},

{
  id: 8,
  name: "Urban Tactical Boot",
  category: "boots",
  price: 400,
  rating: 2,
  inStock: true,
  tags: ["bestsellers"],
  image: urban1,
  images: [urban1, urban2, urban3],
  description: "Rugged tactical boot designed for strength, grip, and all-terrain use."
},

{
  id: 9,
  name: "Desert Storm Boot",
  category: "boots",
  price: 180,
  rating: 4,
  inStock: true,
  tags: ["discountedItems"],
  image: desert1,
  images: [desert1, desert2, desert3],
  description: "Durable desert boot built for harsh conditions and long-lasting comfort."
},

{
  id: 10,
  name: "Winter Guard Boot",
  category: "boots",
  price: 500,
  rating: 4.8,
  inStock: false,
  tags: ["newarrivals"],
  image: winter1,
  images: [winter1, winter2, winter3],
  description: "Insulated winter boot designed for warmth, protection, and extreme weather."
},

{
  id: 11,
  name: "Street Leather Boot",
  category: "boots",
  price: 175,
  rating: 4.1,
  inStock: true,
  tags: ["discountedItems"],
  image: street1,
  images: [street1, street2, street3],
  description: "Stylish street boot combining comfort, durability, and modern design."
},

{
  id: 12,
  name: "Rugged Trek Boot",
  category: "boots",
  price: 220,
  rating: 5,
  inStock: true,
  tags: ["newarrivals"],
  image: rugged1,
  images: [rugged1, rugged2, rugged3],
  description: "Heavy-duty trekking boot built for outdoor adventures and rough terrain."
},

{
  id: 13,
  name: "Beach Slide Pro",
  category: "sandals",
  price: 60,
  rating: 1.5,
  inStock: true,
  tags: ["discountedItems"],
  image: beach1,
  images: [beach1, beach2, beach3],
  description: "Lightweight beach slide designed for relaxed comfort and summer wear."
},

{
  id: 14,
  name: "Summer Ease",
  category: "sandals",
  price: 55,
  rating: 4,
  inStock: true,
  tags: ["newarrivals"],
  image: summer1,
  images: [summer1, summer2, summer3],
  description: "Comfortable summer sandal designed for casual everyday use."
},

{
  id: 15,
  name: "Ocean Walk",
  category: "sandals",
  price: 65,
  rating: 3,
  inStock: false,
  tags: ["discountedItems"],
  image: ocean1,
  images: [ocean1, ocean2, ocean3],
  description: "Water-friendly sandal made for beach walks and poolside comfort."
},

{
  id: 16,
  name: "Relax Fit Slides",
  category: "sandals",
  price: 50,
  rating: 4.2,
  inStock: true,
  tags: ["bestsellers"],
  image: relax1,
  images: [relax1, relax2, relax3],
  description: "Soft cushioned slides designed for maximum relaxation and comfort."
},

{
  id: 17,
  name: "Sunny Beach Wear",
  category: "sandals",
  price: 70,
  rating: 4,
  inStock: true,
  tags: ["newarrivals"],
  image: sunny1,
  images: [sunny1, sunny2, sunny3],
  description: "Bright and lightweight sandal perfect for sunny outdoor days."
},

{
  id: 18,
  name: "Poolside Comfort",
  category: "sandals",
  price: 45,
  rating: 3.8,
  inStock: true,
  tags: ["bestsellers"],
  image: pool1,
  images: [pool1, pool2, pool3],
  description: "Comfort-focused slide ideal for poolside and casual wear."
},

{
  id: 19,
  name: "Pro Runner X",
  category: "sports",
  price: 160,
  rating: 4.5,
  inStock: true,
  tags: ["newarrivals"],
  image: pro1,
  images: [pro1, pro2, pro3],
  description: "High-performance running shoe built for speed and endurance training."
},

{
  id: 20,
  name: "Speed Trainer",
  category: "sports",
  price: 150,
  rating: 4.2,
  inStock: true,
  tags: ["discountedItems"],
  image: speed1,
  images: [speed1, speed2, speed3],
  description: "Agile training shoe designed for quick movement and stability."
},

{
  id: 21,
  name: "Athletic Boost",
  category: "sports",
  price: 170,
  rating: 5,
  inStock: true,
  tags: ["newarrivals"],
  image: athletic1,
  images: [athletic1, athletic2, athletic3],
  description: "Powerful athletic shoe offering energy return and superior comfort."
},

{
  id: 22,
  name: "Gym Flex Pro",
  category: "sports",
  price: 155,
  rating: 4,
  inStock: false,
  tags: ["bestsellers"],
  image: gym1,
  images: [gym1, gym2, gym3],
  description: "Flexible gym shoe designed for workouts and indoor training."
},

{
  id: 23,
  name: "Ultra Sprint",
  category: "sports",
  price: 165,
  rating: 4.7,
  inStock: true,
  tags: ["discountedItems"],
  image: ultra1,
  images: [ultra1, ultra2, ultra3],
  description: "Ultra-light sprint shoe built for maximum speed and agility."
},

{
  id: 24,
  name: "Power Run Max",
  category: "sports",
  price: 180,
  rating: 5,
  inStock: true,
  tags: ["discountedItems"],
  image: power1,
  images: [power1, power2, power3],
  description: "Max cushioning running shoe designed for long-distance performance."
}
  ]

  