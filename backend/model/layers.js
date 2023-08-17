const fetch = require('node-fetch');
const database = require('./database');
const dotenv = require('dotenv');

dotenv.config();
module.exports = {
hello: function() {
    return "Hello";
},
async getLayerData(id) {
    var layerdata;
    const res = await fetch(`http://${process.env.IP}:8080/api/v1/composition/layers/${id}`)
    layerdata = await res.json();
    let clips = layerdata.clips;
    let clipsarray = [];
    let clipsname = [];
    for (let i=0; i<clips.length; i++) {
        if (clips[i].video != null) {
            let obj = {
                path: clips[i].video.fileinfo.path
            }
            let name = {
                name: clips[i].name.value
            }
            clipsname.push(name);
            clipsarray.push(obj);
        }
    }
    let layerobj = {
        id: layerdata.id,
        layer: id,
        name: clipsname,
        numclips: clipsarray.length,
        clips: clipsarray
    }
    return layerobj;
},
async getClipData() {
    var clipdata;
    const res = await fetch(`http://${process.env.IP}:8080/api/v1/composition/clips/selected`)
    clipdata = await res.json();
    let clipobj = {
        clipid: clipdata.id,
        name: clipdata.name.value
    }
    return clipobj;
},
async setSelectedClip(layerid,clipid) {
    await fetch(`http://${process.env.IP}:8080/api/v1/composition/layers/${layerid}/clips/${clipid}/connect`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
},
async insertClipInfo() {
    const res = await fetch(`http://${process.env.IP}:8080/api/v1/composition/clips/selected`)
    clipdata = await res.json();
    path = clipdata.video.fileinfo.path;
    activeClip = clipdata.name.value;
    database.insertData(path,activeClip);
}
}
