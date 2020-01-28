require("dotenv").config();
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

//Step 1
let transporter = nodemailer.createTransport({
  service: "gmail",
  //host: "localhost",
  //port: 25000,
  auth: {
    user: 'salimakhtar12@gmail.com',
    pass: '***************'
  }
});

transporter.use(
  "compile",
  hbs({
    viewEngine: {
      extName: ".hbs" /* or '.handlebars' */,
      viewPath: __dirname + "/views/",
      layoutsDir: __dirname + "/views/",
      defaultLayout: "index",
      partialsDir: __dirname + "/views/"
    },
    data: {
        name: 'Salim Akhtar'
    },
    viewPath: "./views/"
  })
);

//Step 2
let mailOptions = {
  from: "salimakhtar12@gmail.com",
  //to: "jatin.arora2@publicissapient.com",
  //to: ["varungarg455@gmail.com", "varun.garg@publicissapient.com"],
  to: "salim.akhtar@publicissapient.com",
  subject: "This is a test mail",
  template: "index"
};

//Step 3
transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent");
  }
});
