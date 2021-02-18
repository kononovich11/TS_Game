import Skeleton from '../units/skeleton';
import Bandit from '../units/bandit';
import Centaur from '../units/centaur';
import elfArcher from '../units/elfArcher';
import skeletonMage from '../units/skeletonMage';
import Archimage from '../units/archimage';
import Monk from '../units/monk';
import Bishop from '../units/bishop';
import Sirena from '../units/sirena';


class FabricaUnits {
  create(name: string) {
    let unit: any;
    switch(name) {
      case 'skeleton': return unit = new Skeleton();
      case 'centaur': return unit = new Centaur();
      case 'bandit': return unit = new Bandit();
      case 'elfArcher': return unit = new elfArcher();
      case 'skeletonMage': return unit = new skeletonMage();
      case 'archimage': return unit = new Archimage();
      case 'monk': return unit = new Monk();
      case 'bishop': return unit = new Bishop();
      case 'sirena': return unit = new Sirena();
    }
  }
}

export default FabricaUnits;