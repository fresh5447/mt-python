import React from 'react';
import FullHeart from 'react-icons/lib/fa/heart';
import EmptyHeart from 'react-icons/lib/fa/heart-o';
import Spinner from 'react-icons/lib/fa/spinner';

const heart = {
  color: 'red'
}


const FavBtn = (props) =>
  <button className="fav-btn" onClick={ props.fav ? props.toggleFav.bind(this, props.id, 'remove') :
    props.toggleFav.bind(this, props.id, 'post') }>

      { props.loadingFav ? <Spinner /> : props.fav ? <FullHeart style={heart} /> : <EmptyHeart style={heart} /> }

  </button>

export default FavBtn;
