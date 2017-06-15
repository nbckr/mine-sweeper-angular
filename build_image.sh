#!/usr/bin/env bash

ng build
docker build -t "nginx-angular:1.0" .
