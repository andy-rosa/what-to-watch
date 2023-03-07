import React, {useEffect, useState} from 'react';
import Player from '../../../components/Player/Player';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Films} from '../../../mocks/films';

const PlayerPage = () => {
  const [player, setPlayer] = useState<Films | null>(null);
  const {id} = useParams();

  useEffect( () => {
    axios.get<Films>(`https://12.react.pages.academy/wtw/films/${id as string}`)
      .then((res) => {
        console.log(res.data);
        return setPlayer(res.data);
      }
      );
  },[ id ]);

  if (!player) {
    return <></>;
  }

  return (
    <Player previewImage={player.previewImage} videoLink={player.videoLink}/>
  );
};

export default PlayerPage;
