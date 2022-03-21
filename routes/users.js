const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({success: true, msg: ' Show all Users'});
});

router.get('/:id',(req,res)=>{
    res.status(200).json({success: true, msg:`Show User ${req.params.id}`});
});

router.post('/',(req,res)=>{
    res.status(200).json({success: true, msg: 'Create User'});
});
router.put('/:id',(req,res)=>{
    res.status(200).json({success: true, msg: `Update User ${req.params.id}`});
});
router.delete('/:id',(req,res)=>{
    res.status(200).json({success: true, msg: `Delete User ${req.params.id}`});
});
module.exports = router;