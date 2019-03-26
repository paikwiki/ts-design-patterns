abstract class LiquidRocketStage implements Stage {
  engines: LiquidRocketEngine[] = [];
  refuel(level = 100): void {
    for (let engine of this.engines) {
      engine.refuel(level);
    }
  }
}
