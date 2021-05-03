var express = require('express');
var router = express.Router();

//Models

const Todo=require('../models/Todo');

//yapılacakları listelemek için kullanacağımız router

router.get('/',(req,res)=>{

    const promise=Todo.find({});
    promise.then((data)=>{
        res.json(data);
    }).catch((err)=>{
        res.json(err);
    });

});

//tarih üzerinde arama yaptığımız router

router.get('/:month/:day',(req,res,next)=>{

    const promise=Todo.find({    month: (req.params.month),day:(req.params.day) },'month day description',).exec();

    promise.then((data)=>{

        res.json(data);
    }).catch((err)=>{
        next({ message: 'nothing found.', code: 99 });
        res.json(err);
    });



});

//istediğimiz ayın yapılacaklar listesini gösteren router

router.get('/:month',(req,res,next)=>{

    const promise=Todo.find({    month: (req.params.month) },'month day description',).exec();

    promise.then((data)=>{

        res.json(data);
    }).catch((err)=>{
        next({ message: 'nothing found.', code: 99 });
        res.json(err);
    });



});



//yapılacakları eklemek için kullanacağımız router

router.post('/', (req, res, next)=> {
          //const {description,complete}=req.body;farklı bi kullanımı;

    const todo=new Todo(req.body);


    const promise=todo.save();
    promise.then((data)=>{
        res.json({status:1});
    }).catch((err)=>{
        res.json(err);
    });

});

module.exports = router;
