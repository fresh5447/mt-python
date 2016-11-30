import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../Components/NavLink';
import { Jumbotron, Button, Panel, Grid, Col, Row, ButtonGroup } from 'react-bootstrap';

class ActiveModuleContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      module: null
    };
  }

  componentWillMount(props) {
    console.log('PROPS', props)
    this.loadModule(this.props.params.module_id);
  }

  componentWillReceiveProps() {
    this.loadModule(this.props.params.module_id);
  }


  loadModule(id) {
    $.ajax({
      url: '/api/v2/modules/' + id,
      method: 'GET',
    }).done((data) => {
      console.log(data);
      this.setState({ module: data });
    });
  }
  render() {
    return (
    <div>
      <Jumbotron>
        <h3>{this.state.module ? this.state.module.title : null}</h3>
      </Jumbotron>

      <Grid>
        <Row className="show-grid">
          <Col xs={2} md={2}>
            <ButtonGroup vertical>
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





{/* <div>
  <Jumbotron>
    <h3>{this.state.module ? this.state.module.title : "Loading Title"}</h3>
    <p>{this.state.module ? this.state.module.desc : "Loading Desc"}</p>
    <p>0/10 Checkpoints Complete</p>
  </Jumbotron>
  <Jumbotron>
    { this.state.module ?
      this.state.module.checkpoints.map((item)=> {
        return (
          <Panel header={item.title} footer={"GO"}>
            <p>{item.desc}</p>
          </Panel>
        )
      })
      : null }
  </Jumbotron>
</div> */}
