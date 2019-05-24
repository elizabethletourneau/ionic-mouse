import React, { Component } from 'react';
 class DropDown extends Component {
 render() {

    items = [
      {
        name: "First Item",
        url: "/"
      },
      {
        name: "First Item",
        url: "/"
      }
    ];


    const itemMarkup = items.map(item => {
        <p>
          <a href={item.url}>{item.name}</a>
        </p>;
    })
 return (
 <div>
     {itemMarkup}
 </div>
);
}
}
export default DropDown;
