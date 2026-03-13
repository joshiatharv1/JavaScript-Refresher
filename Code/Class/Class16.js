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
        this.password=email; 
    }
}