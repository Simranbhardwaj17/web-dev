// l-10  ++++++++++++++++++++++++++

// Stack (Primitive DT use this mem) , Heap (Non-Primitive)
// If Stack memory use, we get copy of declared var
// in heap we get reference value, change in original if do any change
let state1 = "MP";

let state2 = state1;                               //Here copy of state1 given not orig.so, changes r made in copy only (not in original)
console.log(state2);

state2 = "UK";
console.log(state2);
console.log(state1);                               //No changes in state1
console.log(typeof state1);


// NonPrimitive store into heap, from it we get reference of orignal value not copy (So change in one changes both (real value too))
// All changes/updates r done in real values
user1 = {
    contact: 9999999999,
    email: "abc@gmail.com"
}

user2 = {
    contact: 1111111111,
    email: "abd@gmail.com"
}

user1 = user2;
user2.state = "Uttarakhand";
console.log(user2);
console.log(user1);             //due to change in user2, also change in user1
