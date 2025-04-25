// import React from 'react';
import Hero from './components/Hero';
import Slider from './components/Slider';
import Price from './components/Price';
import Cart from './components/Cart';
import WhyChooseUs from './components/WhyChooseUs';
const Index = () => {
  return (
    <div className="relative">
      <Hero />
      <Cart />
      <Slider />
      <Price />
      <WhyChooseUs/>
      
    </div>
  );
};

export default Index;
