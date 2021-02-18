class Attack {
  constructor(currentUnitIndex: any, opponentUnitIndex: any, arrUnitCurrent: any) {
    this.currentUnitIndex = currentUnitIndex;
    this.opponentUnitIndex = opponentUnitIndex;
    this.arrUnitCurrent = arrUnitCurrent;
  }
  currentUnitIndex: any;
  opponentUnitIndex: any;
  type: string = 'range';
  arrUnitCurrent: any;

  endMove() {
    console.log('END_MOVE');
  }

  attack() {
    // console.log(this.currentUnitIndex, this.opponentUnitIndex, this.arrUnitCurrent);
    const currentUnit = this.arrUnitCurrent.find((item: any, index: number) => index === this.currentUnitIndex);
    const opponentUnit = this.arrUnitCurrent.find((item: any, index: number) => index === this.opponentUnitIndex);
    currentUnit.realizeStrategy(opponentUnit);
    this.endMove();
  }
}

export default Attack;