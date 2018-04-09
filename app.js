import React, { Component } from 'react';
import { GridGenerator, HexGrid, Layout, Path, Hexagon, Text, Pattern, Hex } from 'react-hexgrid';
import './App.css';

class App extends Component {
    render() {
        const hexagonSize = { x: 5, y: 10 };
        const moreHexas = GridGenerator.orientedRectangle(25, 13);
        return (
          <div className="App">
            <h2>Hexcubic</h2>
            <p>Constructing Hexgrid with component-based approach with custom SVG elements.</p>
            <HexGrid width={1600} height={800} viewBox="-50 -50 50 50">
              {/* Main grid with bit hexagons, all manual */}
               <Layout size={{ x: 2, y: 2 }} origin={{ x: -65, y: -45}}>
            { moreHexas.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />) }
          </Layout>
</HexGrid>
</div>
    );
}
}

export default App;
