import React from 'react'
import MenuHeader from './MenuHeader'
import FoodMenu from './FoodMenu'
import PageCarousal from '../Layoutes/PageCarousal'
const index = () => {
    return (
        <div>
            <PageCarousal />
            <MenuHeader />
            <FoodMenu />
        </div>
    )
}

export default index
