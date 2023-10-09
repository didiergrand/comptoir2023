import React, { useState } from "react";
import Layout from "@component/components/layout";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { getAllPostsFromPhotosCategory } from "./api"; // Assurez-vous de mettre à
import Link from "next/link";

function PhotosPage({ galleries }) {
  const [index, setIndex] = useState(-1);
  console.log(galleries);
  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-3 gap-4">
        {galleries.map((gallery, idx) => (
          <div key={idx}>
            <Link href={`/photos/${gallery.slug}`}>
              {gallery.title}
              img <img src={gallery.featuredImage} alt={gallery.title} />
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
    // Assurez-vous que cette ligne est présente
    // ... vous pouvez ajouter d'autres données si nécessaire
  }));

  return {
    props: {
      galleries,
    },
  };
}

export default PhotosPage;
