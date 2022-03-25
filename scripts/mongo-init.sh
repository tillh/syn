set -e

mongo <<EOF
use $SYN_APP_DB

db.createUser({
  user: '$SYN_APP_DB_USER',
  pwd: '$SYN_APP_DB_PASSWORD',
  roles: [{
    role: 'readWrite',
    db: '$SYN_APP_DB'
  }]
});

db.createCollection('$SYN_APP_CONTRACTS_COLLECTION');
EOF
