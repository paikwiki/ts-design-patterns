class FreightRocketFactory implements RocketFactory<FreightRocket> {
  nextSatelliteId = 0;
  createRocket(): FreightRocket {
    return new FreightRocket();
  }
  createPayload(): Satellite {
    return new Satellite(this.nextSatelliteId++, 100);
  }
  createStages(): FreightRocketStages {
    return [
      new FreightRocketFirstStage(),
      new FreightRocketSecondStage()
    ];
  }
}
