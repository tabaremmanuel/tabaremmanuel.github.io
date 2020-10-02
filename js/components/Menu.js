class Menu extends React.Component {
  render() {
    return (
      <div className="menu-wrap" onClick={this.props.showMenuFunc}>
        <div className="row flex-row-reverse align-items-center h-75 w-100">
          <div className="w-75">
            <div className="text-center">
              <a
                href="javascript:void(0)"
                onClick={this.props.hideOtherComponents}
              >
                Home
              </a>
              <a href="javascript:void(0)" onClick={this.props.showPortfolios}>
                Portfolio
              </a>
              <a href="javascript:void(0)" onClick={this.props.showAbout}>
                About
              </a>
            </div>
            <Socials />
          </div>
        </div>
      </div>
    );
  }
}
