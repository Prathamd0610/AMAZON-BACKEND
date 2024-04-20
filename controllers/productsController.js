const productModel= require('../models/productsModel.js');

const getAllProducts=async(req,res)=>{
    const {sort='price',page=1,pageSize=3,fields='-images',...q}= req.query;
    const sortstr=sort.split(',').join(' ');
    const fieldStr=fields.split(',').join(' ');
    console.log(sortstr);
    
    let query=  productModel.find(q);
    query= query.sort(sortstr);
    
    const skip=pageSize*(page-1);
    query=query.select(fieldStr);
    // const limit=3;
    query=query.skip(skip).limit(pageSize);
    const products= await query;  
    const totalResults=await productModel.countDocuments();
    console.log(products);
    // console.log(req.url);
        res.json({
        status:'success', 
        results:products.length,
        totalResults:totalResults,
        pageSize:pageSize,
        page:page,
        data:{
            products,
        },

    })
}

const addProduct=async(req,res)=>{
    try{
        const {_id,...data} = await productModel.create(req.body);
        console.log(req.body);
        res.json({
            status:'success',
            results:1,
            data:{
                products:data,
            }
        })
    }
    catch(err){
        res.status(403);
        console.log(err);
        res.json({
            status:'failed',
            results:0,
        })
    }
}

const replaceProduct=async(req,res)=>{Q 
    try{
        const reqID= req.params.id;
        const data= {...req.body,_id: reqID};
        console.log(data)
        const result = await productModel.findOneAndReplace({_id:reqID},data);
        // console.log(result);
        res.json({
            status:'success',
            results:1,
            data:{
                products:result,
            }
        })
    }
    catch(err){
        res.status(500);
        console.log(err);
        res.json({
            status:'failed',
            message:JSON.stringify(err),
        })
}
}
module.exports ={
    getAllProducts, 
    addProduct,
    replaceProduct,  
}