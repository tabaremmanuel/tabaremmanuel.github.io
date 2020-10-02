class App extends React.Component {
  constructor(props) {
    super(props);
    this.showAbout = this.showAbout.bind(this);
    this.showPortfolios = this.showPortfolios.bind(this);
    this.hideOtherComponents = this.hideOtherComponents.bind(this);
    this.showMenuFunc = this.showMenuFunc.bind(this);
  }

  state = {
    menuClass: "",
    pageClass: "",
    showPortfolio: false,
    showAbout: false,
    showTop: true
  };

  showMenuFunc = () =>
    this.setState({
      menuClass: this.state.menuClass === "" ? "show-menu" : ""
    });

  hideOtherComponents = () =>
    this.setState({ pageClass: "", showPortfolio: false, showAbout: false, showTop: true });

  showPortfolios = () => {
    this.setState({ pageClass: "portfolios-page", showPortfolio: true, showTop: false, showAbout: false });
  };

  showAbout = () => {
    this.setState({ pageClass: "about-page", showAbout: true, showTop: false, showPortfolio: false });
  };

  render() {
    let portfolio = null,
      about = null,
      top = null;

    if (this.state.showPortfolio) {
      portfolio = <Portfolio />;
    }

    if (this.state.showAbout) {
      about = <About showPortfolios={this.showPortfolios} />;
    }

    if (this.state.showTop) {
      top = <Top click={this.showPortfolios} />;
    }

    return (
      <div className={"homepage " + this.state.menuClass + " " + this.state.pageClass}>
        <Menu
          showMenuFunc={this.showMenuFunc}
          showPortfolios={this.showPortfolios}
          showAbout={this.showAbout}
          hideOtherComponents={this.hideOtherComponents}
        />
        <ToggleMenu click={this.showMenuFunc} />
        {top}
        {about}
        {portfolio}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
// Use the ReactDOM.render to show your component on the browser
ReactDOM.render(<App />, rootElement);
