class Range {
  opponent: any;
  damage: any;

  constructor(opponent: any, damage: any) {
    this.opponent = opponent;
    this.damage = damage
  }

  use() {
    this.opponent.health -= this.damage;
  }

}

export default Range;