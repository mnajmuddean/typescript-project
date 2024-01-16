//Put questions mark to
//make the field as optional
interface StudentProps {
  name?:string;
  age?:number;
  phone?:number;
  email?:string;
  address?:string;
}

//Void CallBack functions to retrieve 
//nothing and return nothing
type CallBack = () => void;

export class Student {

  events: {[key: string]: CallBack[]} = {}

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

    on(eventName: string, callback: CallBack): void{
      const handlers = this.events[eventName] || [];
      handlers.push();
      this.events[eventName] = handlers;
    }

    trigger(eventName: string): void {
      const handlers = this.events[eventName];

      if (!handlers || handlers.length === 0) {
        return; 
      }

      handlers.forEach(CallBack => {
        CallBack();
      });
    }
    
  }