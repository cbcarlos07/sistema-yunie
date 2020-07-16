
import * as multer from 'multer'
import * as shortid from 'shortid'
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, `./public/`)
    },
    filename: (req, file, cb) =>{
        const arrFile = file.originalname.split('.')
        const name = shortid.generate()
        const fileName = `${name}.${arrFile[ arrFile.length - 1  ]}`
            
        cb(null, fileName) 
    }
})
const uploads = multer({storage})

function toTimestamp(){
    return Math.round(new Date().getTime()/1000);;
}

export default uploads