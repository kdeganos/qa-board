import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    answerUp(answer) {
      var newRating = Number(answer.get('rating'));
      newRating = newRating + 1;
      answer.set('rating', newRating);
      answer.save();
    },
    answerDown(answer) {
      var newRating = Number(answer.get('rating'));
      newRating = newRating - 1;
      answer.set('rating', newRating);
      answer.save();
    }
  }
});
