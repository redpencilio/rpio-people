import EmberObject from '@ember/object';
import { A } from '@ember/array';
import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  person: computed( () => {
    return EmberObject.create({
      url: "https://redpencil.io/people/aad.versteden",
      firstName: "Aad",
      lastName: "Versteden",
      roles: A([
        "Technical Futurist",
        "CEO"
      ]),
      email: "aad.versteden@redpencil.io",
      phone: "+32 476 51 38 48",
      accounts: A([
        EmberObject.create({
          name: "GitHub",
          serviceHomepage: "https://github.com/",
          username: "madnificent",
          accountPage: "https://github.com/madnificent/"
        }),
        EmberObject.create({
          name: "Twitter",
          serviceHomepage: "https://twitter.com/",
          username: "impulsater",
          accountPage: "https://twitter.com/impulsater"
        })
      ])
    });
  } )
});
