const express = require('express');
const user = require('../models/user');

const index = async (req,res)=> {
    try {
        const dataUser = await User.find();
        res.status(200).send({status:200,message :'success',data : dataUser});
    } catch (err) {
        res.status(500).send({message:err})
    }
};

const create = async (req,res)=> {
    try {
        const dataUser = await User({
            username : req.body.username,
            email : req.body.email,
            phone : req.body.phone,
            address : req.body.address,
        });

        dataUser.save();
        res.status(200).send({status:200,message :'user berhasil di tambahkan',data : dataUser});
    }catch (err){
        res.status(500).send({message:err})
    }
};

module.exports = {index,create};