import v4 from 'uuid'

var usersInfo = [
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
    },
    {
        id: v4(),
        name: "ksusha",
        surname: "pampam",
        email: "ksushaadmin@ura.com",
        password: "qwertyuiop"
    }
]

export default usersInfo;

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const registerUser = (userData) =>
    delay(500)
        .then(() => {
            let existedUser = usersInfo.find(user => user.email === userData.email);
            if (!existedUser) {
                let newUser = {
                    id: v4(),
                    ...userData,
                    isAdmin: false
                };
                usersInfo.push(newUser);
                return newUser;
            }
            return {};
        })

export const authorizeUser = (userData) =>
    delay(500)
        .then(() => {
            let existedUser = usersInfo.find(user => user.email === userData.email);
            if (existedUser) {
                if (existedUser.password === userData.password) {
                    let userInfo = {
                        isAdmin: false
                    };
                    userInfo = { ...existedUser};
                    userInfo.isAdmin = checkIfAdmin(userData);
                    return userInfo;
                }
            }
        })

const checkIfAdmin = (userData) => {
    return userData.email === "ksushaadmin@ura.com" && userData.password === "qwertyuiop"
}