import CommonUnit from './commonUnit';

class SkeletonMage extends CommonUnit {

  damage: number = 20;

  constructor() {
    super('skeletonMage', 'mage', 50, 40, 'path');
  }

}


export default SkeletonMage;