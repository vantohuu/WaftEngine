const nodeController = {};

const NodeModel = require('./nodeSchema');

const httpStatus = require('http-status');
const otherHelper = require('../../helper/others.helper');

nodeController.saveUser = async (req, res, next) => {
    try {
        const {username, name, phone, address} = req.body;
        const node = req.body;
        const save = new NodeModel({username, name, phone, address});
        await save.save();
        // return res.status(200).json({success : true, massage : 'thanh cong', username, name, phone, address});
        return otherHelper.sendResponse(res, httpStatus.OK, true, node, null, 'Lưu thành công dữ liệu user', null);
    } catch {
        return otherHelper.sendResponse(res, httpStatus[400], false, node, null, 'Lưu không thành công dữ liệu user', null);
    }
}


nodeController.getUser = async (req, res, next) => {
    try {
        const username = req.params.username;
        const node = await NodeModel.findOne({username});
        console.log(node);
        if (!node) {
            return otherHelper.sendResponse(res, httpStatus.NOT_FOUND, false, node, null, 'Lấy không thành công dữ liệu user', null);
        }
        return otherHelper.sendResponse(res, httpStatus.OK, true, node, null, 'Lấy thành công dữ liệu user', null);
    } catch {
        return otherHelper.sendResponse(res, httpStatus[400], false, node, null, 'Lấy không thành công dữ liệu user', null);
    }
}

nodeController.putUser = async (req, res, next) => {
    try {
        const username = req.params.username;
        const update = req.body;
        const node = await NodeModel.findOneAndUpdate({username}, {$set: update});
        return otherHelper.sendResponse(res, httpStatus.OK, true, node, null, 'Cập nhật thành công dữ liệu user', null);
    } catch {
        return otherHelper.sendResponse(res, httpStatus[400], false, node, null, 'Cập nhật không thành công dữ liệu user', null);
    }
}

nodeController.deleteUser = async (req, res, next) => {
    try {
        const {username} = req.params;
        const update = {is_deleted : true};
        const node = await NodeModel.findOneAndUpdate({username}, update);
        return otherHelper.sendResponse(res, httpStatus.OK, true, node, null, 'Xóa thành công dữ liệu user', null);
    } catch {
        return otherHelper.sendResponse(res, httpStatus[400], false, node, null, 'Xóa không thành công dữ liệu user', null);
    }
}

module.exports = nodeController;