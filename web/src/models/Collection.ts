import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  fetch(): void {
    (async () => {
      try {
        const { data }: AxiosResponse = await axios.get(this.rootUrl);
        data.forEach((value: K) => {
          this.models.push(this.deserialize(value));
        });
        this.trigger('change');
      } catch (err) {
        console.log('Error in Collection.fetch', err);
      }
    })();
  }
}
