import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../Components/NavLink';
import { Jumbotron, Button, Grid, Col, Row, ButtonGroup } from 'react-bootstrap';

class ActiveModuleContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      module: null
    };
  }

  componentWillMount() {
    console.log("COMP WILL MOUNT");
    this.loadModule(this.props.params.module_id);
  }

  componentWillReceiveProps() {
    console.log("COMP WILL RECEIVE PROPS");
    this.loadModule(this.props.params.module_id);
  }

  componentWillUnmount() {
    console.log("COMP WILL UNMOUNT");
    this.loadModule(this.props.params.module_id);
  }

  loadModule(id) {
    $.ajax({
      url: '/api/v2/modules/' + id,
      method: 'GET',
    }).done((data) => {
      this.setState({ module: data });
    });
  }
  render() {
    return (
    <div>
      <Jumbotron>
        <h3>{this.state.module ? this.state.module.title : null}</h3>
        <p>{this.state.module ? this.state.module.desc : null}</p>
        <NavLink to={"/big-sky-code-academy/course/" + this.props.params.course_id}><Button>Back</Button></NavLink>
      </Jumbotron>

      <Grid>
        <Row className="show-grid">
          <Col xs={2} md={2}>
            <ButtonGroup vertical>
              <p>Checkpoints</p>
              { this.state.module ?
                this.state.module.checkpoints.map((item)=> {
                  return <Button><NavLink to={"/big-sky-code-academy/course/" + this.props.params.course_id + "/module/" + this.props.params.module_id + "/checkpoint/" + item._id}>{item.title}</NavLink></Button>
                })
                : <Button>Loading...</Button> }
            </ButtonGroup>
          </Col>
          <Col xs={10} md={10}>
            { this.props.children }
          </Col>
        </Row>
      </Grid>
    </div>
    )
  }
}

export default ActiveModuleContainer;
