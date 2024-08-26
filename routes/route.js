import { Router } from "express";

 const router = Router();
const users=// this is the data 
[
    {id :1  , username :"user 1" , firstname : "alilo",lastname :"bachir" , isAdmin : false},
    {id :2  , username :"user 2" , firstname : "madani ",lastname : "foudil", isAdmin :false},
    {id :3  , username :"user 3" , firstname : "messous",lastname :"chabane" , isAdmin :true},
    {id :4  , username :"user 4" , firstname : "al mahhi ",lastname :"ahlem" , isAdmin :false},
    {id :5  , username :"user 5" , firstname : "basem",lastname :"khaled" , isAdmin :true},
    {id :6  , username :"user 6" , firstname : "salmi",lastname : "ahmed", isAdmin :false},
]
router.get('/users', (req, res) => {// het all the data
res.json(users)
});
router.get('/users/:id', (req, res) => {//get onse
    const id = req.params.id;//type id is string
    const user = users.find(ur=>ur.id ===  parseInt(id));
    if(user)
        return res.json(user)
    else 
        return res.json({message : "user not found !!!"})
})
 export default  router;