import {useEffect, useRef, useState} from 'react';
import {generatePath, useNavigate, useParams} from 'react-router-dom';
import { useAppSelector } from '../../../hooks/use-app-selector';
import {getFilm} from '../../../store/films/selectors/get-film/get-film';
import {useAppDispatch} from '../../../hooks/use-app-dispatch';
import {fetchFilmAction} from '../../../store/films/actions/fetch-film-action/fetch-film-action.api';
import {RoutePath} from '../../../components/routers/app-router/config/router-config';
import TimePlayer from '../../../components/player/time-player/time-player';
import ButtonPlayer from '../../../components/player/button-player/button-player';

const PlayerPage = () => {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchFilmAction(({
      id: id as string,
      navigate: () => {
        navigate('/not-found');
      }
    })));
  }, [id]);

  const film = useAppSelector(getFilm);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);
  const handleVideoEnded = () => setIsPlaying(false);

  // Управление плеером
  const handlePlayControlClick = () => {
    videoRef.current?.paused
      ? videoRef.current?.play()
      : videoRef.current?.pause();
  };

  const handleFullscreenClick = () => {
    videoRef.current?.requestFullscreen();
  };

  // Данные плеера
  const handleLoadMetaData = () => {
    setDuration(Number(videoRef.current?.duration.toFixed(0)));
  };

  const handleTimeUpdate = () => {
    setCurrentTime(Number(videoRef.current?.currentTime.toFixed(0)));
  };

  if (!film || !id) {
    return <div></div>;
  }

  return (
    <div className="player">
      <video
        src={film.videoLink}
        ref={videoRef}
        autoPlay
        onEnded={handleVideoEnded}
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
        onLoadedMetadata={handleLoadMetaData}
        onTimeUpdate={handleTimeUpdate}
        className="player__video"
        poster={film.previewImage}
      />
      <button
        type="button"
        className="player__exit"
        onClick={() => navigate(
          generatePath(RoutePath.film, {id})
        )}
      >
        Exit
      </button>

      <div className="player__controls">
        <TimePlayer duration={duration} currentTime={currentTime}/>
        <ButtonPlayer
          handlePlayControlClick={handlePlayControlClick}
          handleFullscreenClick={handleFullscreenClick}
          name={film.name}
          isPlaying={isPlaying}
        />
      </div>
    </div>
  );
};

export default PlayerPage;
