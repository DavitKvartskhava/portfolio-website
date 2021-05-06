import React from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      blogTitle: this.props.match.params.name,
      blogText: "",
    };
  }

  async componentDidMount() {
    var URL =
      "http://localhost:3000/api/projectblogs/" + this.props.match.params.name;
    await axios
      .get(URL)
      .then((res) => {
        this.setState({ loading: false, blogText: res.data[0].blogPost.text });
      })
      .catch((err) => {
        console.log("error occured!");
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.blogTitle}</h1>
        <div>
          {this.state.loading ? (
            <h1>Loading...</h1>
          ) : (
            <Container>
              <Row>
                <Col style={{ textAlign: "center" }}>{this.state.blogText}</Col>
              </Row>
            </Container>
          )}
        </div>
      </div>
    );
  }
}
