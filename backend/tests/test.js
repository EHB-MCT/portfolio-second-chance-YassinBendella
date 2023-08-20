const request = require("supertest")
const server = require('../app.js');
const { expect } = require("chai");

describe("Test layerdata api endpoint", () =>{
    it('GET /layerdata/:layerid', async () =>{
        console.log("testing layerid")
        const layerData = await request(server).get('/layerdata/1');
        expect(layerData.body.id).to.be.not.null;
        expect(layerData.body.layer).to.be.not.null;
        // get the number of clips
        const numberOfClips = layerData.body.numclips;
        const names = layerData.body.name;
        const paths = layerData.body.clips;
        // expect the number of clip names to equal the total number of clips
        expect(names.length).to.equal(numberOfClips)
        // expect the number of clip paths to equal the total number of clips
        expect(paths.length).to.equal(numberOfClips)
    })
})

describe("Test clipdata", () => {
    it("GET /clipdata", async () =>{
        const data = await request(server).get('/clipdata');
        expect(data.body.name).to.be.not.null
        expect(data.body.clipid).to.be.not.null
    })
})