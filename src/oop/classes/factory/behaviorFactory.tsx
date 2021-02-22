import Range from '../unitTypes/range';
import Mage from '../unitTypes/mage';

class FactoryBehavior {
  create(currrent: any, opponent: any) {
    let behavior: any;
    switch(currrent.type) {
      case 'range': return behavior = new Range(currrent, opponent);
      case 'mage': return behavior = new Mage(currrent, opponent);
    }
  }
}

export default FactoryBehavior;