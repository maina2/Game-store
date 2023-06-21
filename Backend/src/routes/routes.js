
import { register,login} from '../controllers/Authenticate.js'
import  {getAllGames,getGameById} from '../controllers/Games.js'
import {ordersPresent,deleteOrder} from '../controllers/Orders.js'
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
    app.route('/Games/:id')
        .get(getGameById)
    //Order routes
    app.route('/Orders')
        .get(ordersPresent);
    app.route('/Orders/Delete/:id')
    .get(deleteOrder)
    //Reviews routes
    // app.route('/Reviews')
    //     .get(ordersPresent);
    app.route('/Reviews/Delete/:id')
        .get(deleteReview)
        .post(updateReview)




}
export default routes;