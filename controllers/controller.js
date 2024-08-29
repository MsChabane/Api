import userData from "../databases/userData.js"


const getAll = (req,res ) => {
    res.status(200).render('home.ejs',{users:userData.getAll(),title: "home page"})
   // res.status(200).json(userData.getAll());
}
const getuserById=(req,res)=>{
    const id = req.params.id;
    if(!isNaN(id)){
        const user= userData.getuserById(parseInt(id));
        return user ? res.status(302).json(user):res.status(404).json("user not found !!!")
    }
    res.status(400).json(`bad request ${id } not valid`);
}

const register =(req,res)=>{
    const {username,firstname,lastname,isAdmin}=  req.body;
    let user = userData.findUserByUsername(username)
    if(user)
        return res.status(400).json(`username ${username} already exist `)
    user = {username,firstname,lastname,isAdmin}
    userData.addUser(user)
   res.status(201).json(user);
 // res.redirect('/api/users')
}

const createUser =  (req,res) => {
    res.render('create.ejs',{title: "create User"})
}

const deleteUser =(req,res)=>{
    const id =req.params.id;
    userData.deleteUser(parseInt(id));
    //res.redirect('/api/users')
    res.json(`user of id ${id} has been deleted`);
}

export default {
    getAll,getuserById,register,createUser,deleteUser
}