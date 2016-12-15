import alt from '../alt';
import AboutActions from '../actions/AboutActions';

class AboutStore {
  constructor() {
    this.bindActions(AboutActions);
    this.Age = 22;
    this.RetirementAge=66,
    this.Income=76000
    this.MaritalStatus
    this.State
  }

  onGetAboutDataSuccess(data) {
    this.portfolioAbout = data;
  }

  onGetAboutDataFail(jqXhr) {
    // Handle multiple response formats, fallback to HTTP status code number.
    this.portfolioAbout.Portfolio.Age = 0;
  }
  onUpdatePortfolioAboutIncome(income) {
    this.Income = income.target.value;
  }
  onUpdatePortfolioAboutAge(age) {
    this.Age = age.target.value;
  }
  onUpdatePortfolioAboutRetirementAge(retirementage) {
    this.RetirementAge = retirementage.target.value;
  }
  onUpdatePortfolioAboutMaritalStatus(maritalStatus) {
    this.MaritalStatus = maritalStatus.target.value;
  }
  onUpdatePortfolioAboutState(state) {
    this.State = state.target.value;
  }
}

export default alt.createStore(AboutStore);
