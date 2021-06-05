import {TemperaturePipe} from "./temperature.pipe.";

describe('Temperature.Pipe.TsPipe', () => {
  it('create an instance', () => {
    const pipe = new TemperaturePipe();
    expect(pipe).toBeTruthy();
  });
});
