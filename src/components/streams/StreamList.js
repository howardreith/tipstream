import React from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'

// class because we want our streams to be fetched when the component mounts

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  renderList () {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      )
    })
  }

  render () {
    // console.log(this.props.streams)
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) }
}

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList)
