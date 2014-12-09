describe('posting to confirm reservation', function(){

    var request = require('supertest'),
        expect = require('expect.js'),
        app = require('../../app'),
        moment = require('moment');

    it('should return 200 with correct request', function(done){
        request(app)
            .post('/1/confirm_reservation')
            .send({
                firstName: "Adam",
                lastName: "West",
                emailAddress: "adam.west@example.com",
                phoneNumber: "07981234567"
            })
            .set('Authorization', 'token ' + process.env.WIDGET_API_KEY)
            .expect(200, done);
    });
    it('should return 400 with empty first name', function(done){
        request(app)
            .post('/1/confirm_reservation')
            .send({
                firstName: "",
                lastName: "West",
                emailAddress: "adam.west@example.com",
                phoneNumber: "07981234567"
            })
            .set('Authorization', 'token ' + process.env.WIDGET_API_KEY)
            .expect(400, done);
    });
    it('should return 400 with empty last name', function(done){
        request(app)
            .post('/1/confirm_reservation')
            .send({
                firstName: "Adam",
                lastName: "",
                emailAddress: "adam.west@example.com",
                phoneNumber: "07981234567"
            })
            .set('Authorization', 'token ' + process.env.WIDGET_API_KEY)
            .expect(400, done);
    });
    it('should return 400 with fake email', function(done){
        request(app)
            .post('/1/confirm_reservation')
            .send({
                firstName: "Adam",
                lastName: "West",
                emailAddress: "not an email",
                phoneNumber: "07981234567"
            })
            .set('Authorization', 'token ' + process.env.WIDGET_API_KEY)
            .expect(400, done);
    });
    it('should return 400 with empty phone number', function(done){
        request(app)
            .post('/1/confirm_reservation')
            .send({
                firstName: "Adam",
                lastName: "West",
                emailAddress: "adam.west@example.com",
                phoneNumber: ""
            })
            .set('Authorization', 'token ' + process.env.WIDGET_API_KEY)
            .expect(400, done);
    });
});