import React, { Component } from 'react';
import { GridGenerator, Layout, Hexagon, Text, Pattern, HexUtils } from 'react-hexgrid';
import './TileLayout.css';

class Up_D2 extends Component {
    constructor(props) {
        super(props);
        // Initialize hexagons with some text and image
        const hexagons = GridGenerator.rectangle(1, 1).map((hexagon, index) => {
            return Object.assign({}, hexagon, {
                text: 'Up d2',
                image: `https://goo.gl/gH9XKX`
            });
        })
        this.state = { hexagons };
    }
    onClick(event, source, targetProps) {
        const { hexagons } = this.state
        const hexas = hexagons.map(hex => {
            if (HexUtils.equals(source.state.hex, hex)) {
                hex.image = null;
                hex.text = null;
            }
            return hex
        });
        this.setState({ hexagons: hexas });
    }

    onDragStart(event, source) {
        // Could do something on onDragStart as well, if you wish
    }
    render() {
        const { hexagons } = this.state;
        return (
          <Layout className="tiles" size={{ x: 10, y: 10}} flat={false} spacing={1.01} origin={{ x: -20, y: -80 }}>
{
    hexagons.map((hex, i) => (
      <Hexagon
        key={i}
q={hex.q}
r={hex.r}
s={hex.s}
fill={(hex.image) ? HexUtils.getID(hex) : null}
data={hex}
onDragStart={(e, h) => this.onDragStart(e, h)}
onClick={(e, h, t) => this.onClick(e, h, t)}
>
<Text>{hex.text}</Text>
{ !!hex.image && <Pattern id={HexUtils.getID(hex)} link={hex.image} /> }
</Hexagon>
                              ))
}
</Layout>
    );
}
}

export default Up_D2;
