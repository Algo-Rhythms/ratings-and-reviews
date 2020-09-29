import React from 'react';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import PropTypes from 'prop-types';

const Sort = ({ func, currentSort, reviews }) => {
  return (
    <div>
      <Row>
        <Dropdown className="sort-reviews-dropdown">
          <Dropdown.Toggle className="sort-reviews-button">
            {`(${reviews.length}) Reviews, sorted by `}
            {currentSort.charAt(0).toUpperCase() + currentSort.slice(1)}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item className="sort-reviews-item" onClick={() => func('relevance')}>Relevance</Dropdown.Item>
            <Dropdown.Item className="sort-reviews-item" onClick={() => func('helpful')}>Helpfulness</Dropdown.Item>
            <Dropdown.Item className="sort-reviews-item" onClick={() => func('newest')}>Newest</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Row>
    </div>
  );
};

Sort.propTypes = {
  func: PropTypes.func.isRequired,
  currentSort: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Sort;