import React, { Component } from 'react';
import { GridGenerator, HexGrid, Layout, Path, Hexagon, Text, Pattern, Hex } from 'react-hexgrid';
import './App.css';

class App extends Component {
    render() {
        const hexagonSize = { x: 10, y: 10 };
        const moreHexas = GridGenerator.parallelogram(-2, 2, -2, 2);
        return (
          <div className="App">
            <h2>React Hexgrid v1</h2>
            <p>Constructing Hexgrid with component-based approach with custom SVG elements.</p>
            <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
              {/* Main grid with bit hexagons, all manual */}
              <Layout size={hexagonSize} flat={false} spacing={1.1} origin={{ x: -10, y: 0 }}>
            <Hexagon q={0} r={0} s={0} fill='down' />
            <Hexagon q={0} r={-1} s={1} fill='up_shade1' />
            <Hexagon q={-1} r={-1} s={2} fill='up' />
            <Hexagon q={-2} r={-1} s={-3} fill='start' />
            <Hexagon q={-1} r={-2} s={3} fill='down_shade' />
            <Hexagon q={1} r={-1} s={0} fill='down_shade' />
            <Hexagon q={2} r={-1} s={-1} fill='down_shade' />
            <Hexagon q={1} r={0} s={-1} fill='down' />
            <Hexagon q={2} r={0} s={-1} fill='up' />
            <Hexagon q={3} r={0} s={-2} fill='empty' />
            <Hexagon q={4} r={-1} s={-2} fill='up' />
            <Hexagon q={2} r={1} s={-2} fill='up_shade2' />
          </Layout>
            {/* You can define multiple patterns and switch between them with "fill" prop on Hexagon */}
<Pattern id="up" link="https://goo.gl/TPGLS3" size={hexagonSize} />
<Pattern id="down" link="https://goo.gl/D1Y8KH" size={hexagonSize} />
<Pattern id="down_shade" link="https://goo.gl/eLZiiF" size={hexagonSize} />
<Pattern id="up_shade1" link="https://goo.gl/VyuGXR" size={hexagonSize} />
<Pattern id="up_shade2" link="https://goo.gl/woFMDh" size={hexagonSize} />
<Pattern id="start" link="https://goo.gl/uMV7fE" size={hexagonSize} />
<Pattern id="empty" link="https://goo.gl/GbBhz1" size={hexagonSize} />
</HexGrid>
</div>
    );
            }
}
