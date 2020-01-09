import React, { useState } from 'react';

// import ReactBnbGallery from 'react-bnb-gallery';
// import ImageGallery from 'react-image-gallery'

const photos = [{
  original: "../../../assets/images/1.JPG",
  thumbnail:  "../../../assets/images/1.JPG"
}, {
  original: "../../../assets/images/2.JPG",
  thumbnail:  "../../../assets/images/2.JPG"
}, {
  original: "../../../assets/images/3.JPG",
  thumbnail:  "../../../assets/images/3.JPG"
},{
  original: "../../../assets/images/4.JPG",
  thumbnail:  "../../../assets/images/4.JPG"
},{
  original: "../../../assets/images/5.JPG",
  thumbnail:  "../../../assets/images/5.JPG"
}];

const Photos = () => {

  const photoHandler = () => {
    photos.map(e => e.push());
  }

  return (
      <div>
        <img src={photoHandler}
        alt=""
           />
      </div>     
    );
  };

export default Photos;