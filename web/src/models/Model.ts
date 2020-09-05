import { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}
interface HasId {
  id?: number;
}
export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }
  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('cannot fetch without an id.');
    }

    (async () => {
      try {
        const { data }: AxiosResponse = await this.sync.fetch(id);
        this.set(data);
      } catch (err) {
        this.trigger('error');
      }
    })();
  }

  save(): void {
    (async () => {
      try {
        await this.sync.save(this.attributes.getAll());
        this.trigger('save');
      } catch (err) {
        this.trigger('error');
      }
    })();
  }
}
