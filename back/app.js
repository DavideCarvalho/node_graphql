const app = require('./config/app.configuration.js')();
require('./config/database.config.js')('mongodb://localhost:27017/demolay');
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
