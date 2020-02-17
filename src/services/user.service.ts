import Axios from 'axios'
import ResponseWithUser from '../interfaces/response.interface'
import ServerResponse from './server-response'


class UserService {
    constructor() {}
    public async getAllUsers() {
        return ServerResponse
    }
}

export default new UserService()