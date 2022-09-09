//

import {
  Engine,
  Scene,
  SceneActivationContext
} from "excalibur";
import {
  AutoKillSystem,
  InputManagerSystem,
  RotatingSquareSystem,
  TimerSystem
} from "/source/component";
import {
  FIELD_PROPS
} from "/source/core/constant";
import {
  EnemySpawner
} from "/source/entity/enemy-spawner";
import {
  Player
} from "/source/entity/player";
import {
  Status
} from "/source/entity/status";
import {
  StatusPane
} from "/source/entity/status-pane/status-pane";
import {
  Target
} from "/source/entity/target";


export class MainScene extends Scene {

  public constructor() {
    super();
  }

  public override onInitialize(engine: Engine): void {
    this.initializeSystems();
  }

  public override onActivate({engine}: SceneActivationContext<unknown>): void {
    this.addEntities();
  }

  public override onDeactivate({engine}: SceneActivationContext<unknown>): void {
    this.clearEntities();
  }

  private initializeSystems(): void {
    this.world.add(new RotatingSquareSystem());
    this.world.add(new InputManagerSystem());
    this.world.add(new TimerSystem());
    this.world.add(new AutoKillSystem("field"));
  }

  private addEntities(): void {
    const player = new Player({x: FIELD_PROPS.width / 2, y: FIELD_PROPS.height / 2});
    const enemySpawner = new EnemySpawner({range: "field"});
    const target = new Target({x: FIELD_PROPS.width / 2, y: FIELD_PROPS.height / 2, range: "field"});
    const statusPane = new StatusPane();
    const status = new Status();
    player.target = target;
    player.status = status;
    enemySpawner.status = status;
    statusPane.status = status;
    this.add(player);
    this.add(enemySpawner);
    this.add(target);
    this.add(statusPane);
    this.add(status);
  }

  private clearEntities(): void {
    this.world.clearEntities();
  }

}