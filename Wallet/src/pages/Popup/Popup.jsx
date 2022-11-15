import React from 'react';

import './Popup.css';
import { render } from './router';

const Popup = () => {
    return (
        <div className="App">
          {render()}
        </div>
    );
};

export default Popup;
