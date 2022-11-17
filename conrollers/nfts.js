const Nft = require('../models/nft')
const { param } = require('../routes/nfts')

const getNfts = async (req, res) => {
    try {
        const nfts = await Nft.find()
        res.status(200).json(nfts)
    } catch (error) {
        res.status(500).json({
            message: 'Не удалось получить список NFT, повторите попытку'
        })
    }
}

const getNft = async (req, res) => {
    try {
        const nft = await Nft.find({ _id: req.params.id })
        res.status(200).json(nft)
    } catch (error) {
        res.status(400).json({
            message: 'Nft не найдено'
        })
    }
}

const createNft = async (req, res) => {
    const errors = {}

    if (!req.body.name) {
        errors.name = { message: 'Укажите название' }
    }
    if (!req.body.price) {
        errors.price = { message: 'Укажите цену' }
    }
    if (!req.body.description) {
        errors.description = { message: 'Укажите описание' }
    }
    if (!req.body.edition) {
        errors.edition = { message: 'Укажите тираж' }
    }
    if (!req.file) {
        errors.nftImage = { message: 'Добавьте фото' }
    }
    if (!req.body.typeSneak) {
        errors.typeSneak = { message: 'Добавьте тип' }
    }
    if (!req.body.quality) {
        errors.quality = { message: 'Добавьте редкость' }
    }
    if (!req.body.level) {
        errors.level = { message: 'Добавьте уровень' }
    }
    if (!req.body.speed) {
        errors.speed = { message: 'Добавьте скорость' }
    }
    if (!req.body.mintCount) {
        errors.mintCount = { message: 'Добавьте кол-во минтов' }
    }
    if (!req.body.efficiency) {
        errors.efficiency = { message: 'Добавьте эффективность' }
    }
    if (!req.body.luck) {
        errors.luck = { message: 'Добавьте удачу' }
    }
    if (!req.body.comfortability) {
        errors.comfortability = { message: 'Добавьте комфорт' }
    }
    if (!req.body.durability) {
        errors.durability = { message: 'Добавьте прочность' }
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors)
    }

    try {
        const { name, price, description, edition, typeSneak, quality,
            level,
            speed,
            mintCount,
            efficiency,
            luck,
            comfortability,
            durability
        } = req.body
        const nft = await Nft.create({
            name,
            price,
            description,
            edition,
            nftImage: `http://localhost:${process.env.PORT}/static/${req.file.filename}`,
            typeSneak,
            quality,
            level,
            speed,
            mintCount,
            efficiency,
            luck,
            comfortability,
            durability

        })
        res.status(201).json(nft)
    } catch (error) {
        res.status(500).json({
            message: 'Не удалось создать NFT, повторите попытку'
        })
    }
}

module.exports = {
    getNfts,
    createNft,
    getNft
}