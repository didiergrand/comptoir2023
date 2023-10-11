import React, { useState, useEffect } from "react";
import Layout from "@component/components/layout";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { getPostBySlug } from "../../lib/api"; 

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function Photos({ postData }) {
  const [photos, setPhotos] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(postData.content.rendered, "text/html");
    const imageElements = doc.querySelectorAll("img");
    const urls = Array.from(imageElements).map((img) => img.getAttribute("src"));
    const photosArray = urls.map((url) => ({
      src: url,
      width: 1200,
      height: 1200,
    }));
    setPhotos(photosArray);
  }, [postData]);

  return (
    <Layout>
      <div className="container">
        <h1 dangerouslySetInnerHTML={{ __html: postData?.title?.rendered || '' }}></h1>
        <div id="breadcrumbs">
          <span property="itemListElement" typeof="ListItem">
            <span property="name">
              <a href="/photos">Photos</a>
            </span>
            <meta property="position" content="1" />
          </span>{" "}
          &gt;{" "}
          <span property="itemListElement" typeof="ListItem">
            <span property="name" dangerouslySetInnerHTML={{ __html: postData.title.rendered }}></span>
            <meta property="position" content="2" />
          </span>
        </div>
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

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const postData = await getPostBySlug(slug);

  if (!postData) {
    return { notFound: true };
  }

  return {
    props: {
      postData,
    },
  };
}

export default Photos;
