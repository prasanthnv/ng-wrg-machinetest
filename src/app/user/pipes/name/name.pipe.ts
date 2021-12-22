import { UserName } from './../../models/users.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(user?: UserName, ...args: unknown[]): unknown {
    return user ? `${user.title} ${user.first} ${user.last}` : '';
  }

}
