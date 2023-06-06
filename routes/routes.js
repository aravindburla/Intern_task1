import path from "path";
import experss from 'express';
import { Router } from "express";
import fs from 'fs'
const router = Router();
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const p = path.join(__dirname,'item_list.json')
router.get('/',async (req, res)=>{
    let data;
    fs.readFile(p,(err, fileContent)=>{
        if(err){
            console.log('error')
        }else{
            data = JSON.parse(fileContent)
            console.log(data)
        }
    })
    return res.json(data)
})

router.get('/:id',async (req, res)=>{
    let data;
    fs.readFile(p,(err, file)=>{
        if(err){
            console.log(err)
        }
        else{
            data = JSON.parse(file)
            data = data.filter((p)=> p.id == req.params.id);
            console.log(data)
        }
    })
    return res.json(data)
})


export default router;