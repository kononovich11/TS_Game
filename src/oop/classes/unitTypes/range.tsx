class Range {
  opponent: any;
  damage: any;

  constructor(current: any, opponent: any,) {
    this.opponent = opponent;
    this.damage = current.damage;
  }

  use(defendFlag: any) {
    return defendFlag? this.opponent.health -= this.damage / 2 : this.opponent.health -= this.damage;
  }

}

export default Range;