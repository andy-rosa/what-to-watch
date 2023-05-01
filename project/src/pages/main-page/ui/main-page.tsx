import MainFilmCard from '../../../components/sections/main-film-card/main-film-card';
import Footer from '../../../components/footer/footer';
import Catalog from '../../../components/sections/catalog/catalog';

const MainPage = (): JSX.Element => (
  <div data-testid={'home-page'}>
    <MainFilmCard />

    <div className="page-content">
      <Catalog />
      <Footer />
    </div>
  </div>
);

export default MainPage;
