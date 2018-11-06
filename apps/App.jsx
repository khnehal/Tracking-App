import React, { Component } from 'react';

import NavBar from './NavBar/NavBar.jsx';
import SearchDropdowns from './DropdownLayout/SearchDropdowns.jsx';
import NameCardLayout from './NameCardLayout/NameCardLayout.jsx';
import CardsLayout from './CardsLayout/CardsLayout.jsx';

class App extends Component {
   render() {
      return (
         <div>
            <NavBar />
            <div className="container trackingAppContents">
                <SearchDropdowns />
                <NameCardLayout />
                <CardsLayout />
            </div>
         </div>
      );
   }
}
export default App;
