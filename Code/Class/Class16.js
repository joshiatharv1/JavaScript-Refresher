class User{
    constructor(email, password){
        this.email=email;
        this.password=password;
    }
    get Password(){
        return this.password.toUpperCase();
    }
}
const Atharv=new User("atharv444joshi@gmail.com", "12345@qwe")
console.log(Atharv.password);
// -------------------------------------------------------------------
// --------------- GETTER AND SETTERS---------------------------------
class Uber{
    constructor(email, password){
        this.email=email;
        this.password=password; 
    }
    get email(){
        return `Your email is ${this._email}`
    }
    set email(value){
        this._email=value;
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(password){
        this._password=password;
    }
}
// Getter and Setter are present by default from JavaScript in every classs. 
// On any properties within an class we can use get and set methods. 
// If getter is defined then setter is also mandatiory and vice versa. 
// this.password=password;  we are doing this in contructor and setter this would give error Call Stack Max Size Exceeded. 
// _email and _password has become private in terms how we use them 
const car=new Uber("Atharv@example.com", "4785jf384rh")
console.log(car.password)
console.log(car.email)

function Ola(email, password){
    this._email=email;
    this._password=password

    Object.defineProperty(this, 'email', {
        get: function (){
            return `Your Email from the Ola Function: ${this._email}`
        },
        set: function(value){
            this._email=value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function (){
            return `Your Password from the Ola Function: ${this._password}`
        },
        set: function(value){
            this._password=value
        }
    })
}

const truck=new Ola("truck@emaomple.com", "hfuiyie3478rf")
console.log(truck.email);

// ------------------------------------------------------
// Object based Getter and Setter. 

const Lyft={
    _email:'anotherLyft@example.com',
    _password: 'fjkghfdg9r4fh',
    get email(){
        return `Lyft Function is getting the ${this._email}`
    },
    set email(value){
        this._email=value
    }
}
// Factory Functions: 
const taxi=Object.create(Lyft);
console.log(taxi.email)