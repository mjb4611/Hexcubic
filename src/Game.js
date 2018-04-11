import React, { Component } from 'react';
import { GridGenerator, Layout, Hexagon, Text, Pattern, HexUtils } from 'react-hexgrid';
import './Game.css';

class Game extends Component {
    constructor(props) {
        super(props);
        const hexagons = GridGenerator.rectangle(15, 6);
        // Add custom prop to couple of hexagons to indicate them being blocked
        this.state = { hexagons };
    }

    // onDrop you can read information of the hexagon that initiated the drag
    onDrop(event, source, targetProps) {
        const { hexagons } = this.state;
        const hexas = hexagons.map(hex => {
            // When hexagon is dropped on this hexagon, copy it's image and text
            if (HexUtils.equals(source.state.hex, hex)) {
                hex.image = targetProps.data.image;
            }
            return hex;
        });
        this.setState({ hexagons: hexas });
    }

    onDragStart(event, source) {
        // If this tile is empty, let's disallow drag
        if (!source.props.data.text) {
            event.preventDefault();
        }
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
    // Decide here if you want to allow drop to this node
    onDragOver(event, source) {
        // Find blocked hexagons by their 'blocked' attribute
        const blockedHexas = this.state.hexagons.filter(h => h.blocked);
        // Find if this hexagon is listed in blocked ones
        const blocked = blockedHexas.find(blockedHex => {
            return HexUtils.equals(source.state.hex, blockedHex);
        });
        const openHexas = this.state.hexagons.filter(h => h.open);
        const open = openHexas.find(openHex => {
            return HexUtils.equals(source.state.hex, openHex);
        });

        const { text } = source.props.data;
        // Allow drop, if not blocked and there's no content already
        if (!blocked && !text) {
            // Call preventDefault if you want to allow drop
            event.preventDefault();
        }
    }
    render() {
        let { hexagons } = this.state;
        return (
          <Layout className="game" size={{ x: 10, y: 10 }} flat={false} spacing={1.02} origin={{ x: -165, y: -40 }}>
                {
                    hexagons.map((hex, i) => (
                      <Hexagon
                        key={i}
                q={hex.q}
                r={hex.r}
                s={hex.s}
                className={hex.blocked ? 'blocked' : null}
                className={hex.open ? 'open' : true}
                fill={(hex.image) ? HexUtils.getID(hex) : null}
                data={hex}
                onClick={(e, h, t) => this.onClick(e, h, t)}
                onDragStart={(e, s) => this.onDragStart(e, s)}
                onDrop={(e, h, t) => this.onDrop(e, h, t) }
                onDragOver={(e, h) => this.onDragOver(e, h) }
                >
                <Text>{hex.text}</Text>
                { hex.image && <Pattern id={HexUtils.getID(hex)} link={hex.image} /> }
                </Hexagon>
          ))
        }
        </Layout>
    );
}
}

export default Game;
