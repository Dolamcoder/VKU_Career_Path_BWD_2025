const accountDao = require('../Dao/AccountDao.js');
const bcrypt = require('bcrypt');
const createAccount = async (req, res) => {
    try {
        let { name, email, password, role, passwordConfirm } = req.body;
        // Kiểm tra các trường bắt buộc
        if (!name || !email || !password || !passwordConfirm) {
            return res.status(400).json({ error: 'Không được để dữ liệu trống' });
        }
        else if(!isValidEmail(email)){
            return res.status(400).json({ error: 'Email sai định dạng'});
        }
        else if(await isEmailExists(email)){
            return res.status(409).json({ error: 'Email đã tồn tại' });
        }
        else if(!isValidPassword(password)){
            return res.status(400).json({ error: 'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt' });
        }
        else if (password !== passwordConfirm) {    
            return res.status(400).json({ error: 'Mật khẩu không khớp' });
        }
        password = await bcrypt.hash(password, 10); // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệ
        // Gán role mặc định là 0 nếu không được gửi
        const accountData = {
            name,
            email,
            password,
            role: typeof role === 'number' ? role : 0
        };

        console.log('Account data:', accountData); // Log để debug
        const result = await accountDao.createAccount(accountData);
        if (result) {
            return res.status(201).json({ message: 'Account created successfully' });
        } else {
            return res.status(500).json({ error: 'Failed to create account' });
        }
    } catch (error) {
        console.error('Error in createAccount:', error);
        if (error.message.includes('Email already exists')) {
            return res.status(409).json({ error: 'Email already exists' });
        }
        res.status(500).json({ error: error.message });
    }
};
const loginAccount = async (req, res) => {
    try {
        let { email, password } = req.body;
        if(!email){
            return res.status(400).json({ error: 'Email không được để trống' });
        }
        else if(!isValidEmail(email)){
            return res.status(400).json({ error: 'Email sai định dạng'});
        }
        else if(!password){
            return res.status(400).json({ error: 'Mật khẩu không được để trống' });
        }   
      // Kiểm tra tài khoản và mật khẩu
      const account = await accountDao.checkTaiKhoan(email, password);
      if (!account) {
        return res.status(401).json({ error: "Email hoặc password không chính xác" });
      }
  
      // Đăng nhập thành công, return JSON with username
      req.session.user = { name: account.name };  // Lưu thông tin người dùng vào session
      return res.status(200).json({ name: account.name }); // Trả về tên người dùng
    } catch (error) {
      console.error("Error in loginAccount:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
const getAccountByEmail = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }
        const account = await accountDao.getAccountByEmail(email);
        if (!account) {
            return res.status(404).json({ error: 'Account not found' });
        }
        res.status(200).json(account);
    } catch (error) {
        console.error('Error in getAccountByEmail:', error);
        res.status(500).json({ error: error.message });
    }
};
const xoaSessionUser = (req, res) => {
   req.session.user = null;
 // Phản hồi thành công
  res.status(200).json({ message: 'Đăng xuất thành công' });
};
//check email có đúng định dạng không
const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};
//check email có tồn tại trong csdl không
const isEmailExists = async (email) => {
    const account = await accountDao.getAccountByEmail(email);
    return account !== null;
};
//check mật khẩu có thoả mãn có chữ hoa, chữ thường, số và ký tự đặc biệt không
const isValidPassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
};
module.exports = { createAccount, getAccountByEmail, loginAccount, xoaSessionUser };