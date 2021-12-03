class AddressBook{
    constructor(...parameters){
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zip = parameters[5];
        this.phoneNumber = parameters[6];
        this.email = parameters[7];
    }

    get firstName(){ return this._firstName; }
    set firstName(fName){
        let fNameRegExp = RegExp("^[A-Z]{1}[a-z]{2,}");
        if(fNameRegExp.test(fName))
            this._firstName = fName;
        else throw 'FirstName is Not Matched';
    }

    get lastName(){ return this._lastName; }
    set lastName(lName){
        let lNameRegExp = RegExp("^[A-Z]{1}[a-z]{2,}");
        if(lNameRegExp.test(lName))
            this._lastName = lName;
        else throw 'LastName is Not Matched';
    }

    get address(){ return this._address; }
    set address(address){
        let addressRegex = RegExp('^[a-z A-z]{4,}');
        if(addressRegex.test(address))
            this._address = address;
        else throw 'Address is not Matched';
    }

    get city(){ return this._city; }
    set city(city){
        let cityRegex = RegExp('^[a-z A-z]{4,}');
        if(cityRegex.test(city))
            this._city = city;
        else throw 'City is not Matched';
    }

    get state(){ return this._state; }
    set state(state){
        let stateRegex = RegExp('^[a-z A-z]{4,}');
        if(stateRegex.test(state))
            this._state = state;
        else throw 'State is not Matched';
    }

    get zip(){ return this._zip; }
    set zip(zip){
        let zipRegex = RegExp('^[1-9]{1}[0-9]{5,}$');
        if(zipRegex.test(zip))
            this._zip = zip;
        else throw 'Zip is not Matched';
    }

    get phoneNumber(){ return this._phoneNumber;}
    set phoneNumber(phoneNo){
        let phoneRegex = new RegExp("^(\\d{2})( )([6-9]{1})(\\d{9})");
        if(phoneRegex.test(phoneNo)){
            this._phoneNumber = phoneNo;
        }else{
            throw "PhoneNumber is not Matched";
        }
    }

    get email(){ return this._email;}
    set email(e){
        let emailRegex = new RegExp("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$");
        if(emailRegex.test(e)){
            this._email = e;
        }else{
            console.log("Email is not Matched");
        }
    }

    toString(){
        return "FirstName = " + this.firstName + ", LastName = " + this.lastName + ", Address = " + this.address +
                ", City = " + this.city + ", State = " + this.state + ", Zip = " + this.zip + ", PhoneNumber = " + this.phoneNumber + ", Email = " + this.email;
    }
}

let person = new AddressBook("Smruti", "Lenka", "Artung", "bhadrak", "odisha", 756162 , "91 8917341747", "slenka132@gmail.com");
console.log(person.toString());
try{
    person.firstName = "Smruti";
    console.log(person.firstName);
}catch(e){
    console.error(e);
}
try{
    person.lastName = "Lenka";
    console.log(person.lastName);
}catch(e){
    console.error(e);
}
try{
    person.address = "Artung";
    console.log(person.address);
}catch(e){
    console.error(e);
}
try{
    person.city = "bhadak";
    console.log(person.city);
}catch(e){
    console.error(e);
}
try{
    person.state = "oht";
    console.log(person.state);
}catch(e){
    console.error(e);
}
try{
    person.zip = "123568";
    console.log(person.zip);
}catch(e){
    console.error(e);
}
try{
    person.phoneNumber = "123456782";
}catch(e){
    console.error(e);
}
try{
    person.email = "wert223@gmail.com";
    console.log(person.email);
}catch(e){
    console.log(e);
}

let person1 = new AddressBook("Shruti", "Kangna", "Werfxch", "Rrtytdfgy", "Bihar", "565754", "66 4567532346","erwq45@gmail.com" );
let addressBookArray = [];
addressBookArray[0] = person1;
addressBookArray[1] = person;
console.log(addressBookArray);

let objIndex = addressBookArray.findIndex((obj => obj.firstName == "Smruti"));
console.log("Before Update : " + addressBookArray[objIndex]);
addressBookArray[objIndex].city = "Basudevpur";
console.log("After Update : " + addressBookArray[objIndex]);