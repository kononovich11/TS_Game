import {ICommonUnit} from '../../interfeces/ICommonUnit';

class CommonUnit implements ICommonUnit {
  name: string;
  type: string;
  health: number;
  initiative: number;
  image: string;
  opponent: any;

  constructor(name: string, type:string, health: number, initiative: number, image: string) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.initiative = initiative;
    this.image = image;
  }

}

export default CommonUnit;