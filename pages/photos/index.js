import React, { useState } from "react";
import Layout from "@component/components/layout";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { getAllPostsFromPhotosCategory } from "../../lib/api"; 
import Link from "next/link";

function PhotosPage({ galleries }) {
  const [index, setIndex] = useState(-1);
  return (
    <Layout>
      <div className="container">
        <h1>Photos</h1>

        
        <div className="grid grid-cols-3 gap-4">
        {galleries.map((gallery, id) => (
          <div key={id}>
            <Link href={`/photos/${gallery.slug}`} className="gallerycard">
                <img className="gallerycover" src={gallery.featuredImage ? gallery.featuredImage : '/placeholder.png'} alt={gallery.title} width={400} height={400} />
                <div className="gallerytitle"><span property="name" dangerouslySetInnerHTML={{ __html: gallery.title }}></span></div>
            </Link>
          </div>
        ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsFromPhotosCategory();

  const galleries = posts.map((post) => ({
    title: post.title.rendered,
    slug: post.slug,
    featuredImage: post._embedded && post._embedded["wp:featuredmedia"] && post._embedded["wp:featuredmedia"][0] ? post._embedded["wp:featuredmedia"][0].source_url : null,
  }));

  return {
    props: {
      galleries,
    },
  };
}

export default PhotosPage;
