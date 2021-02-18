import CommonUnit from './commonUnit';

class Bishop extends CommonUnit {

  heal: number = 25;

  constructor() {
    super('bishop', 'healerMass', 130, 20, 'path');
  }

}


export default Bishop;