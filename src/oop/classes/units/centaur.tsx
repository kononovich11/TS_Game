import CommonUnit from './commonUnit';

class Centaur extends CommonUnit {

  damage: number = 50;

  constructor() {
    super('centaur', 'melee', 150, 50, 'path');
  }

}


export default Centaur;