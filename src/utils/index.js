const shuffleDeck = (deck) => {
  return deck.sort(() => Math.random() - 0.5);
};

export { shuffleDeck };
