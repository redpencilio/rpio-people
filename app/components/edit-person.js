import EmberObject from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  actions: {
    addRole(title){
      this.get('person.roles').pushObject( EmberObject.create({ title }) );
    },
    removeRole(role, index) {
      this.get('person.roles').removeAt(index);
    },
    addAccount(accountInfo){
      const accounts = this.get('person.accounts');
      accounts.pushObject(new EmberObject(accountInfo));
    },
    removeAccount( account, index ) {
      const accounts = this.get('person.accounts');
      accounts.removeAt(index);
    }
  }
});
