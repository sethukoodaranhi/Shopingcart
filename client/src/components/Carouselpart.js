import React from 'react';
import { Carousel } from 'react-bootstrap';
function Carouselpart() {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="./images/image3.jpg"
                        alt="First slide"
                        style={{height:"500px",width:"1200px"}}
                    />
                  
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="./images/image1.jpg"
                        alt="Second slide"
                        style={{height:"500px",width:"1200px"}}
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/image2.jpg"
                        alt="Third slide"
                        style={{height:"500px",width:"1200px"}}
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/image4.jpg"
                        alt="Third slide"
                        style={{height:"500px",width:"1200px"}}
                    />
                    
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carouselpart;
