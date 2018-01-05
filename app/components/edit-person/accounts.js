import Component from '@ember/component';

export default Component.extend({
  actions: {
    removeAccount( account, index ){
      this.get('removeAccount')( account, index );
    },
    addAccount(){
      this.get('addAccount')({
        name: this.get('newAccountName'),
        serviceHomepage: this.get('newServiceHomepage'),
        username: this.get('newAccountUsername'),
        accountPage: this.get('newAccountAccountPage')
      });
      this.setProperties({
        newAccountName: "",
        newServiceHomepage: "",
        newAccountUsername: "",
        newAccountAccountPage: ""
      });
    }
  }
});
