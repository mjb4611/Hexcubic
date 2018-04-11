import React, { Component } from 'react';
import { HexGrid } from 'react-hexgrid';
import GameLayout from './Game';
import Up from './Up';
import Down from './Down';
import Empty from './Empty';
import Up_ShadeDown from './Up_ShadeDown';
import Up_ShadeLeft from './Up_ShadeLeft';
import Up_ShadeRight from './Up_ShadeRight';
import Down_ShadeUp from './Down_ShadeUp';
import Down_ShadeLeft from './Down_ShadeLeft';
import Down_ShadeRight from './Down_ShadeRight';
import Up_D1 from './Up_D1';
import Up_D2 from './Up_D2';
import Up_D3 from './Up_D3';
import Up_D4 from './Up_D4';
import Up_D5 from './Up_D5';
import Up_D6 from './Up_D6';
import Down_D1 from './Down_D1';
import Down_D2 from './Down_D2';
import Down_D3 from './Down_D3';
import Down_D4 from './Down_D4';
import Down_D5 from './Down_D5';
import Down_D6 from './Down_D6';
import Empty_D1 from './Empty_D1'
import './App.css';

class App extends Component {
    render() {
        return (
          <div className="app">
             <h1>Hexcubic</h1>
            <a href="https://drive.google.com/file/d/1GN5Qt6NdEn-Z8dyewqb9rwUd-WkOTAah/view?usp=sharing">How to Hexcubic</a>
            <HexGrid width={1200} height={600} viewBox="-100 -100 150 150">
              <GameLayout />
              <Up />
              <Down />
              <Empty />
              <Up_ShadeDown />
              <Up_ShadeLeft />
              <Up_ShadeRight />
              <Down_ShadeUp />
              <Down_ShadeLeft />
              <Down_ShadeRight />
              <Up_D1 />
              <Up_D2 />
              <Up_D3 />
              <Up_D4 />
              <Up_D5 />
              <Up_D6 />
              <Down_D1 />
              <Down_D2 />
              <Down_D3 />
              <Down_D4 />
              <Down_D5 />
              <Down_D6 />
              <Empty_D1 />
            </HexGrid>
          </div>
      );
    }
}
export default App;
