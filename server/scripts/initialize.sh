#!/bin/bash
cd /home/ubuntu/feve-deploy/server
npm install
npm install pm2@latest -g
sudo apt-get update
sudo apt-get install authbind
sudo service codedeploy-agent restart
sudo service codedeploy-agent status
sudo touch /etc/authbind/byport/80
sudo chown ubuntu /etc/authbind/byport/80
sudo chmod 755 /etc/authbind/byport/80