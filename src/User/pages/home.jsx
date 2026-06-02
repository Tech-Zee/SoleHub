import React from "react";
import Hero from "../components/home/hero";
import Footer from "../components/home/footer";
import Trust from "../components/home/trust";
import Banner from "../components/home/banner";
import Category from "../components/home/categoryCards";
import ProductCards from "../components/home/productCard";
import NewsLetter from "../components/home/newsletter";

function Home(){
 return(
    <>
   <Hero />
   <Category />
   <ProductCards />
   <Banner/>
   <Trust />
   <NewsLetter/>
   <Footer />
    </>
 )
}
export default Home;