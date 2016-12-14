import alt from '../alt';
import AboutActions from '../actions/AboutActions';

class AboutStore {
  constructor() {
    this.bindActions(AboutActions);
    this.portfolioAbout = {"Portfolio":
              {"Age":22,
              "RetirementAge":66,
              "Income":76000
              }
          };
  }

  onGetAboutDataSuccess(data) {
    this.portfolioAbout = data;
  }

  onGetAboutDataFail(jqXhr) {
    // Handle multiple response formats, fallback to HTTP status code number.
    this.portfolioAbout.Portfolio.Age = 0;
  }
}

export default alt.createStore(AboutStore);
