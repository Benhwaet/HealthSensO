const { Schema, model, Types } = require('mongoose');

const nutritionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    calories: {
        type: Number,
        required: true
    },
    proteins: {
        type: Number,
        required: true
    },
    carbohydrates: {
        type: Number,
        required: true
    },
    fats: {
        type: Number,
        required: true
    }
});

const Nutrition = model('Nutrition', nutritionSchema);

module.exports = Nutrition;
