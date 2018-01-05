import Object from '@ember/object';
import { A } from '@ember/array';
import { computed } from '@ember/object';
import { oneWay } from '@ember/object/computed';
import Component from '@ember/component';

export default Component.extend({
  actions: {
    removeRole() {
      this.get('removeRole')(...arguments);
    },
    addRole() {
      const role = this.get('newRole');
      this.get('addRole')(role);
      this.set('newRole', '');
    }
  }
});
