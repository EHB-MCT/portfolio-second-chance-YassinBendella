const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const layers = require('./model/layers');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(cors());


/**template returnLayerData with the correct id:

 * id: string - id of the layer
 * @api {get} /layerdata/:id - the id of the required layer
 * @returns data: object - the data of the layer
 */
app.get(`/layerdata/:id`, async (req,res)=>{
    const id = req.params.id;
    const data = await layers.getLayerData(id);
    res.status(200).json(data)
})

/** template returnClipData with the correct id:
 * id: string - id of the clip
 * name: string - name of the clip
 * @api {get} /clipdata/:id - the id of the required clip
 * @returns data: object - the data of the clip
 */
app.get(`/clipdata`, async(req,res)=>{
    const data = await layers.getClipData(); // data is an array of objects
    res.status(200).json(data)
})

/** template postLayerData with the generated id:
 * id: string - id of the clip
 * name: string - name of the clip
 * @api {post} /setselectedclip/:layerid/:clipid - the id of the required clip
 * @returns return: object - the added clip
 */

app.post(`/setselectedclip/:layerid/:clipid`, async(req,res)=>{
    const layerid = req.params.layerid;
    const clipid = req.params.clipid;
    const data = await layers.setSelectedClip(layerid,clipid);
    layers.insertClipInfo();
    res.status(200).json(data)
})

app.listen(port,()=> console.log(`App listening on port ${port}`))

module.exports = app;