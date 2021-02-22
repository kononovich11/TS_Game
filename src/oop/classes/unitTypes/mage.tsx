class Mage {
  opponent: any;
  damage: any;

  constructor(current: any, opponent: any,) {
    this.opponent = opponent;
    this.damage = current.damage;
  }

  use(defendFlag: any) {

    if(defendFlag) {
      this.opponent.map((item: any) => {
        item.health = item.health - this.damage / 2;
        return item;
      });
    } else {
      this.opponent.map((item: any) => {
        item.health -= this.damage;
        return item;
      });
    }

    return this.opponent;
  }

}

export default Mage;