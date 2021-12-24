import { insertRekord, getTamu, getView, getViewPartial } from "../models/recordModel.js";

// Create New Rekord
export const createRekord = (req, res) => {
    const data = req.body;
    insertRekord(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showTamu = (req, res) => {
    getTamu((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showView = (req,res) => {
    getView((err,results) => {
        if(err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const showViewPartial = (req,res) => {
    const data = req.query.bulan;
    getViewPartial(data, (err,results) => {
        if(err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
}