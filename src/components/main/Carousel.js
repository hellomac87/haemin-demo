import React, { Component } from 'react';
// import './Carousel.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class MyCarousel extends Component {
    render() {
        return (
            // Carousel설명서 :: http://react-responsive-carousel.js.org/storybook/?selectedKind=Carousel&selectedStory=PropTypes&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel
            <Carousel showThumbs={false} showIndicators={false} showArrows={false}>
                <div>
                    <img src="http://img.woowahan.com/www/common/baemin.jpg" alt="gf"/>
                </div>
                <div>
                    <img src="http://img.woowahan.com/www/common/baemin.jpg" alt="gf"/>
                </div>
                <div>
                    <img src="http://img.woowahan.com/www/common/baemin.jpg" alt="gf"/>
                </div>
            </Carousel>
        );
    }
}

export default MyCarousel;
