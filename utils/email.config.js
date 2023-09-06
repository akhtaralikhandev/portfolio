import nodemailer from "nodemailer";
const email = "akhtaralikhandear@gmail.com";
const pass = "akhtaralikhan";
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

export let mailOption = {
  from: "",
  to: "akhtaralikhandear@gmail.com",
};
