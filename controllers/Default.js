'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.apiV1Products63e5e39354040579babd6f4cPATCH = function apiV1Products63e5e39354040579babd6f4cPATCH (req, res, next, body) {
  Default.apiV1Products63e5e39354040579babd6f4cPATCH(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1Products63e5e42054040579babd6f5dGET = function apiV1Products63e5e42054040579babd6f5dGET (req, res, next) {
  Default.apiV1Products63e5e42054040579babd6f5dGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1ProductsCatogaryGET = function apiV1ProductsCatogaryGET (req, res, next) {
  Default.apiV1ProductsCatogaryGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1ProductsGET = function apiV1ProductsGET (req, res, next) {
  Default.apiV1ProductsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1ProductsPOST = function apiV1ProductsPOST (req, res, next, body) {
  Default.apiV1ProductsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1UserGET = function apiV1UserGET (req, res, next) {
  Default.apiV1UserGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1UserPATCH = function apiV1UserPATCH (req, res, next, body) {
  Default.apiV1UserPATCH(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1UserPOST = function apiV1UserPOST (req, res, next, body) {
  Default.apiV1UserPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
