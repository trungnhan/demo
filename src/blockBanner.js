import React from 'react'

class BlockBanner extends React.PureComponent {
  render() {
    return (
      <div className='block'>
        <img src={this.props.banner.img} />
      </div>
    )
  }
}

export default React.memo(BlockBanner)
