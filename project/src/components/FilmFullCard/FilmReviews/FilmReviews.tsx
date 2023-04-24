import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Reviews} from '../../../types/reviews';
import FilmPost from './elements/FilmPost/FilmPost';

const FilmReviews = () => {
  const [posts, setPost] = useState<Reviews[]>([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get<Reviews[]>(`https://12.react.pages.academy/wtw/comments/${id}`).then(
      (res) => setPost(res.data)
    );
  },[posts]);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {posts.length
          ? posts.map((post) => (
            <FilmPost
              comment={post.comment}
              date={post.date}
              id={post.id}
              rating={post.rating}
              user={post.user}
              key={post.id}
            />
          ))
          : <p className="film-card__details-value">Your review will be the first</p>}
      </div>
    </div>
  );
};

export default FilmReviews;
