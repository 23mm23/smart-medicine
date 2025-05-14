#!/bin/sh
if [ "$1" = "build" ];then
    mkdir /home/medicine/project/project97751/project
    cp -a /home/medicine/project/project97751/server/. /home/medicine/project/project97751/project/
    cd /home/medicine/project/project97751/project
    rm -rf /home/medicine/project/project97751/server
    echo "执行成功"
fi
