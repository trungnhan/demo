import '../public/style.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import { HotTable } from '@handsontable-pro/react'
import data from '../public/data.json'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.data = data
  }

  render() {
    return (
      <div id="hot-app" className='my-container'>
        <HotTable data={this.data} colHeaders={true} rowHeaders={true} width="600" height="300" stretchH="all" />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
