const Account = require('../model/Account.js');
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
    async checkTaiKhoan(email, password) {
        try {
            const account = await Account.findOne({ email });
            if (!account) {
                throw new Error('Account not found');
            }
    
            // So sánh mật khẩu plaintext với hash trong DB
            const isMatch = await bcrypt.compare(password, account.password);
            if (!isMatch) {
                throw new Error('Invalid password');
            }
    
            return account;
        } catch (error) {
            throw new Error(`Error checking account: ${error.message}`);
        }
    }
}
module.exports = new AccountDao();