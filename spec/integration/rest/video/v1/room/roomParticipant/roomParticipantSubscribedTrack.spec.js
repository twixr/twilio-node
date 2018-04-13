'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('SubscribedTrack', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.video.v1.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants('PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .subscribedTracks.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        roomSid: 'RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        subscriberSid: 'PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://video.twilio.com/v1/Rooms/<%= roomSid %>/Participants/<%= subscriberSid %>/SubscribedTracks')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'subscribed_tracks': [],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedTracks?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedTracks?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'subscribed_tracks'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.video.v1.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants('PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .subscribedTracks.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_filters response',
    function() {
      var body = JSON.stringify({
          'subscribed_tracks': [
              {
                  'publisher_sid': 'PAbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
                  'subscriber_sid': 'PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'room_sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'sid': 'MTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'name': 'bob-track',
                  'kind': 'data',
                  'enabled': true
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedTracks?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedTracks?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'subscribed_tracks'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.video.v1.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants('PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .subscribedTracks.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid update request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.video.v1.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants('PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .subscribedTracks.update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        roomSid: 'RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        subscriberSid: 'PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://video.twilio.com/v1/Rooms/<%= roomSid %>/Participants/<%= subscriberSid %>/SubscribedTracks')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update_filters response',
    function() {
      var body = JSON.stringify({
          'publisher_sid': null,
          'subscriber_sid': 'PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'room_sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': null,
          'date_updated': null,
          'sid': null,
          'name': 'bob-track',
          'kind': 'data',
          'enabled': null
      });

      holodeck.mock(new Response(202, body));

      var promise = client.video.v1.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants('PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .subscribedTracks.update();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

