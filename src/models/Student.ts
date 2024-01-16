//Put questions mark to

import axios, { AxiosResponse } from "axios";

//make the field as optional
interface StudentProps {
  id?: string;
  name?:string;
  age?:number;
  phone?:number;
  email?:string;
  address?:string;
}

export class Student {

  constructor(private data: StudentProps) {}

    //This will fetch the Student info such as 
    //name, age, phone, email and address
    get(propName: string): (number | string){
      return this.data[propName];
    }

    //This update will copy any data as a new data
    set(update: StudentProps): void {
      Object.assign(this.data, update);
    }

    
    fetch(): void {
      axios.get(`http://localhost:3000/students/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
    }

    save(): void {
      const id = this.get('id');
      if ('id') {
        // put 
        axios.put(`http://localhost:3000/students/${id}`, this.data);
      } else {
        // post
        axios.post(`http://localhost:3000/students`, this.data);
      }
    }
    
  }