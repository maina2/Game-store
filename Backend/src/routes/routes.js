
import { register,login,loginRequired} from '../controllers/Authenticate.js'
import  {getAllGames,getGamesByGenre} from '../controllers/Games.js'
import {addOrder,deleteOrder, getOrders} from '../controllers/Orders.js'
import {deleteReview,updateReview} from '../controllers/Reviews.js'

const routes = (app)=>{
    //Authorisation routes
    app.route('/Auth/Register')
        .post(register);
    app.route('/Auth/Login')
        .post(login)
    //Games routes
    app.route('/Games')
        .get(getAllGames);
    app.route('/Games/:genreId')
        .get(getGamesByGenre)
    //Order routes
    app.route('/Orders')
        .post(addOrder)
        .get(getOrders)        
    app.route('/Orders/Delete/:id')
        .delete( deleteOrder);
    //Reviews routes
    
    app.route('/Reviews/Delete/:id')
        .get(loginRequired,deleteReview)
        .post(loginRequired,updateReview)




}
export default routes;