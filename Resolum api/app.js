const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const layers = require('./model/layers');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());



app.get(`/layerdata/:id`, async(req,res)=>{
    const id = req.params.id;
    const data = await layers.getLayerData(id);
    res.status(200).json(data)
})
app.get(`/clipdata`, async(req,res)=>{
    const data = await layers.getClipData();
    res.status(200).json(data)
})
app.post(`/setselectedclip/:layerid/:clipid`, async(req,res)=>{
    const layerid = req.params.layerid;
    const clipid = req.params.clipid;
    const data = await layers.setSelectedClip(layerid,clipid);
    //layers.insertClipInfo();
    res.status(200).json(data)
})
app.get(`/test`, async(req,res)=>{
    const data = await layers.hello();
    res.status(200).json(data)
})

app.listen(process.env.PORT || 5000,()=> console.log(`App listening on port ${process.env.PORT}`))