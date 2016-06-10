import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set("addNewAnswer", true);
    },
    saveAnswer() {
      var params = {
        answerAuthor: this.get('answerAuthor'),
        answerContent: this.get('answerContent'),
        rating: 0,
        question: this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
