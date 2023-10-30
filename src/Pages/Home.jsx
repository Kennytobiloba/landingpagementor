import React from 'react'
import Aboutus from "../components/Aboutus";
import Application from "../components/Application";
import EndSection from "../components/EndSection";
import HomeSection from "../components/HomeSection";
import LearningSection from "../components/LearningSection";
import Navbar from "../components/Navbar";
import ReviewSection from "../components/ReviewSection"
import FooterSection from "../components/FooterSection";
const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomeSection></HomeSection>

<ReviewSection/>
<Application/>
<LearningSection></LearningSection>

<Aboutus/>
<EndSection/>
<FooterSection/>
    </div>
  )
}
export default Home
