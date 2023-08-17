import React, { useEffect, useState, Component} from 'react';
import layerService from '../services/layerService';

function Layer() {
    const [layerData1, setLayerData1] = useState([]);
    const [layerData2, setLayerData2] = useState([]);
    const [layerData3, setLayerData3] = useState([]);
    const [activeClip, setActiveClip] = useState([]);

    useEffect(() => {
        getLayers();
        setInterval(() => {
            getCurrentActiveClip();
        }, 1000);
    }, []);

    const getLayers = async () => {
        for (let i = 1; i < 4; i++) {
            const res = await layerService.getLayerData(i);
            if (i === 1) {
                setLayerData1(res.data);
                console.log("layerdata: "+layerData1);
            } else if (i === 2) {
                setLayerData2(res.data);
            } else if (i === 3) {
                setLayerData3(res.data);
            }
        }
    }
    const setClipActive = async (layerId,clipId) => {
        console.log("layerid: "+layerId + " clipid: "+clipId);
        await layerService.setSelectedClip(layerId,clipId);
    }
    const getCurrentActiveClip = async () => {
        const res = await layerService.getClipData();
        setActiveClip(res.data);
    }
    return (
        <div className='body'>
            <h1 className='headers'>Layer 1</h1>
            {layerData1.clips && layerData1.clips.map((clip,index) => (
                <div>
                    <button className='buttons' type='submit' onClick={() => setClipActive(layerData1.layer,index+1)}>{layerData1.name[index].name}</button>
                </div>
            ))}
            <h1 className='headers'>Layer 2</h1>
            {layerData2.clips && layerData2.clips.map((clip,index) => (
                <div>
                    <button className='buttons' type='submit' onClick={() => setClipActive(layerData2.layer,index+1)}>{layerData2.name[index].name}</button>
                </div>
            ))}
            <h1 className='headers'>Layer 3</h1>
            {layerData3.clips && layerData3.clips.map((clip,index) => (
                <div>
                    <button className='buttons' type='submit' onClick={() => setClipActive(layerData3.layer,index+1)}>{layerData3.name[index].name}</button>
                </div>
            ))}
            <h1 className='headers'>Current active clip: {activeClip.name} </h1>
            </div>
    );
}
export default Layer;