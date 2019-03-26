class FreightRocketFirstStage extends LiquidRocketStage {
  constructor(thrust: number) {
    super();
    let enginesNumber = 4;
    let singleEngineThrust = thrust / enginesNumber;
    for (let i=0; i<enginesNumber; i++) {
      let engine = new LiquidRocketEngine(singleEngineThrust);
      this.engines.push(engine);
    }
  }
}