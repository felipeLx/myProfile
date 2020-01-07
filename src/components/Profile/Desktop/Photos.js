import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g;


const ImagesGallery = () => {
    const [images, setImages] = useState(null);

    function extractPhotos(content) {
        const links = new Set();
         let match;
         while (match = regex.exec(content)) {
           links.add(match[1])
         } 
         return Array.from(links);
       }

       async function getAlbum() {
        try {
          const response = await axios.get(`https://photos.app.goo.gl/8rShUULHWw9gGwXg6`);
          return extractPhotos(response.data);
        }
        catch(e) {
          return e.message;
        }
      }

    useEffect(() => {
        const response = await axios.get(
            'https://google-photos-album-demo.glitch.me/YOUR_ALBUM_ID'
          )
          if (response && response.data && response.data.length > 0) {
            this.setState({
              images: response.data.map((url: string) => ({
                original: `${url}=w1024`,
                thumbnail: `${url}=w100`,
              })),
            })
          }
        }

    return();
};

export default ImageGallery;