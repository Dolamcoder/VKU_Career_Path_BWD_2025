const Account = require('../model/Account.js');
const bcrypt = require('bcrypt');
class AccountDao {
    async createAccount(accountData) {
        try {
            const account = new Account(accountData);
            return await account.save();
        } catch (error) {
            if (error.code === 11000) {
                throw new Error('Email already exists');
            }
            throw new Error(`Error creating account: ${error.message}`);
        }
    }

    async getAccountByEmail(email) {
        try {
            return await Account.findOne({ email });
        } catch (error) {
            throw new Error(`Error fetching account by email: ${error.message}`);
        }
    }

    async updateAccountPasswordByEmail(email, newPassword) {
        try {
            const account = await Account.findOne({ email });
            if (!account) {
                throw new Error('Account not found');
            }
            account.password = newPassword;
            return await account.save();
        } catch (error) {
            throw new Error(`Error updating account password: ${error.message}`);
        }
    }
     // Kiểm tra tài khoản (email và mật khẩu)
     async checkTaiKhoan(email, password) {
        try {
            // Tìm tài khoản theo email
            const account = await this.getAccountByEmail(email);
            if (!account) {
                return null; // Không tìm thấy tài khoản
            }

            // So sánh mật khẩu đã mã hóa
            const isPasswordValid = await bcrypt.compare(password, account.password);
            if (!isPasswordValid) {
                return null; // Mật khẩu không hợp lệ
            }

            return account; // Trả về tài khoản nếu hợp lệ
        } catch (error) {
            throw new Error(`Error checking account: ${error.message}`);
        }
    }
}
module.exports = new AccountDao();