class SoundingRocketBuilder extends RocketBuilder<SoundingRocket, Probe> {
  private buildingRocket: SoundingRocket;
  createRocket(): void {
    this.buildingRocket = new SoundingRocket();
  }
  addPayload(probe: Probe): void {
    this.buildingRocket.payload = probe;
  }
  addStages(): void {
    let payload = this.buildingRocket.payload;
    this.buildingRocket.engine = new SoildRocketEngine(payload.weight);
  }
  get rocket(): SoundingRocket {
    return this.buildingRocket;
  }
}
