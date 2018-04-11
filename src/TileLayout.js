import React, { Component } from 'react';
import { GridGenerator, Layout, Hexagon, Text, Pattern, HexUtils, HexGrid, Hex } from 'react-hexgrid';
import './TileLayout.css';

class Up extends Component {
    constructor(props) {
        super(props);
        const hexagons = GridGenerator.Hex(1).map((hexagon, index) => {
            return Object.assign({}, hexagon, {
                image: 'https://goo.gl/TPGLS3',
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

render() {
        const { hexagons } = this.state;
        return (
          <Layout className="tiles" size={{ x: 8, y: 8 }} flat={false} spacing={1.01} origin={{ x: 60, y: -80 }}>
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

export default Up;