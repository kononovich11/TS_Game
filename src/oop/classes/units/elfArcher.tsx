import CommonUnit from './commonUnit';

class ElfArcher extends CommonUnit {

  damage: number = 45;

  constructor() {
    super('elfArcher', 'range', 90, 60, 'path');
  }

}


export default ElfArcher;