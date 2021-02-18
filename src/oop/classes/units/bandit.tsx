import Range from '../../unitTypes/range';

import CommonUnit from './commonUnit';


class Bandit extends CommonUnit {

  damage: number = 30;

  constructor() {
    super('bandit', 'range', 75, 60, 'path');
  }

  realizeStrategy(opponent: any) {
    let rangeStrategy = new Range(opponent, this.damage);
    rangeStrategy.use();
  }

}


export default Bandit;