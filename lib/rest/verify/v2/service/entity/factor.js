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
var values = require('../../../../../base/values');  /* jshint ignore:line */

var FactorList;
var FactorPage;
var FactorInstance;
var FactorContext;

/* jshint ignore:start */
/**
 * Initialize the FactorList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Verify.V2.ServiceContext.EntityContext.FactorList
 *
 * @param {Twilio.Verify.V2} version - Version of the resource
 * @param {string} serviceSid - Service Sid.
 * @param {string} identity - Unique external identifier of the Entity
 */
/* jshint ignore:end */
FactorList = function FactorList(version, serviceSid, identity) {
  /* jshint ignore:start */
  /**
   * @function factors
   * @memberof Twilio.Verify.V2.ServiceContext.EntityContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Verify.V2.ServiceContext.EntityContext.FactorContext}
   */
  /* jshint ignore:end */
  function FactorListInstance(sid) {
    return FactorListInstance.get(sid);
  }

  FactorListInstance._version = version;
  // Path Solution
  FactorListInstance._solution = {serviceSid: serviceSid, identity: identity};
  FactorListInstance._uri = `/Services/${serviceSid}/Entities/${identity}/Factors`;
  /* jshint ignore:start */
  /**
   * Streams FactorInstance records from the API.
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
   * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.FactorList#
   *
   * @param {object} [opts] - Options for request
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
  FactorListInstance.each = function each(opts, callback) {
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
   * Lists FactorInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.FactorList#
   *
   * @param {object} [opts] - Options for request
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
  FactorListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of FactorInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.FactorList#
   *
   * @param {object} [opts] - Options for request
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  FactorListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new FactorPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of FactorInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.FactorList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  FactorListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new FactorPage(this._version, payload, this._solution));
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
   * Constructs a factor
   *
   * @function get
   * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.FactorList#
   *
   * @param {string} sid - A string that uniquely identifies this Factor.
   *
   * @returns {Twilio.Verify.V2.ServiceContext.EntityContext.FactorContext}
   */
  /* jshint ignore:end */
  FactorListInstance.get = function get(sid) {
    return new FactorContext(this._version, this._solution.serviceSid, this._solution.identity, sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.FactorList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  FactorListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  FactorListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return FactorListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the FactorPage
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Verify.V2.ServiceContext.EntityContext.FactorPage
 *
 * @param {V2} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {FactorSolution} solution - Path solution
 *
 * @returns FactorPage
 */
/* jshint ignore:end */
FactorPage = function FactorPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(FactorPage.prototype, Page.prototype);
FactorPage.prototype.constructor = FactorPage;

/* jshint ignore:start */
/**
 * Build an instance of FactorInstance
 *
 * @function getInstance
 * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.FactorPage#
 *
 * @param {FactorPayload} payload - Payload response from the API
 *
 * @returns FactorInstance
 */
/* jshint ignore:end */
FactorPage.prototype.getInstance = function getInstance(payload) {
  return new FactorInstance(
    this._version,
    payload,
    this._solution.serviceSid,
    this._solution.identity
  );
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.FactorPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
FactorPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

FactorPage.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the FactorContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Verify.V2.ServiceContext.EntityContext.FactorInstance
 *
 * @property {string} sid - A string that uniquely identifies this Factor.
 * @property {string} accountSid - Account Sid.
 * @property {string} serviceSid - Service Sid.
 * @property {string} entitySid - Entity Sid.
 * @property {string} identity - Unique external identifier of the Entity
 * @property {Date} dateCreated - The date this Factor was created
 * @property {Date} dateUpdated - The date this Factor was updated
 * @property {string} friendlyName - A human readable description of this resource.
 * @property {factor.factor_statuses} status - The Status of this Factor
 * @property {factor.factor_types} factorType - The Type of this Factor
 * @property {object} config - Configurations for a `factor_type`.
 * @property {string} url - The URL of this resource.
 *
 * @param {V2} version - Version of the resource
 * @param {FactorPayload} payload - The instance payload
 * @param {sid} serviceSid - Service Sid.
 * @param {string} identity - Unique external identifier of the Entity
 * @param {sid} sid - A string that uniquely identifies this Factor.
 */
/* jshint ignore:end */
FactorInstance = function FactorInstance(version, payload, serviceSid, identity,
                                          sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.entitySid = payload.entity_sid; // jshint ignore:line
  this.identity = payload.identity; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.factorType = payload.factor_type; // jshint ignore:line
  this.config = payload.config; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {serviceSid: serviceSid, identity: identity, sid: sid || this.sid, };
};

Object.defineProperty(FactorInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new FactorContext(
          this._version,
          this._solution.serviceSid,
          this._solution.identity,
          this._solution.sid
        );
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * remove a FactorInstance
 *
 * @function remove
 * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.FactorInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FactorInstance
 */
/* jshint ignore:end */
FactorInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * fetch a FactorInstance
 *
 * @function fetch
 * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.FactorInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FactorInstance
 */
/* jshint ignore:end */
FactorInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a FactorInstance
 *
 * @function update
 * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.FactorInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.authPayload] -
 *          Optional payload to verify the Factor for the first time
 * @param {string} [opts.friendlyName] - The friendly name of this Factor
 * @param {string} [opts.config.notificationToken] -
 *          For APN, the device token. For FCM, the registration token
 * @param {string} [opts.config.sdkVersion] -
 *          The Verify Push SDK version used to configure the factor
 * @param {number} [opts.config.timeStep] -
 *          How often, in seconds, are TOTP codes generated
 * @param {number} [opts.config.skew] -
 *          The number of past and future time-steps valid at a given time
 * @param {number} [opts.config.codeLength] -
 *          Number of digits for generated TOTP codes
 * @param {factor.totp_algorithms} [opts.config.alg] -
 *          The algorithm used to derive the TOTP codes
 * @param {string} [opts.config.notificationPlatform] -
 *          The transport technology used to generate the Notification Token
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FactorInstance
 */
/* jshint ignore:end */
FactorInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.FactorInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
FactorInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

FactorInstance.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the FactorContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Verify.V2.ServiceContext.EntityContext.FactorContext
 *
 * @param {V2} version - Version of the resource
 * @param {sid} serviceSid - Service Sid.
 * @param {string} identity - Unique external identifier of the Entity
 * @param {sid} sid - A string that uniquely identifies this Factor.
 */
/* jshint ignore:end */
FactorContext = function FactorContext(version, serviceSid, identity, sid) {
  this._version = version;

  // Path Solution
  this._solution = {serviceSid: serviceSid, identity: identity, sid: sid, };
  this._uri = `/Services/${serviceSid}/Entities/${identity}/Factors/${sid}`;
};

/* jshint ignore:start */
/**
 * remove a FactorInstance
 *
 * @function remove
 * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.FactorContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FactorInstance
 */
/* jshint ignore:end */
FactorContext.prototype.remove = function remove(callback) {
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
 * fetch a FactorInstance
 *
 * @function fetch
 * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.FactorContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FactorInstance
 */
/* jshint ignore:end */
FactorContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new FactorInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.identity,
      this._solution.sid
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
 * update a FactorInstance
 *
 * @function update
 * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.FactorContext#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.authPayload] -
 *          Optional payload to verify the Factor for the first time
 * @param {string} [opts.friendlyName] - The friendly name of this Factor
 * @param {string} [opts.config.notificationToken] -
 *          For APN, the device token. For FCM, the registration token
 * @param {string} [opts.config.sdkVersion] -
 *          The Verify Push SDK version used to configure the factor
 * @param {number} [opts.config.timeStep] -
 *          How often, in seconds, are TOTP codes generated
 * @param {number} [opts.config.skew] -
 *          The number of past and future time-steps valid at a given time
 * @param {number} [opts.config.codeLength] -
 *          Number of digits for generated TOTP codes
 * @param {factor.totp_algorithms} [opts.config.alg] -
 *          The algorithm used to derive the TOTP codes
 * @param {string} [opts.config.notificationPlatform] -
 *          The transport technology used to generate the Notification Token
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FactorInstance
 */
/* jshint ignore:end */
FactorContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'AuthPayload': _.get(opts, 'authPayload'),
    'FriendlyName': _.get(opts, 'friendlyName'),
    'Config.NotificationToken': _.get(opts, 'config.notificationToken'),
    'Config.SdkVersion': _.get(opts, 'config.sdkVersion'),
    'Config.TimeStep': _.get(opts, 'config.timeStep'),
    'Config.Skew': _.get(opts, 'config.skew'),
    'Config.CodeLength': _.get(opts, 'config.codeLength'),
    'Config.Alg': _.get(opts, 'config.alg'),
    'Config.NotificationPlatform': _.get(opts, 'config.notificationPlatform')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new FactorInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.identity,
      this._solution.sid
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
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.FactorContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
FactorContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

FactorContext.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  FactorList: FactorList,
  FactorPage: FactorPage,
  FactorInstance: FactorInstance,
  FactorContext: FactorContext
};
