import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energy: EnergyType;
  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
  }

  private static _createInstances = 0;
  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    Warrior._createInstances += 1;
    return Warrior._createInstances;
  }
}