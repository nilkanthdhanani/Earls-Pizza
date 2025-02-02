import { pizza11, pizza12, pizza13, pizza14, pizza15, pizza16, pizza17, pizza18, pizza19, pizza20, pizza21, pizza22, pizza23, pizza24, pizza25, pizza26, pizza27, pizza28, pizza29, pizza30, pizza40, pizza39, pizza38, pizza37, pizza36, pizza35, pizza34, pizza33, pizza32, pizza31 } from "@/assets/images/image";

const pizzaArray = [
    {
        id: 1,
        name: "Margherita Pizza",
        price: "$12.99",
        mediumPrice: "$15.99",
        largePrice: "$17.99",
        discountPrice: "$10.99",
        image: pizza40,
        rating: 4,
        description: "A classic pizza featuring fresh mozzarella, aromatic basil, and a savory tomato sauce that delivers timeless Italian flavors in every bite. Perfect for anyone who loves simple yet satisfying meals.",
    },
    {
        id: 2,
        name: "Pepperoni Feast",
        price: "$15.99",
        mediumPrice: "$18.99",
        largePrice: "$20.99",
        discountPrice: "$13.99",
        image: pizza39,
        rating: 5,
        description: "Loaded with premium pepperoni slices, gooey melted cheese, and a rich tomato sauce, this pizza is a meat lover's dream come true. Ideal for indulging in bold and hearty flavors.",
    },
    {
        id: 3,
        name: "Veggie Supreme",
        price: "$14.49",
        mediumPrice: "$17.99",
        largePrice: "$19.99",
        discountPrice: "$12.49",
        image: pizza38,
        rating: 3,
        description: "Topped with a colorful medley of bell peppers, olives, onions, and mushrooms, this pizza is perfect for veggie lovers seeking fresh and bold flavors. A healthy and delicious option for all.",
    },
    {
        id: 4,
        name: "BBQ Chicken Delight",
        price: "$16.99",
        mediumPrice: "$19.99",
        largePrice: "$21.99",
        discountPrice: "$14.99",
        image: pizza37,
        rating: 4,
        description: "Tender chicken pieces paired with tangy BBQ sauce, caramelized onions, and melted cheese create a mouthwatering barbecue masterpiece. A perfect choice for fans of sweet and savory combinations.",
    },
    {
        id: 5,
        name: "Four Cheese Blend",
        price: "$13.99",
        mediumPrice: "$16.99",
        largePrice: "$18.99",
        discountPrice: "$11.99",
        image: pizza36,
        rating: 5,
        description: "A luxurious combination of mozzarella, cheddar, parmesan, and blue cheese that offers a rich, creamy, and unforgettable pizza experience. A true delight for cheese enthusiasts.",
    },
    {
        id: 6,
        name: "Hawaiian Paradise",
        price: "$14.99",
        mediumPrice: "$17.99",
        largePrice: "$19.99",
        discountPrice: "$13.49",
        image: pizza35,
        rating: 4,
        description: "A tropical blend of ham, juicy pineapple, and melted cheese, creating a sweet and savory flavor profile. A favorite among those who enjoy a bit of sweetness on their pizza.",
    },
    {
        id: 7,
        name: "Meat Lover's Supreme",
        price: "$18.99",
        mediumPrice: "$21.99",
        largePrice: "$23.99",
        discountPrice: "$16.99",
        image: pizza34,
        rating: 5,
        description: "Packed with pepperoni, sausage, bacon, and beef, this pizza is a meat lover's dream. Rich, savory, and satisfying, it's perfect for those who crave bold, hearty flavors.",
    },
    {
        id: 8,
        name: "Buffalo Chicken Blast",
        price: "$16.49",
        mediumPrice: "$19.49",
        largePrice: "$21.49",
        discountPrice: "$14.49",
        image: pizza33,
        rating: 4,
        description: "Spicy buffalo chicken, tangy ranch sauce, and melted cheese make this pizza a fiery delight for those who enjoy bold and zesty flavors.",
    },
    {
        id: 9,
        name: "Seafood Medley",
        price: "$17.99",
        mediumPrice: "$20.99",
        largePrice: "$22.99",
        discountPrice: "$15.99",
        image: pizza32,
        rating: 4,
        description: "A flavorful mix of shrimp, mussels, and scallops combined with a creamy garlic sauce. Ideal for seafood lovers looking for a unique pizza experience.",
    },
    {
        id: 10,
        name: "Pesto Veggie",
        price: "$15.49",
        mediumPrice: "$18.49",
        largePrice: "$20.49",
        discountPrice: "$13.49",
        image: pizza31,
        rating: 4,
        description: "A pesto-based pizza topped with fresh vegetables like zucchini, spinach, and sun-dried tomatoes. Perfect for anyone who loves fresh, herbal flavors.",
    },
    {
        id: 11,
        name: "Chicago Deep Dish",
        price: "$19.99",
        mediumPrice: "$22.99",
        largePrice: "$24.99",
        discountPrice: "$17.99",
        image: pizza30,
        rating: 5,
        description: "A classic deep-dish pizza with a buttery crust, packed with mozzarella cheese, savory sausage, and rich tomato sauce. A true comfort food for pizza enthusiasts.",
    },
    {
        id: 12,
        name: "White Garlic Chicken",
        price: "$17.49",
        mediumPrice: "$20.49",
        largePrice: "$22.49",
        discountPrice: "$15.49",
        image: pizza29,
        rating: 4,
        description: "Roasted chicken paired with a rich garlic cream sauce and topped with mozzarella and parmesan. A savory and indulgent option for those who enjoy creamy pizzas.",
    },
    {
        id: 13,
        name: "Truffle Mushroom",
        price: "$18.49",
        mediumPrice: "$21.49",
        largePrice: "$23.49",
        discountPrice: "$16.49",
        image: pizza28,
        rating: 5,
        description: "A gourmet pizza featuring earthy mushrooms, truffle oil, and a blend of cheeses. A decadent and flavorful pizza for those with refined tastes.",
    },
    {
        id: 14,
        name: "Philly Cheese Steak",
        price: "$16.99",
        mediumPrice: "$19.99",
        largePrice: "$21.99",
        discountPrice: "$14.49",
        image: pizza27,
        rating: 4,
        description: "Tender steak slices, sautéed onions, and melted cheese come together on a savory crust to recreate the classic Philly cheese steak in pizza form.",
    },
    {
        id: 15,
        name: "Spicy Italian",
        price: "$15.99",
        mediumPrice: "$18.99",
        largePrice: "$20.99",
        discountPrice: "$13.99",
        image: pizza26,
        rating: 5,
        description: "A spicy pizza topped with hot Italian sausage, pepperoni, and chili flakes. Perfect for those who enjoy a kick of heat along with their pizza.",
    },
    {
        id: 16,
        name: "Bacon Lover's Special",
        price: "$17.49",
        mediumPrice: "$20.49",
        largePrice: "$22.49",
        discountPrice: "$15.49",
        image: pizza25,
        rating: 4,
        description: "A bacon-packed pizza with crispy strips of bacon, cheese, and a smoky barbecue sauce. A savory and crispy choice for bacon enthusiasts.",
    },
    {
        id: 17,
        name: "Spicy BBQ Meatball",
        price: "$16.99",
        mediumPrice: "$19.99",
        largePrice: "$21.99",
        discountPrice: "$14.99",
        image: pizza24,
        rating: 4,
        description: "Tender meatballs with a zesty BBQ sauce, mozzarella cheese, and a spicy kick, making this pizza a bold and exciting choice for barbecue lovers.",
    },
    {
        id: 18,
        name: "Spinach and Artichoke",
        price: "$14.99",
        mediumPrice: "$17.99",
        largePrice: "$19.99",
        discountPrice: "$13.49",
        image: pizza23,
        rating: 5,
        description: "A creamy spinach and artichoke dip turned into a pizza, topped with cheese and a rich, savory sauce. Perfect for those who love creamy, cheesy flavors.",
    },
    {
        id: 19,
        name: "Margarita Deluxe",
        price: "$13.99",
        mediumPrice: "$16.99",
        largePrice: "$18.99",
        discountPrice: "$12.49",
        image: pizza22,
        rating: 4,
        description: "A classic Margherita pizza with extra mozzarella, basil, and a touch of balsamic glaze. A perfect option for those seeking a refined and elevated classic pizza.",
    },
    {
        id: 20,
        name: "Taco Pizza",
        price: "$16.49",
        mediumPrice: "$19.49",
        largePrice: "$21.49",
        discountPrice: "$14.49",
        image: pizza21,
        rating: 5,
        description: "A taco-inspired pizza with seasoned ground beef, jalapeños, and fresh lettuce, topped with cheddar cheese and a dollop of sour cream. A fun fusion of flavors.",
    },
    {
        id: 21,
        name: "Basil Pesto Chicken",
        price: "$15.99",
        mediumPrice: "$18.99",
        largePrice: "$20.99",
        discountPrice: "$13.99",
        image: pizza20,
        rating: 4,
        description: "Juicy grilled chicken pieces drizzled with fresh basil pesto and topped with mozzarella. A light, yet flavorful option for pesto lovers.",
    },
    {
        id: 22,
        name: "Sweet Chili Chicken",
        price: "$17.49",
        mediumPrice: "$20.49",
        largePrice: "$22.49",
        discountPrice: "$15.49",
        image: pizza19,
        rating: 4,
        description: "Tender chicken paired with sweet chili sauce, onions, and mozzarella, offering a perfect balance of sweet and spicy flavors.",
    },
    {
        id: 23,
        name: "Greek Pizza",
        price: "$15.49",
        mediumPrice: "$18.49",
        largePrice: "$20.49",
        discountPrice: "$13.49",
        image: pizza18,
        rating: 4,
        description: "A Mediterranean-inspired pizza with olives, feta cheese, spinach, and a hint of oregano. Perfect for those who enjoy fresh, tangy flavors.",
    },
    {
        id: 24,
        name: "Chicken Alfredo",
        price: "$17.99",
        mediumPrice: "$20.99",
        largePrice: "$22.99",
        discountPrice: "$15.99",
        image: pizza17,
        rating: 4,
        description: "A rich, creamy Alfredo sauce with grilled chicken, spinach, and a generous amount of mozzarella. A deliciously indulgent pizza.",
    },
    {
        id: 25,
        name: "Cheeseburger Pizza",
        price: "$16.99",
        mediumPrice: "$19.99",
        largePrice: "$21.99",
        discountPrice: "$14.49",
        image: pizza16,
        rating: 5,
        description: "A fun take on a cheeseburger, with seasoned beef, lettuce, tomatoes, pickles, and cheese all on a pizza crust. A delightful and unique combination.",
    },
    {
        id: 26,
        name: "BBQ Bacon Cheeseburger",
        price: "$17.49",
        mediumPrice: "$20.49",
        largePrice: "$22.49",
        discountPrice: "$15.49",
        image: pizza15,
        rating: 4,
        description: "A savory pizza topped with beef, bacon, cheddar cheese, and BBQ sauce. The perfect fusion of a cheeseburger and pizza.",
    },
    {
        id: 27,
        name: "Cheese Stuffed Crust",
        price: "$15.49",
        mediumPrice: "$18.49",
        largePrice: "$20.49",
        discountPrice: "$13.49",
        image: pizza14,
        rating: 5,
        description: "A pizza with a crust stuffed with gooey mozzarella cheese, making every bite extra cheesy. Ideal for cheese lovers who want more than just toppings.",
    },
    {
        id: 28,
        name: "Chicken Caesar Salad Pizza",
        price: "$16.49",
        mediumPrice: "$19.49",
        largePrice: "$21.49",
        discountPrice: "$14.49",
        image: pizza13,
        rating: 4,
        description: "A Caesar salad on a pizza! Grilled chicken, romaine lettuce, parmesan cheese, and Caesar dressing combine to create this unique flavor fusion.",
    },
    {
        id: 29,
        name: "Alfredo Veggie",
        price: "$15.99",
        mediumPrice: "$18.99",
        largePrice: "$20.99",
        discountPrice: "$13.99",
        image: pizza12,
        rating: 4,
        description: "A creamy Alfredo sauce topped with a medley of fresh vegetables like spinach, mushrooms, and artichokes. A savory, vegetarian option with a rich flavor.",
    },
    {
        id: 30,
        name: "Chicken Parmesan Pizza",
        price: "$17.99",
        mediumPrice: "$20.99",
        largePrice: "$22.99",
        discountPrice: "$15.99",
        image: pizza11,
        rating: 5,
        description: "A pizza version of the classic chicken parmesan, with breaded chicken, marinara sauce, mozzarella, and parmesan. Comfort food at its finest.",
    },
];

export default pizzaArray;
