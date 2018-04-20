const http = require('http');
const app = require('./initialization/express.js')();
require('./initialization/database.js')('mongodb://192.168.99.100:27017/demolay');
const PORT = process.env.PORT || 8057;
// app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
