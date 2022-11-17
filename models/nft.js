const mongoose = require('mongoose')

const nftScheme = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    edition: {
        type: Number,
        required: true
    },
    nftImage: {
        type: String,
        required: true
    },
    typeSneak: {
        type: String,
        required: true
    },
    quality: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    speed: {
        type: String,
        required: true
    },
    mintCount: {
        type: String,
        required: true
    },
    efficiency: {
        type: Number,
        required: true
    },
    luck: {
        type: Number,
        required: true
    },
    comfortability: {
        type: Number,
        required: true
    },
    durability: {
        type: Number,
        required: true
    },

})

module.exports = mongoose.model('Nft', nftScheme)