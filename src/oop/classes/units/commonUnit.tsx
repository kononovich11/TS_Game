import {ICommonUnit} from '../../interfeces/ICommonUnit';
import FactoryBehavior from '../factory/behaviorFactory';

class CommonUnit implements ICommonUnit {
  name: string;
  type: string;
  health: number;
  initiative: number;
  image: string;
  opponent: any;
  factoryBehavior: any;

  constructor(name: string, type:string, health: number, initiative: number, image: string) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.initiative = initiative;
    this.image = image;
  }


  realizeStrategy(current: any, opponent: any, renderUnits: any, defendFlag: boolean, activeTeam: number) {
    const factoryBehavior = new FactoryBehavior();

    let copyRender: any[] = [...renderUnits];
    let needChangeItem;

    switch(current.type) {
      case 'range': needChangeItem = copyRender.find((item:any) => item.id === opponent.id); break;
      case 'mage': needChangeItem = activeTeam === 2? copyRender.slice(0, 6) : copyRender.slice(6); break;
    }

    let behaviorItem = factoryBehavior.create(current, needChangeItem);
    behaviorItem?.use(defendFlag);

    return copyRender;
  }
}

export default CommonUnit;