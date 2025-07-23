const user ={
    id : 1,
    profile : {
        // fullname : 'Beer',
        address : {
            city : 'Nakhonratchasima'
        }
    }
};
//bad
// console.log(user.profile.fullname);

//old way good
// if (user && user.profile.fullname !== undefined){
// console.log(user.profile.fullname);
// }


//new good
const fullname = user?.profile.fullname;
console.log(fullname);
