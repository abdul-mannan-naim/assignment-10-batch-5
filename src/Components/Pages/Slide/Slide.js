import React from 'react';
import './Slide.css'
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../../image/Slide/slide-1.jpg'
import slide2 from '../../../image/Slide/slide-2.jpg'
import slide3 from '../../../image/Slide/slide-3.jpg'

const Slide = () => {
    return (
        <div>
            <Carousel id='slide' className='slide'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slide;