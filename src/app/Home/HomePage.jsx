import React from 'react'
import Carousal from './Carousal'
import Booking from '../booking/Booking'
import PageCarousal from '../Layoutes/PageCarousal'
import About from '../about/About'
import Feature from '../feature/Feature'
import MenuHeader from '../menu/MenuHeader'
import ChiefSchefs from '../chef/ChiefSchefs'
import ContactPage from '../contact/ContactPage'
import BlogHome from './BlogHome'

const HomePage = () => {
    return (
        <div>
            {/* <Carousal /> */}
            <PageCarousal />
            <Booking />
            <About />
            <Feature />
            <MenuHeader />
            <ChiefSchefs />
            <ContactPage />
            <BlogHome />
        </div>
    )
}

export default HomePage
