class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="row">
                <div className="col-12 text-center pt-5">
                  <h1>About</h1>
                </div>
                <div className="col-12 col-lg-4 text-center text-lg-right pt-4">
                  <div class="profile-photo"></div>
                </div>
                <div className="col-12 col-lg-8 pt-4 text-center text-lg-left">
                  <div className="d-flex h-100 align-items-center">
                    <p>
                      I am a freelance web developer from the Philippines. Most of
                      my work are running on WordPress. I've been in the industry for
                      more than 5 years. On my free time, I ride my bike around the city and go to beaches. Feel free to check on my work&nbsp;
                      <a
                        href="javascript:void(0)"
                        onClick={this.props.showPortfolios}
                      >
                        here
                      </a>
                    </p>
                  </div>
                </div>
                <div class="col-12 text-center py-5">
                    <Socials />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
