class ExperimentalRocketFactory implements RocketFactory<ExperimentalRocket> {
  createRocket(): ExperimentalRocket {
    return new ExperimentalRocket();
  }
  createPayload(): ExperimentalPayload {
    return new ExperimentalPayload();
  }
  createStages(): [ExperimentalRocketStage] {
    return [new ExperimentalRocketStage];
  }
}
