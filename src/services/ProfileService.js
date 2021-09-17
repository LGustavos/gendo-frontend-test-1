import BaseService from './BaseService'

export default class ProfileService extends BaseService {
    constructor () {
        super('/users')
    }
}