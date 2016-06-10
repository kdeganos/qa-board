import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  questionAuthor: DS.attr(),
  questionContent: DS.attr(),
  notes: DS.attr(),
  date: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
