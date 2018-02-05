import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('contact');
  },
  actions: {
    saveInvitation(newInvitation) {
      newInvitation.save().then(() => {

        this.controller.set('responseMessage', true);
      });

    },
    willTransition() {
      // rollbackAttributes() removes the record from the store
      this.get('model').rollbackAttributes();
    }
  }
});