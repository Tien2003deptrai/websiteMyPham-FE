import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceSlider = () => {
    const [price, setPrice] = useState(50);

    const handleSliderChange = (value) => {
        setPrice(value);
    };

    return (
        <div style={{ paddingTop: '200px' }}>
            <Slider
                min={0}
                max={100}
                value={price}
                onChange={handleSliderChange}
            />
            <p>
                Selected Price: ${price}
            </p>
        </div>
    );
};

export default PriceSlider;
