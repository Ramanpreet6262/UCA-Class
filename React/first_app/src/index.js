import React from 'react';
import ReactDOM from 'react-dom';
 
const element = React.createElement('ul', null,
    React.createElement('li', null, 'Todo1'),
    React.createElement('li', null, 'Todo2')
);
// But in this way it becomes quite tedious to do React.createElement() again and again
ReactDOM.render(element, document.getElementById('root'));