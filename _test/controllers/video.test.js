const app = require('../../index');
const supertest = require('supertest');
const request = supertest(app);

const videoData = {
  id: "nmXMgqjQzls",
  title: "Video Tour | Welcome to Wizeline Guadalajara",
  thumbnail: "https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg",
  description: "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ..."
}

describe('Videos', () => {
  it("/saveVideo should save a video", async done => {
    const res = await request.post("/api/saveVideo").send({
      videos: [
        videoData
      ]
    });
    expect(res.status).toEqual(200);
    done();
  });

  it("/updateVideo should update a video content", async done => {
    const res = await request.put("/api/updateVideo").send({
      videos: [
        videoData
      ]
    });
    expect(res.status).toEqual(200);
    done();
  });

  it("/getVideoList should get all videos", async done => {
    const res = await request.get("/api/getVideoList");
    expect(res.status).toEqual(200);
    done();
  });

  it("/deleteVideo should delete a video by Id", async done => {
    const res = await request.delete("/api/deleteVideo").send({
      id: "nmXMgqjQzls"
    });
    expect(res.status).toEqual(200);
    done();
  });
});

