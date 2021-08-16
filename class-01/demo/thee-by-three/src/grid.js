import { Component } from "react"
import Row from './row'

class Grid extends Component {
  render() {
    return <div className="grid">
      <Row index={0} />
      <Row index={1} />
      <Row index={2} />
    </div>
  }
}

export default Grid;
