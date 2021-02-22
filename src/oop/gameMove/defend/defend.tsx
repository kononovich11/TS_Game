class Defend {
  dataCurrentTeam: any;
  round: number;
  flag: boolean;

  constructor(dataCurrentTeam: any, round: number, flag: boolean) {
    this.dataCurrentTeam = dataCurrentTeam;
    this.round = round;
    this.flag = flag;
  }

  startDefend() {
    console.log('Defend!!');
  }
}


export default Defend;