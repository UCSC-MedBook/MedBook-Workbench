export MAIL_URL=smtp://baertsch@soe.ucsc.edu@localhost
export ROOT_URL=http://su2c-dev.ucsc.edu:10000/wb

export MONGO_URL=mongodb://localhost:27017/MedBook
export PORT=10003
export LOG_PATH=/data/MedBook
export MEDBOOK_CONFIG=$PWD/../config.toml
echo $MEDBOOK_CONFIG
forever start -a -l /data/MedBook/wb.log --minUptime 1000 --spinSleepTime 1000 main.js
