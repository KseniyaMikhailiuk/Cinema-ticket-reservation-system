import v4 from 'uuid'

var userInfo = [
    {
        id: v4(),
        name: "Kate",
        surname: "lal",
        email: "kate@gmail.com",
        password: "1234567"
    },
    {
        id: v4(),
        name: "Anna",
        surname: "qwerty",
        email: "anna@gmail.com",
        password: "qwertyqwe"
    },
    {
        id: v4(),
        name: "Tom",
        surname: "zxcv",
        email: "tom@gmail.com",
        password: "poiuyqwe"
    },
    {
        id: v4(),
        name: "Bob",
        surname: "pampam",
        email: "bob@gmail.com",
        password: "mnbvcqwe"
    }
]

export default userInfo;

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const registerUser = (userData) =>
    delay(500)
    .then(() => {
        let existedUser = userInfo.find(user => user.email === userData.email);
        if (!existedUser) {
            userInfo.push({
                id: v4(),
                ...userData
            });
            return true;
        }
        return false;
    })

export const authorizeUser = (userData) =>
    delay(500)
    .then(() => {
        let response = {
            isExistedUser: false,
            isCorrectPassword: false
        }
        let existedUser = userInfo.find(user => user.email === userData.email);
        if (existedUser) {
            response.isExistedUser = true;
            if (existedUser.password === userData.password) {
                response.isCorrectPassword = true;
            }
        }
        return response;
    })