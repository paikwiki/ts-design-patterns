class FreightRocketBuilder extends RocketBuilder<FreightRocket, Satellite> {
  private buildingRocket: FreightRocket;
  createRocket(): void {
    this.buildingRocket = new FreightRocket();
  }
  addPayload(satellite: Satellite): void {
    this.buildingRocket.payload = satellite;
  }
  get rocket(): FreightRocket {
    return this.buildingRocket;
  }
  addStages(): void {
    let rocket = this.buildingRocket;
    let payload = rocket.payload;
    let stages = rocket.stages;
    stages[0] = new FreightRocketFirstStage(payload.weight * 4);
    if(payload.weight >= FreightRocketBuilder.oneStageMax) {
      stages[1] = new FreightRocketSecondStage(payload.weight);
    }
  }
  refuelRocket(): void {
    let rocket = this.buildingRocket;
    let payload = rocket.payload;
    let stages = rocket.stages;
    let oneMax = FreightRocketBuilder.oneStageMax;
    let twoMax =FreightRocketBuilder.twoStageMax;
    let weight = payload.weight;
    stages[0].refuel(Math.min(weight, oneMax) / oneMax * 100);
    if(weight >= oneMax) {
      stages[1].refuel((weight - oneMax) / (twoMax - oneMax) * 100);
    } 
  }

  static oneStageMax = 1000;
  static twoStageMax = 2000;
}
