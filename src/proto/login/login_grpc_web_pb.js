/**
 * @fileoverview gRPC-Web generated client stub for login
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_login_response_pb = require('../../proto/login/response_pb.js')

var proto_model_user_pb = require('../../proto/model/user_pb.js')
const proto = {};
proto.login = require('./login_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.login.LoginClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.login.LoginPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.User,
 *   !proto.login.Response>}
 */
const methodDescriptor_Login_UserLogin = new grpc.web.MethodDescriptor(
  '/login.Login/UserLogin',
  grpc.web.MethodType.UNARY,
  proto_model_user_pb.User,
  proto_login_response_pb.Response,
  /**
   * @param {!proto.model.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_login_response_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.User,
 *   !proto.login.Response>}
 */
const methodInfo_Login_UserLogin = new grpc.web.AbstractClientBase.MethodInfo(
  proto_login_response_pb.Response,
  /**
   * @param {!proto.model.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_login_response_pb.Response.deserializeBinary
);


/**
 * @param {!proto.model.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.login.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.login.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.login.LoginClient.prototype.userLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/login.Login/UserLogin',
      request,
      metadata || {},
      methodDescriptor_Login_UserLogin,
      callback);
};


/**
 * @param {!proto.model.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.login.Response>}
 *     A native promise that resolves to the response
 */
proto.login.LoginPromiseClient.prototype.userLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/login.Login/UserLogin',
      request,
      metadata || {},
      methodDescriptor_Login_UserLogin);
};


module.exports = proto.login;

