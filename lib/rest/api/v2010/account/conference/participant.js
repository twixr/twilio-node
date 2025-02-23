'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require(
    '../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var ParticipantList;
var ParticipantPage;
var ParticipantInstance;
var ParticipantContext;

/* jshint ignore:start */
/**
 * Initialize the ParticipantList
 *
 * @constructor Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The SID of the Account that created the resource
 * @param {string} conferenceSid - The SID of the conference the participant is in
 */
/* jshint ignore:end */
ParticipantList = function ParticipantList(version, accountSid, conferenceSid) {
  /* jshint ignore:start */
  /**
   * @function participants
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantContext}
   */
  /* jshint ignore:end */
  function ParticipantListInstance(sid) {
    return ParticipantListInstance.get(sid);
  }

  ParticipantListInstance._version = version;
  // Path Solution
  ParticipantListInstance._solution = {accountSid: accountSid, conferenceSid: conferenceSid};
  ParticipantListInstance._uri = `/Accounts/${accountSid}/Conferences/${conferenceSid}/Participants.json`;
  /* jshint ignore:start */
  /**
   * create a ParticipantInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList#
   *
   * @param {object} opts - Options for request
   * @param {string} opts.from -
   *          The phone number, Client identifier, or username portion of SIP address that made this call.
   * @param {string} opts.to -
   *          The phone number, SIP address or Client identifier that received this call.
   * @param {string} [opts.statusCallback] -
   *          The URL we should call to send status information to your application
   * @param {string} [opts.statusCallbackMethod] -
   *          The HTTP method we should use to call `status_callback`
   * @param {string|list} [opts.statusCallbackEvent] -
   *          Set state change events that will trigger a callback
   * @param {string} [opts.label] - The label of this participant
   * @param {number} [opts.timeout] -
   *          he number of seconds that we should wait for an answer
   * @param {boolean} [opts.record] -
   *          Whether to record the participant and their conferences
   * @param {boolean} [opts.muted] - Whether to mute the agent
   * @param {string} [opts.beep] -
   *          Whether to play a notification beep to the conference when the participant joins
   * @param {boolean} [opts.startConferenceOnEnter] -
   *          Whether the conference starts when the participant joins the conference
   * @param {boolean} [opts.endConferenceOnExit] -
   *          Whether to end the conference when the participant leaves
   * @param {string} [opts.waitUrl] - URL that hosts pre-conference hold music
   * @param {string} [opts.waitMethod] -
   *          The HTTP method we should use to call `wait_url`
   * @param {boolean} [opts.earlyMedia] -
   *          Whether agents can hear the state of the outbound call
   * @param {number} [opts.maxParticipants] -
   *          The maximum number of agent conference participants
   * @param {string} [opts.conferenceRecord] -
   *          Whether to record the conference the participant is joining
   * @param {string} [opts.conferenceTrim] -
   *          Whether to trim leading and trailing silence from your recorded conference audio files
   * @param {string} [opts.conferenceStatusCallback] -
   *          The callback URL for conference events
   * @param {string} [opts.conferenceStatusCallbackMethod] -
   *          HTTP method for requesting `conference_status_callback` URL
   * @param {string|list} [opts.conferenceStatusCallbackEvent] -
   *          The conference state changes that should generate a call to `conference_status_callback`
   * @param {string} [opts.recordingChannels] -
   *          Specify `mono` or `dual` recording channels
   * @param {string} [opts.recordingStatusCallback] -
   *          The URL that we should call using the `recording_status_callback_method` when the recording status changes
   * @param {string} [opts.recordingStatusCallbackMethod] -
   *          The HTTP method we should use when we call `recording_status_callback`
   * @param {string} [opts.sipAuthUsername] -
   *          The SIP username used for authentication
   * @param {string} [opts.sipAuthPassword] - The SIP password for authentication
   * @param {string} [opts.region] -
   *          The region where we should mix the conference audio
   * @param {string} [opts.conferenceRecordingStatusCallback] -
   *          The URL we should call using the `conference_recording_status_callback_method` when the conference recording is available
   * @param {string} [opts.conferenceRecordingStatusCallbackMethod] -
   *          The HTTP method we should use to call `conference_recording_status_callback`
   * @param {string|list} [opts.recordingStatusCallbackEvent] -
   *          The recording state changes that should generate a call to `recording_status_callback`
   * @param {string|list} [opts.conferenceRecordingStatusCallbackEvent] -
   *          The conference recording state changes that should generate a call to `conference_recording_status_callback`
   * @param {boolean} [opts.coaching] - Indicates if the participant changed to coach
   * @param {string} [opts.callSidToCoach] -
   *          The SID of the participant who is being `coached`
   * @param {string} [opts.jitterBufferSize] -
   *          Jitter Buffer size for the connecting participant
   * @param {string} [opts.byoc] - BYOC trunk SID (Beta)
   * @param {string} [opts.callerId] -
   *          The phone number, Client identifier, or username portion of SIP address that made this call.
   * @param {string} [opts.callReason] - Reason for the call (Branded Calls Beta)
   * @param {string} [opts.recordingTrack] - The track(s) to record
   * @param {number} [opts.timeLimit] - The maximum duration of the call in seconds.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ParticipantInstance
   */
  /* jshint ignore:end */
  ParticipantListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.from)) {
      throw new Error('Required parameter "opts.from" missing.');
    }
    if (_.isUndefined(opts.to)) {
      throw new Error('Required parameter "opts.to" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'From': _.get(opts, 'from'),
      'To': _.get(opts, 'to'),
      'StatusCallback': _.get(opts, 'statusCallback'),
      'StatusCallbackMethod': _.get(opts, 'statusCallbackMethod'),
      'StatusCallbackEvent': serialize.map(_.get(opts, 'statusCallbackEvent'), function(e) { return e; }),
      'Label': _.get(opts, 'label'),
      'Timeout': _.get(opts, 'timeout'),
      'Record': serialize.bool(_.get(opts, 'record')),
      'Muted': serialize.bool(_.get(opts, 'muted')),
      'Beep': _.get(opts, 'beep'),
      'StartConferenceOnEnter': serialize.bool(_.get(opts, 'startConferenceOnEnter')),
      'EndConferenceOnExit': serialize.bool(_.get(opts, 'endConferenceOnExit')),
      'WaitUrl': _.get(opts, 'waitUrl'),
      'WaitMethod': _.get(opts, 'waitMethod'),
      'EarlyMedia': serialize.bool(_.get(opts, 'earlyMedia')),
      'MaxParticipants': _.get(opts, 'maxParticipants'),
      'ConferenceRecord': _.get(opts, 'conferenceRecord'),
      'ConferenceTrim': _.get(opts, 'conferenceTrim'),
      'ConferenceStatusCallback': _.get(opts, 'conferenceStatusCallback'),
      'ConferenceStatusCallbackMethod': _.get(opts, 'conferenceStatusCallbackMethod'),
      'ConferenceStatusCallbackEvent': serialize.map(_.get(opts, 'conferenceStatusCallbackEvent'), function(e) { return e; }),
      'RecordingChannels': _.get(opts, 'recordingChannels'),
      'RecordingStatusCallback': _.get(opts, 'recordingStatusCallback'),
      'RecordingStatusCallbackMethod': _.get(opts, 'recordingStatusCallbackMethod'),
      'SipAuthUsername': _.get(opts, 'sipAuthUsername'),
      'SipAuthPassword': _.get(opts, 'sipAuthPassword'),
      'Region': _.get(opts, 'region'),
      'ConferenceRecordingStatusCallback': _.get(opts, 'conferenceRecordingStatusCallback'),
      'ConferenceRecordingStatusCallbackMethod': _.get(opts, 'conferenceRecordingStatusCallbackMethod'),
      'RecordingStatusCallbackEvent': serialize.map(_.get(opts, 'recordingStatusCallbackEvent'), function(e) { return e; }),
      'ConferenceRecordingStatusCallbackEvent': serialize.map(_.get(opts, 'conferenceRecordingStatusCallbackEvent'), function(e) { return e; }),
      'Coaching': serialize.bool(_.get(opts, 'coaching')),
      'CallSidToCoach': _.get(opts, 'callSidToCoach'),
      'JitterBufferSize': _.get(opts, 'jitterBufferSize'),
      'Byoc': _.get(opts, 'byoc'),
      'CallerId': _.get(opts, 'callerId'),
      'CallReason': _.get(opts, 'callReason'),
      'RecordingTrack': _.get(opts, 'recordingTrack'),
      'TimeLimit': _.get(opts, 'timeLimit')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ParticipantInstance(
        this._version,
        payload,
        this._solution.accountSid,
        this._solution.conferenceSid,
        this._solution.callSid
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Streams ParticipantInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList#
   *
   * @param {object} [opts] - Options for request
   * @param {boolean} [opts.muted] -
   *          Whether to return only participants that are muted
   * @param {boolean} [opts.hold] -
   *          Whether to return only participants that are on hold
   * @param {boolean} [opts.coaching] -
   *          Whether to return only participants who are coaching another call
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  ParticipantListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          callback(instance, onComplete);
        });

        if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList#
   *
   * @param {object} [opts] - Options for request
   * @param {boolean} [opts.muted] -
   *          Whether to return only participants that are muted
   * @param {boolean} [opts.hold] -
   *          Whether to return only participants that are on hold
   * @param {boolean} [opts.coaching] -
   *          Whether to return only participants who are coaching another call
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ParticipantListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList#
   *
   * @param {object} [opts] - Options for request
   * @param {boolean} [opts.muted] -
   *          Whether to return only participants that are muted
   * @param {boolean} [opts.hold] -
   *          Whether to return only participants that are on hold
   * @param {boolean} [opts.coaching] -
   *          Whether to return only participants who are coaching another call
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ParticipantListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Muted': serialize.bool(_.get(opts, 'muted')),
      'Hold': serialize.bool(_.get(opts, 'hold')),
      'Coaching': serialize.bool(_.get(opts, 'coaching')),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ParticipantPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single target page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ParticipantListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new ParticipantPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Constructs a participant
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList#
   *
   * @param {string} callSid -
   *          The Call SID or URL encoded label of the participant to fetch
   *
   * @returns {Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantContext}
   */
  /* jshint ignore:end */
  ParticipantListInstance.get = function get(callSid) {
    return new ParticipantContext(
      this._version,
      this._solution.accountSid,
      this._solution.conferenceSid,
      callSid
    );
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  ParticipantListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  ParticipantListInstance[util.inspect.custom] = function inspect(depth, options)
      {
    return util.inspect(this.toJSON(), options);
  };

  return ParticipantListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the ParticipantPage
 *
 * @constructor Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantPage
 *
 * @param {V2010} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {ParticipantSolution} solution - Path solution
 *
 * @returns ParticipantPage
 */
/* jshint ignore:end */
ParticipantPage = function ParticipantPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ParticipantPage.prototype, Page.prototype);
ParticipantPage.prototype.constructor = ParticipantPage;

/* jshint ignore:start */
/**
 * Build an instance of ParticipantInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantPage#
 *
 * @param {ParticipantPayload} payload - Payload response from the API
 *
 * @returns ParticipantInstance
 */
/* jshint ignore:end */
ParticipantPage.prototype.getInstance = function getInstance(payload) {
  return new ParticipantInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.conferenceSid
  );
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
ParticipantPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ParticipantPage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ParticipantContext
 *
 * @constructor Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantInstance
 *
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {string} callSid - The SID of the Call the resource is associated with
 * @property {string} label - The label of this participant
 * @property {string} callSidToCoach -
 *          The SID of the participant who is being `coached`
 * @property {boolean} coaching - Indicates if the participant changed to coach
 * @property {string} conferenceSid -
 *          The SID of the conference the participant is in
 * @property {Date} dateCreated -
 *          The RFC 2822 date and time in GMT that the resource was created
 * @property {Date} dateUpdated -
 *          The RFC 2822 date and time in GMT that the resource was last updated
 * @property {boolean} endConferenceOnExit -
 *          Whether the conference ends when the participant leaves
 * @property {boolean} muted - Whether the participant is muted
 * @property {boolean} hold - Whether the participant is on hold
 * @property {boolean} startConferenceOnEnter -
 *          Whether the conference starts when the participant joins the conference
 * @property {participant.status} status -
 *          The status of the participant's call in a session
 * @property {string} uri -
 *          The URI of the resource, relative to `https://api.twilio.com`
 *
 * @param {V2010} version - Version of the resource
 * @param {ParticipantPayload} payload - The instance payload
 * @param {sid} accountSid - The SID of the Account that created the resource
 * @param {sid} conferenceSid - The SID of the conference the participant is in
 * @param {sid_like} callSid -
 *          The Call SID or URL encoded label of the participant to fetch
 */
/* jshint ignore:end */
ParticipantInstance = function ParticipantInstance(version, payload, accountSid,
                                                    conferenceSid, callSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.callSid = payload.call_sid; // jshint ignore:line
  this.label = payload.label; // jshint ignore:line
  this.callSidToCoach = payload.call_sid_to_coach; // jshint ignore:line
  this.coaching = payload.coaching; // jshint ignore:line
  this.conferenceSid = payload.conference_sid; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.endConferenceOnExit = payload.end_conference_on_exit; // jshint ignore:line
  this.muted = payload.muted; // jshint ignore:line
  this.hold = payload.hold; // jshint ignore:line
  this.startConferenceOnEnter = payload.start_conference_on_enter; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    conferenceSid: conferenceSid,
    callSid: callSid || this.callSid,
  };
};

Object.defineProperty(ParticipantInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new ParticipantContext(
          this._version,
          this._solution.accountSid,
          this._solution.conferenceSid,
          this._solution.callSid
        );
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a ParticipantInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
ParticipantInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a ParticipantInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {boolean} [opts.muted] - Whether the participant should be muted
 * @param {boolean} [opts.hold] - Whether the participant should be on hold
 * @param {string} [opts.holdUrl] -
 *          The URL we call using the `hold_method` for  music that plays when the participant is on hold
 * @param {string} [opts.holdMethod] -
 *          The HTTP method we should use to call hold_url
 * @param {string} [opts.announceUrl] -
 *          The URL we call using the `announce_method` for an announcement to the participant
 * @param {string} [opts.announceMethod] -
 *          The HTTP method we should use to call announce_url
 * @param {string} [opts.waitUrl] - URL that hosts pre-conference hold music
 * @param {string} [opts.waitMethod] -
 *          The HTTP method we should use to call `wait_url`
 * @param {boolean} [opts.beepOnExit] -
 *          Whether to play a notification beep to the conference when the participant exit
 * @param {boolean} [opts.endConferenceOnExit] -
 *          Whether to end the conference when the participant leaves
 * @param {boolean} [opts.coaching] - Indicates if the participant changed to coach
 * @param {string} [opts.callSidToCoach] -
 *          The SID of the participant who is being `coached`
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
ParticipantInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a ParticipantInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
ParticipantInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
ParticipantInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ParticipantInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ParticipantContext
 *
 * @constructor Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantContext
 *
 * @param {V2010} version - Version of the resource
 * @param {sid} accountSid -
 *          The SID of the Account that created the resource to fetch
 * @param {sid} conferenceSid -
 *          The SID of the conference with the participant to fetch
 * @param {sid_like} callSid -
 *          The Call SID or URL encoded label of the participant to fetch
 */
/* jshint ignore:end */
ParticipantContext = function ParticipantContext(version, accountSid,
                                                  conferenceSid, callSid) {
  this._version = version;

  // Path Solution
  this._solution = {accountSid: accountSid, conferenceSid: conferenceSid, callSid: callSid, };
  this._uri = `/Accounts/${accountSid}/Conferences/${conferenceSid}/Participants/${callSid}.json`;
};

/* jshint ignore:start */
/**
 * fetch a ParticipantInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
ParticipantContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new ParticipantInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.conferenceSid,
      this._solution.callSid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * update a ParticipantInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantContext#
 *
 * @param {object} [opts] - Options for request
 * @param {boolean} [opts.muted] - Whether the participant should be muted
 * @param {boolean} [opts.hold] - Whether the participant should be on hold
 * @param {string} [opts.holdUrl] -
 *          The URL we call using the `hold_method` for  music that plays when the participant is on hold
 * @param {string} [opts.holdMethod] -
 *          The HTTP method we should use to call hold_url
 * @param {string} [opts.announceUrl] -
 *          The URL we call using the `announce_method` for an announcement to the participant
 * @param {string} [opts.announceMethod] -
 *          The HTTP method we should use to call announce_url
 * @param {string} [opts.waitUrl] - URL that hosts pre-conference hold music
 * @param {string} [opts.waitMethod] -
 *          The HTTP method we should use to call `wait_url`
 * @param {boolean} [opts.beepOnExit] -
 *          Whether to play a notification beep to the conference when the participant exit
 * @param {boolean} [opts.endConferenceOnExit] -
 *          Whether to end the conference when the participant leaves
 * @param {boolean} [opts.coaching] - Indicates if the participant changed to coach
 * @param {string} [opts.callSidToCoach] -
 *          The SID of the participant who is being `coached`
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
ParticipantContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Muted': serialize.bool(_.get(opts, 'muted')),
    'Hold': serialize.bool(_.get(opts, 'hold')),
    'HoldUrl': _.get(opts, 'holdUrl'),
    'HoldMethod': _.get(opts, 'holdMethod'),
    'AnnounceUrl': _.get(opts, 'announceUrl'),
    'AnnounceMethod': _.get(opts, 'announceMethod'),
    'WaitUrl': _.get(opts, 'waitUrl'),
    'WaitMethod': _.get(opts, 'waitMethod'),
    'BeepOnExit': serialize.bool(_.get(opts, 'beepOnExit')),
    'EndConferenceOnExit': serialize.bool(_.get(opts, 'endConferenceOnExit')),
    'Coaching': serialize.bool(_.get(opts, 'coaching')),
    'CallSidToCoach': _.get(opts, 'callSidToCoach')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new ParticipantInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.conferenceSid,
      this._solution.callSid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * remove a ParticipantInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
ParticipantContext.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({uri: this._uri, method: 'DELETE'});

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
ParticipantContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

ParticipantContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  ParticipantList: ParticipantList,
  ParticipantPage: ParticipantPage,
  ParticipantInstance: ParticipantInstance,
  ParticipantContext: ParticipantContext
};
