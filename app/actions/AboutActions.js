import alt from '../alt';

class AboutActions {
  constructor() {
    this.generateActions(
      'getAboutDataSuccess',
      'getAboutDataFail',
      'updatePortfolioAboutIncome',
      'updatePortfolioAboutAge',
      'updatePortfolioAboutRetirementAge',
      'updatePortfolioAboutMaritalStatus'
    );
  }
  getAboutData(){
    return {"Portfolio":
              {"Age":25,
              "RetirementAge":66,
              "Income":75000
              }
          };
  }
}

export default alt.createActions(AboutActions);
