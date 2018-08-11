var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true, // эта и следующая строчки для валидации текста
    minlength: 1,
    trim: true // чтобы текст не состоял из одних пробелов
  },
  completed: {
    type: Boolean,
    default: false // базовое значение
  },
  completedAt: {
    type: Number,
    default: null // базовое значение
  }
});

module.exports = {Todo};
