//http get request GET METHOD

const GetMethod = (req,res)=>{ 
    res.send('Homepage')
}

module.exports = {GetMethod}

// POST METHOD

const PostController = (req,res)=>{
    console.log(req.body)
    fs.appendFileSync('output.json',JSON.stringify(req.body));
    res.json({
        message:req.body
    })
}

// UPDATE METHOD
const UpdateController = (req,res)=>{
    console.log(req.body)
    res.json({
        message:req.body
    })
}

// DELETE METHOD
const DeleteController = (req,res)=>{
    console.log(req.body)
    res.json({
        message:'Success!!'
    })
}


module.exports ={GetMethod,PostController,UpdateController,DeleteController}

