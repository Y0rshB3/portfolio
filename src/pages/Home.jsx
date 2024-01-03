import React, { useState, useEffect } from 'react';
import About from '../components/About/About';
import Iconbox from '../components/Iconbox/Iconbox';
import Skill from '../components/Skill/Skill';
import Resume from '../components/Resume/ResumeSection';
// import BlogSection from '../components/Blog/BlogSection';
// import ReviewSection from '../components/Review/ReviewSection';
import Contact from "../components/Contact/Contact";
// import PortfolioSection from '../components/Protfolio/PortfolioSection';
import Hero3 from '../components/Hero/Hero3';

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://y0rshb3.com/api/v1/resume')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error al obtener los datos:', error));
  }, []);
  if (!data) {
    return <p>Loading...</p>;
  };
  const { heroData, aboutData, serviceData, skillData, portfolioData, blogData, resumeData, reviewData, contactData, socialData, socialData2 } = data;
  return (
    <>
      <Hero3 data={heroData.homeThreeHero} socialData={socialData2} />
      <About data={aboutData} data-aos="fade-right" />
      <Iconbox data={serviceData} data-aos="fade-right" />
      <Skill data={skillData} data-aos="fade-right" />
      <Resume data={resumeData} />
      {/* <PortfolioSection data={portfolioData} data-aos="fade-right" />
      <ReviewSection data={reviewData} data-aos="fade-right" />
      <BlogSection data={blogData} data-aos="fade-right" /> */}
      <Contact data={contactData} socialData={socialData} data-aos="fade-right" />
    </>
  )
}

export default Home;
