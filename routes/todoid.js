var express = require('express');
var router = express.Router();

//Models

const Todoid=require('../models/Todo');
// id üzerinden arama
router.get('/:todo_id', (req, res, next) => {
    const promise = Todoid.findById(req.params.todo_id);
    promise.then((data)=>{

        res.json(data);
    }).catch((err)=>{
        next({ message: 'nothing found.', code: 99 });
        res.json(err);
    });

});
//id üzerinden update
router.put('/:todo_id',(req,res,next)=>{

    const promise=Todoid.findByIdAndUpdate(
        req.params.todo_id,
        req.body,
        {
            new: true
        });
    promise.then((data)=>{

        res.json({status: 1});
    }).catch((err)=>{
        next({ message: 'nothing found.', code: 99 });
        res.json(err);
    });
});
router.delete('/:todo_id', (req, res, next) => {
    const promise = Todoid.findById(req.params.todo_id);
    promise.then((data)=>{

        res.json({status: 1});
    }).catch((err)=>{
        next({ message: 'nothing found.', code: 99 });
        res.json(err);
    });

});

module.exports = router;
