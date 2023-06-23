'use strict';

const zodiacSigns = [
  'Aries',
  'Taurus',
  'Gemini',
  'Cancer',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn',
  'Aquarius',
  'Pisces',
];
const astrologicalEvents = [
  'Moon Phase: New Moon',
  'Moon Phase: Full Moon',
  'Planet in Retrograde: Mercury',
  'Planet in Retrograde: Venus',
  'Solar Eclipse',
];
const predictions = [
  'Today is a great day for new beginnings.',
  'Be wary of potential challenges.',
  'Your hard work will pay off today.',
  'Today will bring a significant encounter.',
  'Expect financial growth today.',
  'You will find tranquility with a loved one.',
  'Today is a perfect day for self-reflection.',
  'Your dreams are more reachable than they seem.',
];

const getRandomIndex = array => {
  return Math.floor(Math.random() * array.length);
};

const astrologyMessage = () => {
  const sign = zodiacSigns[getRandomIndex(zodiacSigns)];
  const event = astrologicalEvents[getRandomIndex(astrologicalEvents)];
  const prediction = predictions[getRandomIndex(predictions)];
  return `Zodiac Sign: ${sign}\nAstrological Event: ${event}\nPrediction: ${prediction}`;
};

console.log(astrologyMessage());
