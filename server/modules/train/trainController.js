const trainController = {}

const AddModel = require('./trainaddSchema');
const AddArrayModel = require('./trainaddarraySchema');
const TrainsortModel = require('./trainsortSchema');

trainController.hello = async (req, res, next) => {
   return res.status(200).json({success : true , message : 'Hello world'})
}

trainController.saveadd = async (req, res, next) => {
    try {
        let {a, b} = req.body;
        const ketQua=a+b;
        // const newAdd = new AddModel({a, b, output});
        // await newAdd.save();
        res.status(200).json({ success: true, message: `thanh cong`, ketQua})
    } catch {
        res.status(400).json({ success: false, message: `that bai` })
    }
}

trainController.saveaddArray = async (req, res, next) => {
   try {
       let {arr} = req.body;
       console.log(req.body);
       let s = 0;
       for (let i = 0; i < arr.length; i++)
       {
           s += arr[i];
       }
    //    const newAdd = new AddArrayModel({arr, sum});
    //    await newAdd.save();

       res.status(200).json({success: true, message: `thanh cong`, arr})
   } catch {
       res.status(400).json({ success: false, message: `that bai` })
   }
}

trainController.sort = async (req, res, next) => {
   try {
       let {arr, typesort, arrsort} = req.body;
       console.log(req.body);
       const newSort = new TrainsortModel({arr, typesort, arrsort});
       await newSort.save();
       res.status(200).json({success: true, message: `thanh cong` })
   } catch {
       res.status(400).json({ success: false, message: `that bai` })
   }
}


module.exports =  trainController;