import React from 'react'
import AboutMe from './HomePage/AboutMe'
import CeoSection from './HomePage/CeoSection'
import ContactUsSection from './HomePage/ContactUsSection'
import NewsSection from './HomePage/NewsSection'
import Services from './HomePage/Services'
import TeamSection from './HomePage/TeamSection'
import Testimonials from './HomePage/Testimonials'

function HomePage() {
    return (
        <div>
            <AboutMe />
            <Services />
            <CeoSection />
            {/* <TeamSection /> */}
            {/* <Testimonials /> */}
            <NewsSection />
            <ContactUsSection />
        </div>
    )
}

export default HomePage;
