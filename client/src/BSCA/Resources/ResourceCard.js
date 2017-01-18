import React from 'react';
import { Panel, Label } from 'react-bootstrap';
import FavBtn from './FavBtn';
import FooterLink from './FooterLink';

const ResourceCard = (props) => {

  var cats = props.cats.map(c => <Label bsStyle="primary">{c.name}</Label>)

  const footer = (
    <span>
      <span className="res-footer res-cats flex-cats">
        { cats }
      </span>
      <FavBtn  loadingFav={props.loadingFav} fav={props.fav} id={props.id} toggleFav={props.toggleFav}/>
      <FooterLink internal={props.internal} id={props._id} link={props.link}/>
    </span>
  )
  return (
    <Panel className="resource-panel" header={props.title} footer={footer}>
      { props.desc }
    </Panel>
  )}

export default ResourceCard;
