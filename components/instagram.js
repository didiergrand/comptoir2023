import { useEffect, useState } from 'react';
import insta from "../public/instagram.svg";
import Image from 'next/image';

const InstagramImages = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [nextPageURL, setNextPageURL] = useState(null);
  const [currentDisplayIndex, setCurrentDisplayIndex] = useState(0);

  const fetchImages = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Stocker tous les posts
        const newAllPosts = [...allPosts, ...data.data];
        setAllPosts(newAllPosts);

        // Filtrer les posts pour ne prendre que les images et les premières images des albums
        const newDisplayedImages = newAllPosts
          .map((post) => {
            if (post.media_type === 'IMAGE') {
              return post;
            } else if (post.media_type === 'CAROUSEL_ALBUM') {
              const firstImage = post.children.data.find(child => child.media_type === 'IMAGE');
              if (firstImage) {
                firstImage.permalink = post.permalink;
                return firstImage;
              }
            }
            return null;
          })
          .filter(Boolean); // Éliminer les valeurs null

        setDisplayedImages(newDisplayedImages.slice(0, currentDisplayIndex + 4));
        setCurrentDisplayIndex(currentDisplayIndex + 4);

        // Mettre à jour l'URL de la page suivante
        if (data.paging && data.paging.next) {
          setNextPageURL(data.paging.next);
        } else {
          setNextPageURL(null);
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données Instagram', error);
      });
  };

  useEffect(() => {
    const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
    const initialURL = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,children{media_type,media_url}&limit=10&access_token=${accessToken}`;
    fetchImages(initialURL);
  }, []);

  const loadMore = () => {
    if (displayedImages.length - currentDisplayIndex >= 4 || nextPageURL) {
      // S'il y a suffisamment d'images déjà récupérées
      if (displayedImages.length - currentDisplayIndex >= 4) {
        setDisplayedImages(displayedImages.slice(0, currentDisplayIndex + 4));
        setCurrentDisplayIndex(currentDisplayIndex + 4);
      } else {
        // Sinon, chargez plus de posts
        fetchImages(nextPageURL);
      }
    }
  };

  return (
    <div>
    <h2>Reseaux sociaux</h2>
      <div className="container">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {displayedImages.map((image, index) => (
          <div key={index}>            
            <a href={image.permalink} target="_blank" rel="noopener noreferrer">
                <img src={image.media_url} alt={image.caption || 'Instagram Image'} />
            </a>
          </div>
        ))}
        </div>
      </div>
      <div className="container">
        <div className="flex justify-center gap-1 mt-10">
        {nextPageURL && <button onClick={loadMore}  className="btn btn-sm  transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75" >Plus d'images</button>}
        {/* add a button with the instagram link and icon */}
          <a className="btn btn-secondary btn-sm transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75" href="https://www.instagram.com/comptoirveveyse/" target="_blank" rel="noopener noreferrer">
            <Image src={insta} alt="Suivez-nous sur Instagram" width="24" height="24" className="mr-3" /> Suivez-nous sur Instagram
          </a>
        </div>
       </div>
    </div>
  );
};

export default InstagramImages;
