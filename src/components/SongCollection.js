import React from 'react'
import Song from './Song'

class SongCollection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  render(){
    let songs = this.props.songs.map(song => {
      let className = null;

      if (song.id == this.props.selectedSongId) {
        className = "selected"
      }

      let handleSongSelect = () => {
        this.props.handleSongSelect(song.id)
      }

      return(
        <Song
          key={song.id}
          name={song.name}
          artist={song.artist}
          album={song.album}
          className={className}
          handleSongSelect={handleSongSelect}
        />
      )
    })

    return (
      <ul>{songs}</ul>
    )
  }
}








export default SongCollection
