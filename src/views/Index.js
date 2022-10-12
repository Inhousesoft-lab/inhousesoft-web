import React from "react";

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// index page sections
import Hero from "components/Hero";
import Team from "components/Team";
import Banner from "components/Banner";
import Guide from "components/Guide";
import Skills from "components/Skills.js";

class Index extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <MainNavbar />
        <main ref="main">
          <Hero />
          <Team />
          <Banner />
          <Guide />
          <Skills />
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Index;
