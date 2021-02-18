import CommonUnit from './commonUnit';

class Skeleton extends CommonUnit {

  damage: number = 25;

  constructor() {
    super('skeleton', 'melee', 100, 50, 'path');
  }

}


export default Skeleton;