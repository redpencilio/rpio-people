import EmberObject from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  actions: {
    addRole(){
      this.get('person.roles').pushObject(this.get('newRole'));
      this.set('newRole', '');
    },
    removeRole(role, index) {
      this.get('person.roles').removeAt(index);
    },
    addAccount(){
      const accounts = this.get('person.accounts');
      accounts.pushObject(new EmberObject({
        name: this.get('newAccountName'),
        serviceHomepage: this.get('newAccountServiceHomepage'),
        username: this.get('newAccountUsername'),
        accountPage: this.get('newAccountAccountPage')
      }));
      this.set('newAccountName', '');
      this.set('newAccountServiceHomepage', '');
      this.set('newAccountUsername', '');
      this.set('newAccountAccountPage', '');
    },
    removeAccount( account, index ) {
      const accounts = this.get('person.accounts');
      accounts.removeAt(index);
    }
  }
});
