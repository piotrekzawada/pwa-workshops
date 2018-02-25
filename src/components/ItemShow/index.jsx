import React from 'react';
import { Redirect } from 'react-router';
import { shape, number, array, object } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import StarsRating from '../StarsRating';
import BottleSvg from '../../svg-components/Bottle';
import ItemDetail from '../ItemDetail';
import Nav from '../Nav';
import Picture from '../Picture';
import './style.scss';

const ItemShow = ({ match, items, history }) => {
  const item = items[match.params.id - 1];

  if (!item) {
    return <Redirect to="/browse" />;
  }

  return (
      <article className="ItemShow">
        <Nav back title={item.name} annotation={`${item.color}, ${item.region}, ${item.country}`} />
        <Helmet>
          <title>{item.name}</title>
          <meta property="og:title" content={item.name} />
          <meta property="og:description" content={`${item.color}, ${item.region}, ${item.country}`} />
          <meta property="og:image" content={item.image_url} />
        </Helmet>
        <div className="ItemShow__inner">
          <img
            alt="country flag"
            className="ItemShow__country-outlines"
            src={`/images/country-outlines/${item.country_code}.svg`}
          />
          <div className="ItemShow__content">
            <div className="ItemShow__stats">
              <div className="ItemShow__rating">{item.rating}</div>
              <p>{item.nr_of_ratings} ratings</p>
              <StarsRating className="ItemShow__stars" maxRating={5} rating={item.rating} />
            </div>

            <div className="ItemShow__image-wrapper">
              {item.image_url ? (
                <Picture src={item.image_url} alt="wine" className="ItemShow__image" />
              ) : (
                <BottleSvg className="ItemShow__image" />
              )}
            </div>
          </div>
        </div>

        <ItemDetail item={item} />
      </article>
  );
};

ItemShow.propTypes = {
  match: shape({
    'params.id': number,
  }),
  history: object,
  items: array,
};

export default withRouter(ItemShow);
