#!/bin/bash
cd /home/ubuntu/feve-deploy/server
authbind --deep pm2 start app.js