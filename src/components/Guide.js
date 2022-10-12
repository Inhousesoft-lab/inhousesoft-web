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
                <h5 className="text-white mt-3">1 작업 의뢰</h5>
                <p className="text-white mt-3">
                  기획된 자료를 기반으로 간단한 미팅 진행 또는 아직 어떤 디자인의 웹사이트 또는 앱을 만들어야 하는지 모르신다면, 고객님의 사업에 적잘한 앱 가이드를 해드립니다.
                </p>
              </Col>
              <Col lg="4" className="justify-content-center text-center">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-ruler-pencil text-primary" />
                </div>
                <h5 className="text-white mt-3">2 데모 사이트 개발 및 수정 </h5>
                <p className="text-white mt-3">
                  각 사업별 준비된 플랫폼을 기반으로 고객님의 사업에 맞는 커스텀 개발을 진행 후 고객님의 피드백을 받아 수정까지 진행합니다.
                </p>
              </Col>
              <Col lg="4" className="justify-content-center text-center">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-atom text-primary" />
                </div>
                <h5 className="text-white mt-3">3 제품 전달 및 가이드</h5>
                <p className="text-white mt-3">
                  완료된 사이트를 고객님께서 관리가 가능하도록 정보 전달 및 안내를 해드립니다.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Guide;
