import React, { Component } from 'react';

import ReactBnbGallery from 'react-bnb-gallery'

const photos = [{
  photo: "https://photos.app.goo.gl/VuiXsVV4UPHdmJ7u7",
  thumbnail:"https://photos.app.goo.gl/VuiXsVV4UPHdmJ7u7"
}, {
  photo: "https://photos.app.goo.gl/dTxGMLBG51MMUR1C6",
  thumbnail: "https://photos.app.goo.gl/dTxGMLBG51MMUR1C6"
}, {
  photo: "https://photos.app.goo.gl/wyEf55BzJnedEydj9",
  thumbnail: "https://photos.app.goo.gl/wyEf55BzJnedEydj9"
},{
  photo: "https://photos.app.goo.gl/jh64pE1yqDND5L3H6",
  thumbnail: "https://photos.app.goo.gl/jh64pE1yqDND5L3H6"
},{
  photo: "https://photos.app.goo.gl/TGQU4r7c2hJtxRQ78",
  thumbnail: "https://photos.app.goo.gl/TGQU4r7c2hJtxRQ78"
}];

class Photos extends Component {
  constructor() {
    super(...arguments);
    this.state = { galleryOpened: true };
  }

  render () {
    return (
      <div>
        <ReactBnbGallery
          show={this.state.galleryOpened}
          photos={photos}
           />
      </div>
    );
  }
}

export default Photos;