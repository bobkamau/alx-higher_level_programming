#!/usr/bin/node



const req = require('request');

const id = process.argv[2];

const url = 'https://swapi-api.hbtn.io/api/films/';

req.get(url + id, function (error, res, body) {

	  if (error) {
