class Attack {
  currentCard: any;
  opponentCard: any;
  renderUnits: any;
  defend: any;
  activeTeam: number;

  constructor(currentCard: any, opponentCard: any, renderUnits: any, defend: any, activeTeam: number) {
    this.currentCard = currentCard;
    this.opponentCard = opponentCard;
    this.renderUnits = renderUnits;
    this.defend = defend;
    this.activeTeam = activeTeam;
  }

  startAttack() {
    const realization = this.currentCard.__proto__.prototype.realizeStrategy(this.currentCard, this.opponentCard, this.renderUnits, this.defend?.flag, this.activeTeam); //???????
    if (this.defend !== undefined) {
      this.defend.flag = false;
    }
    return realization;
  }
}


export default Attack;