
import { register,login} from '../controllers/Authenticate.js'
import  {getAllGames,getGameById} from '../controllers/Games.js'


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



}
export default routes;