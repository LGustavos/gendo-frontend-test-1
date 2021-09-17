import BaseService from './BaseService'

export default class FavoritesService extends BaseService {
    constructor () {
        super('/users/biancassilva/starred')
    }
}