const User = require('../models/user');
const { Parser } = require('json2csv');
const fs = require('fs');

exports.generateMonthlyReport = async (req, res) => {
  const { month } = req.params; // Expecting month in 'YYYY-MM' format

  try {
    const startDate = new Date(`${month}-01`);
    const endDate = new Date(`${month}-31`);

    const users = await User.find({
      paymentDate: { $gte: startDate, $lt: endDate },
    }).select('name email isPaid paymentDate');

    const fields = ['name', 'email', 'isPaid', 'paymentDate'];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(users);

    // Save CSV file
    const filePath = `./reports/${month}-report.csv`;
    fs.writeFileSync(filePath, csv);

    res.status(200).json({ success: true, message: 'Report generated successfully', filePath });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error generating report', error });
  }
};
