import React from 'react'
import HomeCarousel from '../../components/home_carousel/main_carousel'
import HomeSectionCarousel from '../../components/homeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../data/mens_kurta'

const Homepage = () => {
  return (
    <div>
        <HomeCarousel/>

      <div className='space-y-10 py-20 flex flex-col justify-center'>
          <HomeSectionCarousel data={mens_kurta} sectionName={"mens_kurta"}/>
          <HomeSectionCarousel data={mens_kurta}sectionName={"mens_shoes"}/>
          <HomeSectionCarousel data={mens_kurta}sectionName={"mens_shirt"}/>
          <HomeSectionCarousel data={mens_kurta}sectionName={"women_saree"}/>
          <HomeSectionCarousel data={mens_kurta}sectionName={"mens_Dress"}/>
          
        
        </div>
    </div>
  )
}

export default Homepage

