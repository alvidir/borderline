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

var proto_session_logout_pb = require('../../proto/session/logout_pb.js')

var proto_session_signup_pb = require('../../proto/session/signup_pb.js')
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
 *   !proto.session.SessionResponse>}
 */
const methodDescriptor_Session_Login = new grpc.web.MethodDescriptor(
  '/session.Session/Login',
  grpc.web.MethodType.UNARY,
  proto_session_login_pb.LoginRequest,
  proto.session.SessionResponse,
  /**
   * @param {!proto.session.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.session.SessionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.session.LoginRequest,
 *   !proto.session.SessionResponse>}
 */
const methodInfo_Session_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.session.SessionResponse,
  /**
   * @param {!proto.session.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.session.SessionResponse.deserializeBinary
);


/**
 * @param {!proto.session.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.session.SessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.session.SessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.session.SessionClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/session.Session/Login',
      request,
      metadata || {},
      methodDescriptor_Session_Login,
      callback);
};


/**
 * @param {!proto.session.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.session.SessionResponse>}
 *     A native promise that resolves to the response
 */
proto.session.SessionPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/session.Session/Login',
      request,
      metadata || {},
      methodDescriptor_Session_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.session.GoogleLoginRequest,
 *   !proto.session.SessionResponse>}
 */
const methodDescriptor_Session_GoogleLogin = new grpc.web.MethodDescriptor(
  '/session.Session/GoogleLogin',
  grpc.web.MethodType.UNARY,
  proto_session_login_pb.GoogleLoginRequest,
  proto.session.SessionResponse,
  /**
   * @param {!proto.session.GoogleLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.session.SessionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.session.GoogleLoginRequest,
 *   !proto.session.SessionResponse>}
 */
const methodInfo_Session_GoogleLogin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.session.SessionResponse,
  /**
   * @param {!proto.session.GoogleLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.session.SessionResponse.deserializeBinary
);


/**
 * @param {!proto.session.GoogleLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.session.SessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.session.SessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.session.SessionClient.prototype.googleLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/session.Session/GoogleLogin',
      request,
      metadata || {},
      methodDescriptor_Session_GoogleLogin,
      callback);
};


/**
 * @param {!proto.session.GoogleLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.session.SessionResponse>}
 *     A native promise that resolves to the response
 */
proto.session.SessionPromiseClient.prototype.googleLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/session.Session/GoogleLogin',
      request,
      metadata || {},
      methodDescriptor_Session_GoogleLogin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.session.LogoutRequest,
 *   !proto.session.SessionResponse>}
 */
const methodDescriptor_Session_Logout = new grpc.web.MethodDescriptor(
  '/session.Session/Logout',
  grpc.web.MethodType.UNARY,
  proto_session_logout_pb.LogoutRequest,
  proto.session.SessionResponse,
  /**
   * @param {!proto.session.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.session.SessionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.session.LogoutRequest,
 *   !proto.session.SessionResponse>}
 */
const methodInfo_Session_Logout = new grpc.web.AbstractClientBase.MethodInfo(
  proto.session.SessionResponse,
  /**
   * @param {!proto.session.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.session.SessionResponse.deserializeBinary
);


/**
 * @param {!proto.session.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.session.SessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.session.SessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.session.SessionClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/session.Session/Logout',
      request,
      metadata || {},
      methodDescriptor_Session_Logout,
      callback);
};


/**
 * @param {!proto.session.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.session.SessionResponse>}
 *     A native promise that resolves to the response
 */
proto.session.SessionPromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/session.Session/Logout',
      request,
      metadata || {},
      methodDescriptor_Session_Logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.session.SignupRequest,
 *   !proto.session.SessionResponse>}
 */
const methodDescriptor_Session_Signup = new grpc.web.MethodDescriptor(
  '/session.Session/Signup',
  grpc.web.MethodType.UNARY,
  proto_session_signup_pb.SignupRequest,
  proto.session.SessionResponse,
  /**
   * @param {!proto.session.SignupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.session.SessionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.session.SignupRequest,
 *   !proto.session.SessionResponse>}
 */
const methodInfo_Session_Signup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.session.SessionResponse,
  /**
   * @param {!proto.session.SignupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.session.SessionResponse.deserializeBinary
);


/**
 * @param {!proto.session.SignupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.session.SessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.session.SessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.session.SessionClient.prototype.signup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/session.Session/Signup',
      request,
      metadata || {},
      methodDescriptor_Session_Signup,
      callback);
};


/**
 * @param {!proto.session.SignupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.session.SessionResponse>}
 *     A native promise that resolves to the response
 */
proto.session.SessionPromiseClient.prototype.signup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/session.Session/Signup',
      request,
      metadata || {},
      methodDescriptor_Session_Signup);
};


module.exports = proto.session;

