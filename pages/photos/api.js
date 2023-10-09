// api.js

import axios from 'axios';

export const getPostBySlug = async (slug) => {
  try {
    const response = await axios.get(`https://admin.comptoir-veveyse.ch/wp-json/wp/v2/posts?category=photos&slug=${slug}`);
    return response.data[0]; // Retournez le premier post correspondant
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
};

export const getAllPostsFromPhotosCategory = async () => {
  try {
    const response = await axios.get(`https://admin.comptoir-veveyse.ch/wp-json/wp/v2/posts?categories=5&_embed`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};
  