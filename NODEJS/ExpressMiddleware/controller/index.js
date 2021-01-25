const homepageController = (req,res)=>{
    res.send('homepage')
}

const loginController = (req,res)=>{
    res.send('login section')
}

const registerController = (req,res)=>{
    //console.log(req.body)
    res.send('register section')
}

const apiController = (req,res)=>{
    //console.log(req.body)
    res.json({something})
}

//advanced routing:
const UserController = (req,res)=>{
    //console.log(req.body)
    let username = req.query.username
    console.log(username)
    console.log('works')
    console.log(req.body)
    res.send('user section')
}

const singleUserController = (req,res)=>{
    let userID = req.params.userid
    console.log(userID)
res.send('single user profile section')
}

const postController=(req,res)=>{
    console.log(req.params)
    res.send('post section')
}

module.exports = {homepageController,loginController,registerController,apiController,UserController,singleUserController, postController}