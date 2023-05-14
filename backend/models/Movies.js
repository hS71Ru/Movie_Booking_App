const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({  


    title: {
        type:'String',
        required: true
    },

    description:{
        type:'String',
        required: true
    },

    releaseDate:{
        typr:'date',
        required:true
    },

    featured:{
        type:'boolean',
        
    },

    bookings:({
        type:'String',
    }),

    admin:{
            type:'String',
            required:true
        }

    
}) 

const Movies = mongoose.model('Admin', movieSchema);
module.exports = Movie;