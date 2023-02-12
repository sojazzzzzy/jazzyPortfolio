const mongoose = require('mongoose');
const { Schema, model } = mongoose;
// to know more about this syntax visit this link
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring

const herbsSchema = new Schema({
	name: { type: String, required: true },
	taste: { type: String, required: true },
	partsUsed: { type: Array, required: true },
	isEdible: { type: Boolean, default: false },
	harvestingNotes: { type: String, required: true },
	preparation: { type: String, required: true },
	action: { type: String, required: true },
	virtues: { type: Array, required: true },
	preferredHabitat: { type: String, required: true },
	energetics: { type: String, required: true },
	indications: { type: Array, required: true },
	spiritualUses: { type: Array, required: true },
	clinicalUses: { type: String, required: true },
	indigenousFolklore: { type: String, required: true },
	references: { type: String, required: true },
	safetyPrecautions: { type: String, required: true },
	recipes: { type: String, required: true },
});

const Herbs = model('Herbs', herbsSchema);

module.exports = Herbs;
