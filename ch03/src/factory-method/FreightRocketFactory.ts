type FreightRocketStages = [FirstStage, SecondStage];

class FreightRocketFactory extends RocketFactory {
  nextSatelliteId = 0;

  createPayload(): Satellite {
    return new Satellite(this.nextSatelliteId++);
  }
  createStages(): FreightRocketStages {
    return [
      new FirstStage(),
      new SecondStage()
    ];
  }
}