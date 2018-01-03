import { computed } from '@ember/object';
import { A } from '@ember/array';
import Component from '@ember/component';

export default Component.extend({
  maxOnlineAccountLength: computed('person.accounts.@each.name', function(){
    let accounts = this.get('person.accounts') || A();
    return accounts.reduce( ( previousLength, account ) => Math.max( previousLength, account.get('name').length )
                            , 0 );
  })
});
