class Parent{
    constructor(){
        this.Father_Name = "sirajul Islam";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.Child_Name = name;
    }
    getFullName(){
        return this.Child_Name +" "+this.Father_Name;
    }
}
const baby_name = new Child("Azad");
const baby_name2 = new Child("Muhammod Ali");
console.log(baby_name.getFullName());
console.log(baby_name2.getFullName());