const express = require('express')
const router = express.Router()
const { getNfts, createNft, getNft } = require('../conrollers/nfts')
const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: './assets/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage })

router.get('/', getNfts)
router.get('/:id', getNft)
router.post('/', upload.single('nftImage'), createNft)

module.exports = router