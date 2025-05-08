const accountDao = require('../Dao/AccountDao.js');
const bcrypt = require('bcrypt');
const createAccount = async (req, res) => {
    try {
        let { name, email, password, role } = req.body;
        // Kiểm tra các trường bắt buộc
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Name, email, and password are required' });
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
        const { email, password } = req.body;

        // Kiểm tra các trường bắt buộc
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        // Kiểm tra tài khoản và mật khẩu
        const account = await accountDao.checkTaiKhoan(email, password);
        if (!account) {
            return res.status(401).json({ error: 'Email hoặc mật khẩu không hợp lệ' });
        }
        // Đăng nhập thành công
        return res.render('index.ejs', { message: `Đăng nhập thành công, Xin chào ${account.name}`, account });
    } catch (error) {
        console.error('Error in loginAccount:', error);
        return res.status(500).json({ error: 'Internal server error' });
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
module.exports = { createAccount, getAccountByEmail, loginAccount };