import '../public/style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import BlockBanner from './blockBanner.js'
import data from './data.json'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.data = data
  }
  render() {
    return (
      <div className='my-container'>
        <div className='block-banners'>
          {this.data.map((item, index) => <BlockBanner key={index} banner={item} />)}
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
