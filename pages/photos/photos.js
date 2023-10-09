import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Layout from "@component/components/layout";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function Photos({ postData }) {
    const [imageUrls, setImageUrls] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(postData.content.rendered, 'text/html');
        const imageElements = doc.querySelectorAll('img');
        const urls = Array.from(imageElements).map(img => img.getAttribute('src'));
        setImageUrls(urls);

        // Ici, nous supposons que toutes les images ont une taille de 400x400 pour simplifier.
        // Si vous avez les dimensions réelles des images, vous pouvez les utiliser à la place.
        const photosArray = urls.map(url => ({
            src: url,
            width: 1200,
            height: 1200
        }));
        setPhotos(photosArray);
    }, [postData]);

    return (
        <Layout>
            <div className="container">
                <h1 dangerouslySetInnerHTML={{ __html: postData.title.rendered }} />

                <PhotoAlbum 
                    layout="masonry" 
                    photos={photos} 
                    onClick={({ index }) => setIndex(index)}
                />

                <Lightbox
                    slides={photos}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />
            </div>
        </Layout>
    );
}

export default Photos;
