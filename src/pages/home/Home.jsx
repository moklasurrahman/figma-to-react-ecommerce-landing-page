import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Hero from '../../components/hero/Hero';
import TrendingProducts from './../../components/trending Products/TrendingProducts';
import CategorySection from './../../components/categorySection/CategorySection';
import FeaturedProduct from './../../components/featuredProduct/FeaturedProduct';
import Testimonial from '../../components/testimonial/Testimonial';
import Feature from './../../components/feature/Feature';

const Home = () => {
  return (
    <div className=' w-[1440px]'>
        <Topbar/>
        <Hero/>
        <div className='mt-[100px]'></div>
        <TrendingProducts/>
        <CategorySection/>
        <FeaturedProduct/>
        <Feature/>
        <Testimonial/>
    </div>
  )
}

export default Home