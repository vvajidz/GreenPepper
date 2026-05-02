import honey from "@/assets/honey-alfaham-mandhi.jpg";
import peri from "@/assets/peri-peri-mandhi.jpg";
import mutton from "@/assets/mutton-mandhi.jpg";
import biryani from "@/assets/biryani.jpg";
import starters from "@/assets/starters.jpg";
import fish from "@/assets/fish.jpg";
import kappa from "@/assets/kappa.jpg";
import beef from "@/assets/beef.jpg";

export const CURRENCY = "KD";
export const fmt = (n: number) => `${CURRENCY} ${n.toFixed(3)}`;

export const restaurant = {
  name: "Green Pepper Family Restaurant & Banquet Hall",
  address: "Farwaniya, Block 1, Mobile 2000 Building, 4th Floor, Kuwait",
  phones: ["+965 5163 4325", "+965 5163 4335", "+965 5163 4394"],
  whatsapp: "96551634325",
  email: "greenpepperkuwait@gmail.com",
  mapsUrl: "https://maps.app.goo.gl/5KkvtQvm2M9dxgAf8",
  reviewUrl: "https://maps.app.goo.gl/5KkvtQvm2M9dxgAf8",
  instagram: [
    {
      handle: "@greenpepper_family",
      url: "https://www.instagram.com/greenpepper_family",
    },
  ],
};

export const mandhiSpecials = [
  {
    id: "honey-alfaham",
    name: "Honey Al Faham Mandhi",
    nameAr: "عسل الفحام مندي",
    tagline: "Sweet & Smoky",
    description:
      "Charcoal-grilled chicken glazed with wild honey, slow-laid on saffron-perfumed basmati. A signature of the house.",
    image: honey,
    full: 6.0,
    half: null as number | null,
  },
  {
    id: "peri-peri",
    name: "Peri Peri Mandhi",
    nameAr: "بيري بيري مندي",
    tagline: "Spicy & Bold",
    description:
      "Fiery peri-peri rubbed chicken, flame-kissed and served over fragrant rice with house chilies.",
    image: peri,
    full: 5.75,
    half: null,
  },
  {
    id: "mutton-mandhi",
    name: "Mutton Mandhi",
    nameAr: "ماندي لحم ضأن",
    tagline: "Rich & Traditional",
    description:
      "Tender Yemeni-style slow-cooked mutton on saffron rice, finished with cashews, raisins and ghee.",
    image: mutton,
    full: 8.95,
    half: 4.75,
  },
];

export const menuPreview = [
  { name: "Honey Al Faham Mandhi", category: "Mandhi", price: 6.0, image: honey, featured: true },
  { name: "Mutton Mandhi", category: "Mandhi", price: 8.95, image: mutton },
  { name: "Mutton Grill Mandhi", category: "Green Pepper Special", price: 8.95, image: mutton },
  { name: "Chicken Dum Biriyani", category: "Biriyani", price: 1.25, image: biryani },
  { name: "Beef Ribs Pollichathu", category: "Special", price: 2.6, image: beef },
  { name: "King Fish Fry", category: "Seafood", price: 1.0, image: fish },
  { name: "Beef Roast", category: "Beef", price: 1.75, image: beef },
  { name: "Dynamite Prawns", category: "Starters", price: 2.75, image: starters },
  { name: "Kerala Porotta", category: "Breads", price: 0.1, image: kappa },
];

type MenuItem = { name: string; nameAr?: string; price: number };

export const fullMenu: Record<string, MenuItem[]> = {
  "Green Pepper Special": [
    { name: "Pothinkaal", nameAr: "بوثينكال", price: 4.25 },
    { name: "Beef Ribs Grill", nameAr: "ضلوع لحم بقري مشوية", price: 2.1 },
    { name: "Beef Ribs Pollichathu", nameAr: "أضلاع لحم البقر بوليتشاتو", price: 2.6 },
    { name: "Iffa Chicken Full", nameAr: "دجاج إيفا كامل", price: 3.75 },
    { name: "Iffa Chicken Half", nameAr: "نصف دجاجة إيفا", price: 1.95 },
    { name: "Vizhinjam Chicken Fry", nameAr: "دجاج فيزينجام مقلي", price: 1.95 },
    { name: "Mutton Stew", nameAr: "يخنة لحم ضأن", price: 2.5 },
    { name: "Mutton Mulakittathu", nameAr: "مولاكيتاتو لحم ضأن", price: 2.65 },
    { name: "Mutton Grill Mandhi Full", nameAr: "ماندي لحم ضأن مشوي كامل", price: 8.95 },
    { name: "Mutton Grill Mandhi Half", nameAr: "لحم ضأن مشوي نصف مندي", price: 4.75 },
  ],
  Mandhi: [
    { name: "Al Faham Mandhi Full", nameAr: "الفهام مندي كامل", price: 5.5 },
    { name: "Honey Al Faham Mandhi Full", nameAr: "عسل الفحام مندي", price: 6.0 },
    { name: "Peri Peri Mandhi Full", nameAr: "بيري بيري مندي", price: 5.75 },
    { name: "Mutton Mandhi Full", nameAr: "ماندي لحم ضأن", price: 8.95 },
  ],
  "Burger & Fast Food": [
    { name: "Chicken Burger Combo", nameAr: "وجبة برجر دجاج كومبو", price: 1.4 },
    { name: "Beef Burger Combo", nameAr: "وجبة برجر لحم بقري كومبو", price: 1.5 },
    { name: "Chicken Nuggets", nameAr: "ناجتس دجاج", price: 0.75 },
    { name: "Chicken Pops", nameAr: "قطع دجاج بوبس", price: 0.75 },
    { name: "Chicken Momos", nameAr: "مومو دجاج", price: 1.5 },
    { name: "Veg Momos", nameAr: "موموس الخضار", price: 1.35 },
    { name: "Chicken Wrap Combo", nameAr: "وجبة راب دجاج كومبو", price: 1.5 },
    { name: "Club Sandwich Chicken Combo", nameAr: "وجبة ساندويتش كلوب دجاج كومبو", price: 1.65 },
    { name: "French Fries Spicy", nameAr: "بطاطس مقلية حارة", price: 0.85 },
    { name: "Loaded Fries", nameAr: "بطاطس مقلية محملة", price: 1.25 },
  ],
  "Starters / Salad / Soup": [
    { name: "French Fries", nameAr: "بطاطا مقلية", price: 0.75 },
    { name: "Chicken Wings Fry", nameAr: "أجنحة دجاج مقلية", price: 1.75 },
    { name: "Dragon Chicken", nameAr: "دجاج دراغون", price: 2.15 },
    { name: "Dynamite Prawns", nameAr: "روبيان ديناميت", price: 2.75 },
    { name: "Green Salad", nameAr: "سلطة خضراء", price: 0.75 },
    { name: "Russian Salad", nameAr: "سلطة روسية", price: 1.6 },
    { name: "Pineapple Peanut Salad", nameAr: "سلطة الأناناس والفول السوداني", price: 1.5 },
    { name: "Hot & Sour Chicken Soup", nameAr: "شوربة دجاج حارة وحامضة", price: 0.95 },
    { name: "Sweet Corn Chicken Soup", nameAr: "شوربة دجاج بالذرة", price: 0.95 },
    { name: "Manchow Soup", nameAr: "شوربة مانشو", price: 1.0 },
  ],
  Breads: [
    { name: "Kerala Porotta", nameAr: "كيرالا بوروتا", price: 0.1 },
    { name: "Butter Naan", nameAr: "خبز نان بالزبدة", price: 0.25 },
    { name: "Garlic Naan", nameAr: "خبز نان بالثوم", price: 0.3 },
    { name: "Tandoor Rotti", nameAr: "خبز تندوري", price: 0.1 },
  ],
  Chicken: [
    { name: "Butter Chicken", nameAr: "دجاج بالزبدة", price: 1.95 },
    { name: "Chicken Tikka Masala", nameAr: "دجاج تكا ماسالا", price: 2.45 },
    { name: "Chilly Chicken", nameAr: "دجاج حار", price: 1.75 },
    { name: "Chicken Kuruma", nameAr: "دجاج كوروما", price: 1.7 },
  ],
  Beef: [
    { name: "Beef Roast", nameAr: "لحم بقري مشوي", price: 1.75 },
    { name: "Beef Curry", nameAr: "كاري لحم بقري", price: 1.5 },
    { name: "Beef Pepper", nameAr: "لحم بقري بالفلفل", price: 1.75 },
  ],
  Mutton: [
    { name: "Mutton Curry", nameAr: "كاري لحم ضأن", price: 1.95 },
    { name: "Mutton Masala", nameAr: "لحم ضأن ماسالا", price: 2.25 },
    { name: "Mutton Pepper Fry", nameAr: "لحم ضأن مقلي بالفلفل", price: 2.25 },
  ],
  "Fish & Seafood": [
    { name: "King Fish Fry", nameAr: "سمك كينج مقلي", price: 1.0 },
    { name: "Fish Mango Curry", nameAr: "سمك كاري مانجو", price: 2.95 },
    { name: "Prawns Masala", nameAr: "روبيان ماسالا", price: 2.25 },
  ],
  "Biriyani & Meals": [
    { name: "Chicken Dum Biriyani", nameAr: "برياني دجاج", price: 1.25 },
    { name: "Beef Dum Biriyani", nameAr: "برياني لحم بقري", price: 1.65 },
    { name: "Mutton Dum Biriyani", nameAr: "برياني لحم ضأن", price: 2.0 },
    { name: "Veg Biriyani", nameAr: "برياني خضار", price: 1.0 },
  ],
  "Drinks & Desserts": [
    { name: "Mango Juice", nameAr: "عصير مانجو", price: 1.0 },
    { name: "Orange Juice", nameAr: "عصير برتقال", price: 0.75 },
    { name: "Oreo Shake", nameAr: "ميلك شيك أوريو", price: 1.45 },
    { name: "KitKat Shake", nameAr: "ميلك شيك كيت كات", price: 1.45 },
    { name: "Gulab Jamun", nameAr: "جولاب جامون", price: 0.15 },
    { name: "Falooda", nameAr: "فالودا", price: 1.35 },
  ],
};
