'use strict';

const astrologyData = {
  zodiacSigns: [
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
  ],
  astrologicalEvents: [
    'Moon Phase: New Moon',
    'Moon Phase: Full Moon',
    'Planet in Retrograde: Mercury',
    'Planet in Retrograde: Venus',
    'Solar Eclipse',
  ],
  predictions: [
    'Today is a great day for new beginnings.',
    'Be wary of potential challenges.',
    'Your hard work will pay off today.',
    'Today will bring a significant encounter.',
    'Expect financial growth today.',
    'You will find tranquility with a loved one.',
    'Today is a perfect day for self-reflection.',
    'Your dreams are more reachable than they seem.',
  ],
};

const getRandomIndex = array => {
  return Math.floor(Math.random() * array.length);
};

const astrologyMessage = () => {
  const sign = astrologyData.zodiacSigns[getRandomIndex(astrologyData.zodiacSigns)];
  const event = astrologyData.astrologicalEvents[getRandomIndex(astrologyData.astrologicalEvents)];
  const prediction = astrologyData.predictions[getRandomIndex(astrologyData.predictions)];
  return `Zodiac Sign: ${sign}\nAstrological Event: ${event}\nPrediction: ${prediction}`;
};

console.log(astrologyMessage());
