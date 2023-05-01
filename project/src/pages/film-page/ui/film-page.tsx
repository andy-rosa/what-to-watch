import Footer from '../../../components/footer/footer';
import MoreLikeThis from '../../../components/sections/more-like-this/more-like-this';
import FilmCardFull from '../../../components/sections/film-card-full/film-card-full';

const FilmPage = () => (
  <div>
    <FilmCardFull/>
    <div className="page-content">
      <MoreLikeThis />
      <Footer/>
    </div>
  </div>
);

export default FilmPage;
