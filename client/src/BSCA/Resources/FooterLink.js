import React from 'react';
import NavLink from '../../Components/NavLink';
import ExternalLink from 'react-icons/lib/fa/external-link';
import InternalLink from 'react-icons/lib/fa/arrow-right';

const FooterLink = (props) =>
  props.internal ? <NavLink className="res-link" to={"/big-sky-code-academy/resources/show/" + props.id}><InternalLink/></NavLink> : <a className="res-link" href={props.link} target="_"><ExternalLink/></a>;


export default FooterLink;
