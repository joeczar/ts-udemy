import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { userUrl } from '../urls.json';
import { Attributes } from './Attributes';
export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(userUrl);
  public attributes: Attributes<UserProps>;
  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}
