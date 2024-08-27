let users=// this is the data 
[
    {id :1  , username :"user 1" , firstname : "alilo",lastname :"bachir" , isAdmin : false},
    {id :2  , username :"user 2" , firstname : "madani ",lastname : "foudil", isAdmin :false},
    {id :3  , username :"user 3" , firstname : "messous",lastname :"chabane" , isAdmin :true},
    {id :4  , username :"user 4" , firstname : "al mahhi ",lastname :"ahlem" , isAdmin :false},
    {id :5  , username :"user 5" , firstname : "basem",lastname :"khaled" , isAdmin :true},
    {id :6  , username :"user 6" , firstname : "salmi",lastname : "ahmed", isAdmin :false},
]
let nextId=7;

const getAll=()=> {return users};

const getuserById=(id)=>{
    return  users.find(us => us.id === id) 
}
const addUser = (user)=>{
    users.push( {...user,id:nextId});
    nextId++;
}
const deleteUser =(id)=>{
    users = users.filter(user=> user.id === id); 
}
const findUserByUsername =(username)=>{
    return users.find(user=> user.username.includes(username));
}

export default {addUser,getAll,getuserById,deleteUser,findUserByUsername}
