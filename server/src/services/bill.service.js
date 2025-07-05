import { billModel, customerModel, productModel } from "../models/index.js";

const createBill = async (data) => {
  let customer
  if(data.customer) {
    customer = await customerModel.create({...data.customer});
  }else{
    customer = await customerModel.find({name: "Anonymous"});
  }
  let total = 0;
  for (const item of data.products) {
    const product = await productModel.findById(item.product);     
    total += item.quantity * product.price; 
  }
  const lastBill = await billModel.findOne().sort({ billNumber: -1 }).limit(1);
  const nextBillNumber = lastBill ? lastBill.billNumber + 1 : 1;

  const newBill = await billModel.create({
    billNumber: nextBillNumber,
    customer: customer._id,
    products: data.products,
    totalAmount: total,
  });
  const bill = await billModel.findById(newBill._id).populate("customer").populate("products.product");
  return bill;
};

const getBills = async (startDate, endDate) => {
  let filter = {};
  if (startDate && endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    filter.date = {
      $gte: new Date(start.setHours(0, 0, 0, 0)),
      $lte: new Date(end.setHours(23, 59, 59, 999)),
    };
  } else {
    // default: today
    const today = new Date();
    const start = new Date(today.setHours(0, 0, 0, 0));
    const end = new Date(today.setHours(23, 59, 59, 999));
    filter.date = { $gte: start, $lte: end };
  }

  const bills = await billModel.find(filter).populate("customer").populate("products.product").sort({date:-1});
  return bills;
};

export default { createBill, getBills };
