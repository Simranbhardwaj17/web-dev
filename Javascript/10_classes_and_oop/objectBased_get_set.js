// L-48
// D-29/10/24

//object based get_set
const User = {
    _email: 's@b.com',
    _password: '22',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// new:- const func
// now here, factory func(for obj, arr)

// const tea = Object.create()    by def:- null
const tea = Object.create(User)        //on basis of user create obj & refer to tea
console.log(tea.email);






