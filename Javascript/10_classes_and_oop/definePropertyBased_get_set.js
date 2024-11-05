// L-48
// D-29/10/24

//Here, func-based syntax(defineProperty based)
//old style get_set (when there no class exists)
//As u use prop, so it is little bit modern


function User(email, password) {
    this._email = email
    this._password = password

    // call func obj prop as func also act as obj (defineProperty_- same as get_set)
    //get_set is for class(nowadays)
    //context:-  defineProperty(context, 'prop to overwi8', {to define that prop})
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this._password = value
        }
    })
}

const simu = new User("ab@c.com", "11sd")
console.log(simu);  //as it is value
console.log(simu.email);    //a/c to get_set
console.log(simu.password);







