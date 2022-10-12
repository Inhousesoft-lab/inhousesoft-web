import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

class Guide extends React.Component {
  state = {};
  render() {
    return (
      <>
        <section className="section section-lg bg-gradient-default">
          <Container className="pt-lg pb-100">
            <Row className="text-center justify-content-center">
              <Col lg="10">
                <h2 className="display-3 text-white">한번의 의뢰로 탄탄한 사업의 시작까지</h2>
                <p className="lead text-white">
                  웹사이트 제작 및 향후 관리까지 간편하게 가능하도록, All in One 사이트 제작 서비스를 만나보세요.
                </p>
              </Col>
            </Row>
            <Row className="row-grid mt-5">
              <Col lg="4" className="justify-content-center text-center">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-settings text-primary" />
                </div>
                <h5 className="text-white mt-3">사업을 구상중 이신가요?</h5>
                <p className="text-white mt-3">
                  아직 어떤 디자인의 웹사이트 또는 앱을 만들어야 하는지 모르신다면, 고객님의 사업에 적잘한 앱 가이드를 해드립니다.
                </p>
              </Col>
              <Col lg="4" className="justify-content-center text-center">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-ruler-pencil text-primary" />
                </div>
                <h5 className="text-white mt-3">데모 웹사이트 및 앱이 필요하신가요?</h5>
                <p className="text-white mt-3">
                  베타 및 프로토 타입의 제품이 필요한 고객님을 위해, 간편하고 빠르게 핵심을 구현해 드립니다.
                </p>
              </Col>
              <Col lg="4" className="justify-content-center text-center">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-atom text-primary" />
                </div>
                <h5 className="text-white mt-3">사업 소개 페이지가 필요하신가요?</h5>
                <p className="text-white mt-3">
                  간편하고 전략적인 랜딩페이지가 필요한 고객님께 각 사업에 맞는 랜딩페이지 플랫폼이 준비되어 있습니다.
                </p>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-white"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Guide;
