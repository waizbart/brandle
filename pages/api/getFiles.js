import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
    const imagesPath = path.join(process.cwd(), 'public/static');

    let files = await fs.readdir(imagesPath);

    files = files.map(file => {
        let value = file.replace(".png", '');
        let label = value.charAt(0).toUpperCase() + value.slice(1);

        return { value, label }
    })

    res.status(200).json(files);
}
