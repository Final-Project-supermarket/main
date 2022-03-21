const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({success: true, msg: ' Show all Grocery Lists'});
});

router.get('/:id',(req,res)=>{
    res.status(200).json({success: true, msg:`Show Grocery List ${req.params.id}`});
});

router.post('/',(req,res)=>{
    res.status(200).json({success: true, msg: 'Create Grocery List'});
});
router.put('/:id',(req,res)=>{
    res.status(200).json({success: true, msg: `Update Grocery List ${req.params.id}`});
});
router.delete('/:id',(req,res)=>{
    res.status(200).json({success: true, msg: `Delete Grocery List ${req.params.id}`});
});
module.exports = router;