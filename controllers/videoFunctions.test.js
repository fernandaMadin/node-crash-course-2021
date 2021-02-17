const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);


describe('/getVideoList', () => {
    it("It should get all videos", async done => {
        const res = await request.get("/api/getVideoList");
        expect(res.status).toEqual(200);
        done();
    });
});

describe('/saveVideo', () => {
    it("It should save videos", async done => {
        const res = await request.post("/api/saveVideo").send({
            videos: [
                {
                    id: "nmXMgqjQzls",
                    title: "Video Tour | Welcome to Wizeline Guadalajara",
                    thumbnail: "https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg",
                    description: "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ..."
                }
            ]
        });
        expect(res.status).toEqual(200);
        done();
    });
});

describe('/updateVideo', () => {
    it("It should update a video content", async done => {
        const res = await request.put("/api/updateVideo").send({
            videos: [
                {
                    id: "nmXMgqjQzls",
                    title: "Video update",
                    thumbnail: "https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg",
                    description: "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ..."
                }
            ]
        });
        expect(res.status).toEqual(200);
        done();
    });
});

describe('/deleteVideo', () => {
    it("It should delete a video by Id", async done => {
        const res = await request.delete("/api/deleteVideo").send({
            id: "nmXMgqjQzls"
        });
        expect(res.status).toEqual(200);
        done();
    });
});



// describe('/saveVideo', () => {
//     it("It should save a Video", async done => {
//         const res = await request.post("/saveVideo").send({
//                     videos: [
//                             {   
//                                 id: "nmXMgqjQzls",
//                                 title: "Video Tour | Welcome to Wizeline Guadalajara",
//                                 thumbnail: "https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg",
//                                 description: "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ..."
//                             }
//                         ]
//                   });
//         done();
//     });
// });

// it('should create a new video register', async () => {
//     const res = await request(app)
//       .post('/api/createVideo')
//       .send({
//         videos: [
//                 {   
//                     id: "nmXMgqjQzls",
//                     title: "Video Tour | Welcome to Wizeline Guadalajara",
//                     thumbnail: "https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg",
//                     description: "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ..."
//                 }
//             ]
//       })
//     expect(res.status).toEqual(200)
//     expect(res.body).toHaveProperty('post')
//   })

// it("Gets the test endpoint", async done => {
//     // Sends GET Request to /test endpoint
//     const res = await request.get("/test");
  
//     // ...
//     done();
//   });