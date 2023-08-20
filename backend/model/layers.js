const fetch = require('node-fetch');
const database = require('./database');
const dotenv = require('dotenv');

dotenv.config();
module.exports = {

    /**
     * This function will fetch all the data for a given layer ID
     * @param {*} id - the Id of the layer to fetch
     * @returns the Layerdata
     */

    async getLayerData(id) {

        var layerdata; //data of the layer that is selected in the composition
        const res = await fetch(`http://${process.env.IP}:8080/api/v1/composition/layers/${id}`) //fetches the data of the layer using the url 

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

    /**
     * This function will fetch the active (selected) clip from the API
     * @returns the active clip
     */
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
    /**
     * This function will set the active (selected) clip with the API
     * @param {*} layerid - the ID of the layer on which the selected clip lies
     * @param {*} clipid - The id of the clip to set as selected
     */
    async setSelectedClip(layerid,clipid) {
        await fetch(`http://${process.env.IP}:8080/api/v1/composition/layers/${layerid}/clips/${clipid}/connect`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    /**
     * This function will insert the active (selected) clip into the database
     */
    async insertClipInfo() {
        const res = await fetch(`http://${process.env.IP}:8080/api/v1/composition/clips/selected`)
        clipdata = await res.json();
        path = clipdata.video.fileinfo.path;
        activeClip = clipdata.name.value;
        database.insertData(path,activeClip);
    }
}