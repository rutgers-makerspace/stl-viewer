import React, { Component } from 'react';
import './Viewer.css';
import STLViewer from 'stl-viewer';

class Viewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: false,
      rotMatrix: { x: 1, y: 1, z: 1 }
    }
  }
  togglePlay() {
    this.setState({ paused : !this.state.paused });
  }
  setRotation(axis, evt) {
    var rotMatrix = {};
    rotMatrix[axis] = evt.targe.value;
    rotMatrix = Object.assign({}, this.state.rotMatrix, );
    this.setState({ rotMatrix });
  }
  render() {
    const fileUrl = `${process.env.PUBLIC_URL}/models/${this.props.match.params.fileName}`;
    console.log(fileUrl);
    return (
      <div className="viewer">
        <div className="viewer-controls">
          <button onClick={this.togglePlay.bind(this)}>Play/Pause</button>
          <input type="number" onChange={this.setRotation.bind(this, 'x')}/>
          <input type="number" onChange={this.setRotation.bind(this, 'y')}/>
          <input type="number" onChange={this.setRotation.bind(this, 'z')}/>
        </div>
        <STLViewer
        	url={fileUrl}
        	width={400}
        	height={400}
        	modelColor='#aaa'
        	backgroundColor='#222'
        	rotate={!this.state.paused}
        	orbitControls={true}
        />
      </div>
    );
  }
}

export default Viewer;
