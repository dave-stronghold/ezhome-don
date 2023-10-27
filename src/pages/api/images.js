// pages/api/images.js
import { readImagesFromFolder } from '../../utils/readImages';

export default (req, res) => {
    const folderPath = '/images/gallery'; // Replace with the actual path
    const imageFiles = readImagesFromFolder(folderPath);
    res.status(200).json(imageFiles);
    console.log('hi');
};
