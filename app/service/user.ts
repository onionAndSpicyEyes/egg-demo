/*
 * @file dataEntry: 标题
 * @Author       : zhangwc
 * @type         : 文件类型
 * @Date         : 2022-08-28 21:57:46
 * @notes        : 备注说明注意事项等
 * @lists        : 内容概览
 */
// app/service/user.js
const Service = require('egg').Service;
const users = [];
const getUser = username => {
    return users.find(item => item.name == username);
};
class UserService extends Service {
    async delete(userInfo) {
        const userIndex = users.findIndex(item => item.name == userInfo.name);
        if (userIndex === -1) {
            return ['删除失败,无此用户', 403];
        }
        users.splice(userIndex, 1);
        return ['删除成功', 200];
    }
    async get(username) {
        const user = getUser(username);
        if (!user) {
            return ['查询失败,无此用户', 403, {}];
        }
        return ['查询成功', 200, user];
    }
    async post(user) {
        if (getUser(user.name)) {
            return ['添加失败，已有用户', 403];
        }
        users.push(user);
        return ['添加成功', 200];
    }
    /**
         * @summary 文件上传
         * @description formData 案例
         * @router post /api/user/upload
         * @request formData string id 用户ID
         * @request formData file *file
         * @response 200 uploadUserResponse
         */
    async put(userInfo) {
        const userIndex = users.findIndex(item => item.name == userInfo.name);
        if (userIndex === -1) {
            return ['修改失败,无此用户', 403];
        }
        users[userIndex] = userInfo;
        return ['修改密码成功', 200];
    }
}

module.exports = UserService;
