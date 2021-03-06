import FabricaUnits from './classes/factory/factory';
import CommonUnit from './classes/units/commonUnit';


const Initialization: any = (): any  => {

  const fabrica = new FabricaUnits();

  const skeleton = fabrica.create('skeleton');
  const centaur = fabrica.create('centaur');
  const bandit = fabrica.create('bandit');
  const elfArcher = fabrica.create('elfArcher');
  const skeletonMage = fabrica.create('skeletonMage');
  const archimage = fabrica.create('archimage');
  const monk = fabrica.create('monk');
  const bishop = fabrica.create('bishop');
  const sirena = fabrica.create('sirena');

  let arrUnits: object[] = [
    skeleton!,
    centaur!,
    bandit!,
    elfArcher!,
    skeletonMage!,
    archimage!,
    monk!,
    bishop!,
    sirena!,
  ];

  let renderUnits: any[] = [];
  const generateUnits = (arrUnits: any): any => {

    for (let i = 0; i < 12; i++) {
      const randomUnit: number = 2;  //number = Math.round(+Math.random().toFixed(1) * 8);

      let copyObj = JSON.parse(JSON.stringify(arrUnits[randomUnit]));
      copyObj.__proto__ = CommonUnit;
      copyObj.id = i;

      renderUnits.push(copyObj);
    }
    return renderUnits;
  }

  return generateUnits(arrUnits);

}

export default Initialization;