//homepage
const homeController = (req,res)=>{
    res.send('homepage section')
}

// API
const apiController = (req,res)=>{
    res.json({
        id:1
    })
}

module.exports = {homeController,apiController}