import 'reflect-metadata';
import { Methods } from './Methods';
import { MetaKeys } from './MetaKeys';

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetaKeys.path, path, target, key);
      Reflect.defineMetadata(MetaKeys.method, method, target, key);
    };
  };
}
export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const put = routeBinder(Methods.put);
export const del = routeBinder(Methods.del);
export const patch = routeBinder(Methods.patch);
