import React from "react";
import YouTube from "react-youtube";

class Videos extends React.Component {
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideoAt(50);
  }
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <YouTube videoId="e3Nl_TCQXuw" opts={opts} onReady={this.videoOnReady} />
    );
  }
}
export default Videos;
