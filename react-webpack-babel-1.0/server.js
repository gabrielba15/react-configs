const express = require('express');
const app = express();

// Settings
app.set('PORT', process.env.PORT || 4000);

// Statics Files
app.use(express.static(__dirname + '/public'));

// Server
app.listen(app.get('PORT'), () =>
    console.log(`Server on port >> ${app.get('PORT')}`)
);
