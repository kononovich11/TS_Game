import CommonUnit from './commonUnit';

class Monk extends CommonUnit {

  heal: number = 40;

  constructor() {
    super('monk', 'healerSingle', 90, 20, 'path');
  }

}


export default Monk;