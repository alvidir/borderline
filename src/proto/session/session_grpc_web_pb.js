/**
 * @fileoverview gRPC-Web generated client stub for session
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_session_login_pb = require('../../proto/session/login_pb.js')
const proto = {};
proto.session = require('./session_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.session.SessionClient =
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
proto.session.SessionPromiseClient =
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
 *   !proto.session.LoginRequest,
 *   !proto.session.LoginResponse>}
 */
const methodDescriptor_Session_UserLogin = new grpc.web.MethodDescriptor(
  '/session.Session/UserLogin',
  grpc.web.MethodType.UNARY,
  proto_session_login_pb.LoginRequest,
  proto_session_login_pb.LoginResponse,
  /**
   * @param {!proto.session.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_session_login_pb.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.session.LoginRequest,
 *   !proto.session.LoginResponse>}
 */
const methodInfo_Session_UserLogin = new grpc.web.AbstractClientBase.MethodInfo(
  proto_session_login_pb.LoginResponse,
  /**
   * @param {!proto.session.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_session_login_pb.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.session.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.session.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.session.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.session.SessionClient.prototype.userLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/session.Session/UserLogin',
      request,
      metadata || {},
      methodDescriptor_Session_UserLogin,
      callback);
};


/**
 * @param {!proto.session.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.session.LoginResponse>}
 *     A native promise that resolves to the response
 */
proto.session.SessionPromiseClient.prototype.userLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/session.Session/UserLogin',
      request,
      metadata || {},
      methodDescriptor_Session_UserLogin);
};


module.exports = proto.session;

