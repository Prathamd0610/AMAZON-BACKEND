const mongoose = require('mongoose');

const reviewSchema= mongoose.Schema({             //schema
    username:{
        type:String,
        required:true,
        unique:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
    },
    image:[String],
    createAt:{
        type:Date,
        default: new Date(),
    },
    updateAt:{
        type:Date,
        default: new Date(),
    },
    // productID:{
    //     type:mongoose.Schema.Types.ObjectId, 
    //     ref:'Products',
    // }

});

const reviewModel= mongoose.model('Reviews',reviewSchema);//model

module.exports= reviewModel;