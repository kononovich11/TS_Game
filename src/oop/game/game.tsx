import Initialization from '../initialization';

export class Game {
  renderUnits: any;
  firstTeam: any;
  secondTeam: any;
  activeTeam: any;
  dataCurrentTeam: any;
  round: any; 
  information: any;

  startGame() {
    this.activeTeam = 1;
    this.round = 1;
    this.renderUnits = Initialization();

    const half:number = this.renderUnits.length / 2;
    this.firstTeam = this.renderUnits.slice(0, half);
    this.secondTeam = this.renderUnits.slice(half);

    this.dataCurrentTeam = this.activeTeam === 1? this.firstTeam : this.secondTeam;

    return this.renderUnits;
  }

  getInfo() {
    return {
      round: this.round,
      team: this.activeTeam,
      dataCurrentTeam: this.dataCurrentTeam,
    }
  }
}