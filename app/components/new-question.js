import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params = {
        questionAuthor: this.get('questionAuthor'),
        questionContent: this.get('questionContent'),
        notes: this.get('notes')
      };
        this.set('addNewQuestion', false);
        this.sendAction('saveQuestion', params);
      }
  }
});
