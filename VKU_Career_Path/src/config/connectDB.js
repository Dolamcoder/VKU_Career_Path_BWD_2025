const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/BWD_2025';

async function connectDB() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000 // Tăng timeout lên 30 giây
        });
        console.log('Connected to MongoDB with Mongoose');
        return mongoose.connection;
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

module.exports = connectDB;