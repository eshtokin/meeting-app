import Axios, { AxiosResponse } from 'axios'
import ResponseWithUser from '../interfaces/response.interface'
import User from '../interfaces/user.interface'

class UserService {
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

    public divideUserForSection() {
        const sectionName = new Set()
        let section = [];
        
        if (!this.userList) {this.userList = []; }

        this.getAllUsers().forEach(user => {
            sectionName.add(user.first_name.charAt(0))  
        })

        sectionName.forEach(l => {
            section.push({
                title: l,
                data: this.getAllUsers().map(user => {
                    return user.first_name.charAt(0) === l ? user : null
                }).filter(user => user !== null)
            })
        })

        return section
    }
}

export default new UserService()