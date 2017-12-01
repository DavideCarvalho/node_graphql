const app = require('./initialization/express.js')();
require('./initialization/database.js')('mongodb://localhost:27017/demolay');
const PORT = process.env.PORT || 8057;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
