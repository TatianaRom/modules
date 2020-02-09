export default class CardList {
  constructor(cardClass, api) {
    this.cardClass = cardClass;
    this.api = api;
  }

  render(container, cards) {
    //  использовуйте for of
    //    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    for (let i = 0; i < cards.length; i++) {
      const card = new this.cardClass(cards[i], this.api);
      container.appendChild(card.cardElement);
    }
  }
}
