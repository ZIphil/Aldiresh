//

import {
  Engine,
  Entity
} from "excalibur";


const STATUS_PROPS = {
  levelInterval: 25000,
  maxLevel: 50,
  comboDuration: 200,
  maxCombo: 40
};


export class Status extends Entity {

  public level: number = 0;
  public levelTime: number = 0;
  public life: number = 15;
  public score: number = 0;
  public missCount: number = 0;
  public shootCount: number = 0;
  public hitCount: number = 0;
  public killCount: number = 0;
  public combo: number = 0;
  public comboTime: number = 0;

  public constructor() {
    super();
  }

  public override onPreUpdate(engine: Engine, delta: number): void {
    this.updateLevel(delta);
  }

  private updateLevel(delta: number): void {
    this.levelTime += delta;
    if (this.level < STATUS_PROPS.maxLevel && this.levelTime >= STATUS_PROPS.levelInterval) {
      this.level ++;
      this.levelTime -= STATUS_PROPS.levelInterval;
    }
  }

  public shoot(): void {
    this.shootCount ++;
  }

  public hitEnemy(dead: boolean): void {
    const gainedScore = 15 * this.wholeBonusRatio * ((dead) ? 3 : 1);
    this.score += gainedScore;
    this.hitCount ++;
    if (dead) {
      this.killCount ++;
    }
    if (this.combo < STATUS_PROPS.maxCombo) {
      this.combo ++;
    }
    this.comboTime = STATUS_PROPS.comboDuration;
  }

  public get levelBonusRatio(): number {
    return this.level / 5 + 1;
  }

  public get hitRate(): number {
    return (this.shootCount === 0) ? 1 : 1 - this.missCount / this.shootCount;
  }

  public get hitBonusRatio(): number {
    return this.hitRate * 4 + 1;
  }

  public get comboRate(): number {
    return this.combo / STATUS_PROPS.maxCombo;
  }

  public get comboBonusRatio(): number {
    return this.comboRate * 4 + 1;
  }

  public get wholeBonusRatio(): number {
    return this.levelBonusRatio * this.hitBonusRatio * this.comboBonusRatio;
  }

  public get averageSpawnTimeout(): number {
    return 3000 - this.level * 60;
  }

}