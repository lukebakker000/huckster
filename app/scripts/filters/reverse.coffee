"use strict"
angular.module("hucksterApp").filter "reverse", ->
  (items) ->
    if angular.isArray(items) then items.slice().reverse() else []