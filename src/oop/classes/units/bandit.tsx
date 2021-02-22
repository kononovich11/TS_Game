import CommonUnit from './commonUnit';

class Bandit extends CommonUnit {

  damage: number = 30;

  constructor() {
    super('bandit', 'range', 25, 60, 'path');
  }
}


export default Bandit;