import React from 'react'

import PropTypes from 'prop-types';

export const FirstApp = ( {
  title, 
  subTitle,
  name
} ) => {
  // console.log(props);
  return (
    <>
      <h1>{ title }</h1>
      <p>I´m a Subtitle: { subTitle }</p>
      <div>{ name }</div>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number
}

FirstApp.defaultProps = {
  title: 'No title',
  subTitle: 'No SubTitle',
  name: 'Ricardo García'
}