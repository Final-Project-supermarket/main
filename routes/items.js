const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({success: true, msg: ' Show all Items'});
});

router.get('/:id',(req,res)=>{
    res.status(200).json({success: true, msg:`Show Item ${req.params.id}`});
});

router.post('/',(req,res)=>{
    res.status(200).json({success: true, msg: 'Create Item'});
});
router.put('/:id',(req,res)=>{
    res.status(200).json({success: true, msg: `Update Item ${req.params.id}`});
});
router.delete('/:id',(req,res)=>{
    res.status(200).json({success: true, msg: `Delete Item ${req.params.id}`});
});
module.exports = router;