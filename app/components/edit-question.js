import Ember from 'ember';

export default Ember.Component.extend({
  editQuestion: false,
  actions: {
    questionFormShow() {
      this.set('editQuestion', true);
    },
    editQuestion(question) {
      var params = {
        questionAuthor: this.get('questionAuthor'),
        questionContent: this.get('questionContent'),
        notes: this.get('notes')
      };
        this.set('editQuestion', false);
        this.sendAction('updateQuestion', question, params);
      },
      destroyQuestion(question) {
        if (confirm('Are you sure you want to delete this question?')) {
          this.sendAction('destroyQuestion', question);
        }
      }
  }
});
