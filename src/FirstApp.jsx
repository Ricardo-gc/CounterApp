import React from 'react'
import PropTypes from 'prop-types';

export const FirstApp = ( {
  title, 
  subTitle,
  name
} ) => {
  return (
    <>
      <h1 data-testid="test-title">{ title }</h1>
      <p>{ subTitle }</p>
      <div>{ name }</div>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

FirstApp.defaultProps = {
  title: 'No title',
  subTitle: 'No SubTitle',
  name: 'Ricardo García'
}

