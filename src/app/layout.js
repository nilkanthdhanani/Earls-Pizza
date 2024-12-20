"use client"
import { Inter } from "next/font/google";
import "@/app/globals.scss";
import "@/assets/styles/main.scss";
import "@/assets/styles/partials/_theming.scss";
import "react-loading-skeleton/dist/skeleton.css";
import Footer from "@/common/footer";
import Header from "@/common/header";
import TopRef from "@/common/topRef";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Earls Pizza | Pizza Restaurant and Delivery Service</title>
        <meta name="description" content="Earls Pizza is a pizza restaurant and delivery service that delivers fresh, delicious pizzas to your doorsteps. We use the best ingredients and techniques to ensure that your pizza arrives hot and ready to eat. Our pizzas are made with love and care, and we are committed to providing the best service possible. Whether you're in the mood for a classic margherita, a spicy pepperoni, or a vegetarian option, we have something to satisfy every palate. Come try us out and experience the best pizza delivery service in town!" />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <TopRef />
      </body>
    </html>
  );
}
