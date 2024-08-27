import userData from "../databases/userData.js"


const getAll = (req,res ) => {
    res.render('home.ejs',{users:userData.getAll()})
    //res.status(200).json(userData.getAll());
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
    res.redirect('/users')
}

export default {
    getAll,getuserById,register
}