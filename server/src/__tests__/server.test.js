const request = require("supertest")
const {application,expressServer} = require ("../../index")


describe("GET /dewald",()=>{
    it("should return the correct response", (done) => {
        request(application)
          .get("/dewald")
          .expect(200)
          .expect("My name is dewald and my endpoint is working.")
          .end((err, res) => {
            if (err) return done(err);
            done();
          });
      });
    ﻿
    
})

afterAll((close)=>{
    expressServer.close(close);
})