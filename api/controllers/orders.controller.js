const httpStatus = require("http-status");
const Order = require('../models/order'); 
const moment = require("moment");

const orderController = () => {

    const addorders = async (req, res, next) => {   
        try {
            const order = new Order({
                order_id: req.body.order_id,
                item_name: req.body.item_name,
                cost: req.body.cost,
                order_date: req.body.order_date,
                delivery_date: req.body.delivery_date
            });
            await order.save().then((data) => {
                return res.status(200).json({
                    status: "Success",
                    response: data
                })
            }).catch((err) => {
                return res.status(500).json({
                    status: "Error",
                    actualMsg: err.message
                })
            });
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                status: "error",
                statusCode: httpStatus.INTERNAL_SERVER_ERROR,
                msg: "Failed to create details",
                actualMsg: err.message
            });
        }
    }

    const updateorders = async (req, res, next) => {
        try {
            await Order.updateOne({ order_id:req.body.order_id }, {
                delivery_date: req.body.delivery_date
            }).then((ord) => {
                return res.status(200).json({
                    status: "Success",
                    response: ord
                })
            }).catch((err) => {
                return res.status(500).json({
                    status: "Error",
                    actualMsg: err.message
                })
            });
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                status: "error",
                statusCode: httpStatus.INTERNAL_SERVER_ERROR,
                msg: "Failed to update details",
                actualMsg: err.message
            });
        }
        
    }

    const getallorders = async (req, res, next) => {
        try {
            var orders = await Order.find({}).exec();
            orders.forEach((order) => {
                order.delivery_date = moment(order.delivery_date).format('YYYY/MM/DD')
            })
            res.json(orders);
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                status: "error",
                statusCode: httpStatus.INTERNAL_SERVER_ERROR,
                msg: "Failed to fetch details",
                actualMsg: err.message
            });
        }        
    }

    const search = async (req, res, next) => {
        try {
            const id = req.params.order_id;
            var ord = await Order.findOne({ order_id: id }).exec();
            res.json(ord)
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                status: "error",
                statusCode: httpStatus.INTERNAL_SERVER_ERROR,
                msg: "Failed to fetch details",
                actualMsg: err.message
            });
        }        
    }

    const deleteorder = async (req, res, next) => {
        try {
            const id = req.params.order_id;
            var del = await Order.deleteOne({ order_id: id }).exec();
            res.json(del)
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                status: "error",
                statusCode: httpStatus.INTERNAL_SERVER_ERROR,
                msg: "Failed to delete",
                actualMsg: err.message
            });
        }
    }


    return {
        addorders,
        updateorders,
        getallorders,
        search,
        deleteorder
    };
};

module.exports = orderController();