import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _createdInstances = 0;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static get createdInstances(): number {
    Dwarf._createdInstances += 1;
    return Dwarf._createdInstances;
  }
}