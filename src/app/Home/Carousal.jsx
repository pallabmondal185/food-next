import React from 'react';
import carousal_1 from '../img/carousel-1.jpg'
import carousal_2 from '../img/carousel-2.jpg'
import carousal_3 from '../img/carousel-3.jpg'

const Carousal = () => {
    return (
        <div>
            <div className="carousel">
                <div className="container-fluid">
                    <div className="owl-carousel">
                        <div className="carousel-item">
                            <div className="carousel-img">
                                <img src={carousal_1} alt="Image" />
                            </div>
                            <div className="carousel-text">
                                <h1>Best <span>Quality</span> Ingredients</h1>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus in malesuada
                                </p>
                                <div className="carousel-btn">
                                    <a className="btn custom-btn" href="">View Menu</a>
                                    <a className="btn custom-btn" href="">Book Table</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-img">
                                <img src={carousal_2} alt="Image" />
                            </div>
                            <div className="carousel-text">
                                <h1>World’s <span>Best</span> Chef</h1>
                                <p>
                                    Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis, orci sodales varius fermentum, tortor
                                </p>
                                <div className="carousel-btn">
                                    <a className="btn custom-btn" href="">View Menu</a>
                                    <a className="btn custom-btn" href="">Book Table</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-img">
                                <img src={carousal_3} alt="Image" />
                            </div>
                            <div className="carousel-text">
                                <h1>Fastest Order <span>Delivery</span></h1>
                                <p>
                                    Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam. Proin pellentesque odio
                                </p>
                                <div className="carousel-btn">
                                    <a className="btn custom-btn" href="">View Menu</a>
                                    <a className="btn custom-btn" href="">Book Table</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Carousal
