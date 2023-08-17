import axios from'axios';

const host = process.env.REACT_APP_HOST;
console.log(host)
const getLayerData = (id) => axios.get(`http://${host}/layerdata/${id}`)
const getClipData = () => axios.get(`http://${host}/clipdata`)
const setSelectedClip = (layerId,clipId) => axios.post(`http://${host}/setselectedclip/${layerId}/${clipId}`)

const layerService = {
    getLayerData,
    getClipData,
    setSelectedClip
}
export default layerService;