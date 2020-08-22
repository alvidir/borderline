/**
 * @fileoverview gRPC-Web generated client stub for unsplash
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_unsplash_image_pb = require('../../proto/unsplash/image_pb.js')

var proto_unsplash_request_pb = require('../../proto/unsplash/request_pb.js')
const proto = {};
proto.unsplash = require('./api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.unsplash.ApiClient =
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
proto.unsplash.ApiPromiseClient =
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
 *   !proto.unsplash.EmptyRequest,
 *   !proto.unsplash.Image>}
 */
const methodDescriptor_Api_GetWallpaper = new grpc.web.MethodDescriptor(
  '/unsplash.Api/GetWallpaper',
  grpc.web.MethodType.UNARY,
  proto_unsplash_request_pb.EmptyRequest,
  proto_unsplash_image_pb.Image,
  /**
   * @param {!proto.unsplash.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_unsplash_image_pb.Image.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.unsplash.EmptyRequest,
 *   !proto.unsplash.Image>}
 */
const methodInfo_Api_GetWallpaper = new grpc.web.AbstractClientBase.MethodInfo(
  proto_unsplash_image_pb.Image,
  /**
   * @param {!proto.unsplash.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_unsplash_image_pb.Image.deserializeBinary
);


/**
 * @param {!proto.unsplash.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.unsplash.Image)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.unsplash.Image>|undefined}
 *     The XHR Node Readable Stream
 */
proto.unsplash.ApiClient.prototype.getWallpaper =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/unsplash.Api/GetWallpaper',
      request,
      metadata || {},
      methodDescriptor_Api_GetWallpaper,
      callback);
};


/**
 * @param {!proto.unsplash.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.unsplash.Image>}
 *     A native promise that resolves to the response
 */
proto.unsplash.ApiPromiseClient.prototype.getWallpaper =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/unsplash.Api/GetWallpaper',
      request,
      metadata || {},
      methodDescriptor_Api_GetWallpaper);
};


module.exports = proto.unsplash;

