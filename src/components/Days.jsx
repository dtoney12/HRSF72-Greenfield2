import React from 'react';
import Events from './Events.jsx'

var Days = (props) => (
  <div className="box">
    {props.day.map((event, index) =>
    	<Events key={index}
    		event={event}
    	/>
    )}
  </div>
);

export default Days;