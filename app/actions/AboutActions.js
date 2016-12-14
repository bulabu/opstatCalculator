import alt from '../alt';

class AboutActions {
  constructor() {
    this.generateActions(
      'getAboutDataSuccess',
      'getAboutDataFail'
    );
  }
  getAboutData(){
    return {"Portfolio":
              {"Age":25,
              "RetirementAge":66,
              "Income":76000
              }
          };
  }
}

export default alt.createActions(AboutActions);
