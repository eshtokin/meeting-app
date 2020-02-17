import Axios, { AxiosResponse } from 'axios'
import ResponseWithUser from '../interfaces/response.interface'
import User from '../interfaces/user.interface'

export class UserService {
    private url = 'https://gorest.co.in/public-api/users?_format=json&access-token=7-aPNfhriISxZtBDLZR5tcyF4RlhYPWr97wm'
    public userList: User[]

    constructor() {
        this.sendRequest()
    }

    private async sendRequest() {
        await Axios.get<any, AxiosResponse<ResponseWithUser>>(this.url)
        .then(response => this.userList = response.data.result)
        .catch(err => console.error(err))
    }

    public getAllUsers() {
        return this.userList
    }

}

const userService = new UserService()

export default userService 