const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Use the environment port or default to 3000

// Import routes
const homeRoutes = require('./routes/homeRoutes');
const courseRoutes = require('./routes/courseRoutes');
const instructorRoutes = require('./routes/instructorRoutes');
const aboutUsRoutes = require('./routes/aboutUsRoutes');
const contactUsRoutes = require('./routes/contactUsRoutes');

// Use routes
app.use('/', homeRoutes);
app.use('/courses', courseRoutes);
app.use('/instructors', instructorRoutes);
app.use('/about-us', aboutUsRoutes);
app.use('/contact-us', contactUsRoutes);

app.listen(PORT, '162.251.121.198', () => {
    console.log(`Server is running on port ${PORT} with www.trygo.com.ph`);
});
