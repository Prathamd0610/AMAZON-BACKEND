const mongoose = require('mongoose');

const productSchema= mongoose.Schema({             //schema
    title:{
        type:String,
        required:true,
        unique:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String
    },
    images:{
        type:[String],
    },
    createdAt:{
        type:Date,
        default: new Date(),
    },
    updatedAt:{
        type:Date,
        default: new Date(),
    }
})

const productModel= mongoose.model('Products',productSchema);//model

module.exports= productModel;


// const testProduct= new productModel({    //object   //schema->model->object
//     title:'Titan Watch',
//     price:1000,
// });
// const add= new productModel({
//     title:"Samsung refrigerstore",
//     price:14599,
// });
// testProduct.save()
// .then((res)=>{
//     console.log(res);
// });
// add.save();
// productModel.find({},(err,product)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log(product);
// });