import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

class Team extends React.Component {
  state = {};
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <h2 className="display-3">저희 회사는</h2>
                <p className="lead text-muted">
                  개발자 출신의 CEO 1인으로 구성되어 있으며, 디자인 및 기획 등 필요한 인력은 상시 연락 가능한 전문 프리랜서 들과 상시 연락 하며 고객님의 요구에 최적의 결과를 만들어 내도록 최선을 다하고 있습니다.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Team;
