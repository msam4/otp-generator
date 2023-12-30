let generateOTP = () => {
  // Define the length of the OTP
  const otpLength = 6;

  // Generate a random numeric number
  const otp = Math.floor(Math.random() * Math.pow(10, otpLength));

  // Display the generated OTP
  document.getElementById("otpDisplay").innerText = `${otp}`;
};

document.getElementById("generateBtn").addEventListener("click", generateOTP);
window.addEventListener("load", generateOTP);
