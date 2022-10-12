import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

class Hero extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="position-relative">
          <section className="section section-lg section-shaped">
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col className="justify-content-center text-center">
                    <h1 className="display-3 text-white">
                      간편하고 최적의 웹사이트 개발{" "}
                    </h1>
                    <p className="lead text-white">
                      스타트업을 위한 합리적인 가격의 플랫폼 개발! 린랩과 함께 알아가 볼까요?
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
