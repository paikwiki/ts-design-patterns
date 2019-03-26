class LiquidRocketEngine extends Engine {
  fuelLevel = 0;
  refuel(level: number): void {
    this.fuelLevel = level;
  }
}
