import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Container,
  Row,
  Col
} from "reactstrap";

class Banner extends React.Component {
  state = {};
  render() {
    return (
      <>
        <section className="section section-lg pt-0">
          <Container>
            <Card className="bg-gradient-warning shadow-lg border-0">
              <div className="p-5">
                <Row className="align-items-center">
                  <Col lg="8">
                    <h3 className="text-white">
                      보다 간편하고, 전략적인 웹사이트 및 앱 제작!
                    </h3>
                    <p className="lead text-white mt-3">
                      다양한 컴퓨터 언어를 기반으로 최적의 사이트 개발을 우선시 합니다. 간편한 개발은 예산 절약으로 이어짐으로, 사업 운영에 큰 주요점 입니다.
                    </p>
                  </Col>
                  <Col className="ml-lg-auto" lg="3">
                    <Button
                      block
                      className="btn-white"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                      size="lg"
                    >
                      문의하기
                    </Button>
                  </Col>
                </Row>
              </div>
            </Card>
          </Container>
        </section>
      </>
    );
  }
}

export default Banner;
