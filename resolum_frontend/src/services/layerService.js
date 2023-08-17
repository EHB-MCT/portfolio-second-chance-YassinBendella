import axios from'axios';

const getLayerData = (id) => axios.get(`http://localhost:3000/layerdata/${id}`)
const getClipData = () => axios.get(`http://localhost:3000/clipdata`)
const setSelectedClip = (layerId,clipId) => axios.post(`http://localhost:3000/setselectedclip/${layerId}/${clipId}`)

const layerService = {
    getLayerData,
    getClipData,
    setSelectedClip
}
export default layerService;