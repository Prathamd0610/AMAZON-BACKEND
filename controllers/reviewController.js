const reviewModel= require('../models/reviewModel.js');

const getAllReview= async (req,res)=>{
    const review = await reviewModel.find();
    console.log(review);
    res.json({
        status:'success',
        results:1,
        data:{
            reviews:review,
        }
    })
}

const addReview= async (req,res)=>{
    try{
    const review = await reviewModel.create(req.body);
    console.log(review);
    res.json({
        status:'success',
        results:1,
        data:{
            reviews:review,
        }
    })
}catch(err){
    // console.log(err);
    res.json({
        status:'error',
        results:0,
        data:{
            error:err,
        }
    })
}
}

module.exports = {
    getAllReview,
    addReview,
}