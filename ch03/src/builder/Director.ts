class Director {
  prepareRocket<
    TRocket extends Rocket,
    TPayload extends Payload
  >(
    builder: RocketBuilder<TRocket, TPayload>,
    payload: TPayload
  ): TRocket {
    builder.createRocket();
    builder.addPayload(payload);
    builder.addStages();
    builder.refuelRocket();
    return builder.rocket;
  }
}