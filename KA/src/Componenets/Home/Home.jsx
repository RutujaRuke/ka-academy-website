import React from 'react'
import Banner from './Banner'
import HomeAbout from './HomeAbout'
import HCourses from './HCourses'
import Placement from './Placement'
import Reviews from './Reviews'
import FAQ from './FAQ'

const Home = () => {
  return (
    <>
    {/* <div><Carousel/></div> */}
    <div><Banner/></div>
    <div><HCourses/></div>
    <div><Placement/></div>
    <div><HomeAbout/></div>
    <div><Reviews/></div>
    <div><FAQ/></div>
    </>
  )
}

export default Home