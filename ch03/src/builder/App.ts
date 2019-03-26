let director = new Director();

let soundingRocketBuilder = new SoundingRocketBuilder();
let probe = new Probe();
let soundingRocket = director.prepareRocket(soundingRocketBuilder, probe);

let freightRocketBuilder = new FreightRocketBuilder();
let satellite = new Satellite(0, 1200);
let freightRocket = director.prepareRocket(freightRocketBuilder, satellite);