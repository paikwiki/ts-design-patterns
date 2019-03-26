class FreightRocketSecondStage extends LiquidRocketStage {
  constructor(thrust: number) {
    super();
    this.engines.push(new LiquidRocketEngine(thrust));
  }
}