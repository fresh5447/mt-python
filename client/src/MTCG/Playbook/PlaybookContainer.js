import React, { Component } from 'react';
import PanelComponent from './PanelComponent';
import { Grid, Row, Col } from 'react-bootstrap';
import '../../App.css';

const DATA = [
  { myKey: 0, header: "Community Branding", footer: "Learn More" , desc: "Archives of Code.org email communications, templates for your use, and branding guidelines" },
  { myKey: 1, header: "Community Branding", footer: "Learn More" , desc: "Archives of Code.org email communications, templates for your use, and branding guidelines" },
  { myKey: 2, header: "Community Branding", footer: "Learn More" , desc: "Archives of Code.org email communications, templates for your use, and branding guidelines" },
  { myKey: 3, header: "Community Branding", footer: "Learn More" , desc: "Archives of Code.org email communications, templates for your use, and branding guidelines" },
  { myKey: 4, header: "Community Branding", footer: "Learn More" , desc: "Archives of Code.org email communications, templates for your use, and branding guidelines" },
  { myKey: 5, header: "Community Branding", footer: "Learn More" , desc: "Archives of Code.org email communications, templates for your use, and branding guidelines" },
  { myKey: 6, header: "Community Branding", footer: "Learn More" , desc: "Archives of Code.org email communications, templates for your use, and branding guidelines" },
  { myKey: 7, header: "Community Branding", footer: "Learn More" , desc: "Archives of Code.org email communications, templates for your use, and branding guidelines" },
  { myKey: 8, header: "Community Branding", footer: "Learn More" , desc: "Archives of Code.org email communications, templates for your use, and branding guidelines" }
];

class PlaybookContainer extends Component {
  render() {
    return(
      <Grid>
        <Row className="show-grid">
          <Col xs={12} className="playbook-flexbox">
            { DATA.map((item) => {
              return <PanelComponent key={item.myKey} header={item.header} desc={item.desc} footer={item.footer} />
            })}
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default PlaybookContainer;
