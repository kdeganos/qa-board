import Ember from 'ember';
import moment from 'moment';

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
        date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
        notes: this.get('notes')
      };
        this.set('addNewQuestion', false);
        this.sendAction('saveQuestion', params);
      }
  }
});
