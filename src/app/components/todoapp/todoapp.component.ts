import { Component } from '@angular/core';
import { Todoapp } from 'src/app/models/todoapp';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
})
export class TodoappComponent {
  username: string = '';
  phonenumber: number = 91;
  email: string = '';
  todoapps: Todoapp[] = [];
  id: number = 1;
  editId: number = 0;
  btnText: string = 'save';

  //add
  save(): Todoapp[] {
    if (this.editId === 0) {
      this.todoapps.push({
        id: this.todoapps.length + 1,
        user: this.username,
        Email: this.email,
        number: this.phonenumber,
      });
      this.username = '';
      this.email = '';
      this.phonenumber = +91;
      return this.todoapps;
    } else {
      // this.edit(this.id);
      this.todoapps = this.todoapps.map((id) => {
        if (id.id === this.editId) {
          return {
            ...id,
            user: this.username,
            Email: this.email,
            number: this.phonenumber,
          };
        } else {
          return id;
        }
      });
      this.btnText = 'save';
      this.username = '';
      this.email = '';
      this.phonenumber = +91;
      return this.todoapps;
    }
    this.editId = 0;
  }

  //delete
  delete(id: number) {
    let newtodo: number = this.todoapps.findIndex((i) => i.id === id);
    this.todoapps.splice(newtodo, 1);
  }

  edit(id: number): Todoapp[] {
    this.editId = id;
    this.btnText = 'Edit';
    let newtodo: number = this.todoapps.findIndex((i) => i.id === id);
    this.username = this.todoapps[newtodo].user as string;
    this.email = this.todoapps[newtodo].Email as string;
    this.phonenumber = this.todoapps[newtodo].number as number;

    return this.todoapps;
  }
}
