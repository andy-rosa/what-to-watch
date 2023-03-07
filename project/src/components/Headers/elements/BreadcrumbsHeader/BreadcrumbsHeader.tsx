import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import {Films} from '../../../../mocks/films';

const BreadcrumbsHeader = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [breadcrum, setBreadcrum] = useState<string | null>(null);

  useEffect(() => {
    axios.get<Films>(`https://12.react.pages.academy/wtw/films/${id}`)
      .then((res) => setBreadcrum(res.data.name));
  },[id]);

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/films/${id}`} className="breadcrumbs__link">{breadcrum}</Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};

export default BreadcrumbsHeader;
