import passport from "passport";
import {checkAuthentication} from "../config/passport_config.js"
import { upload } from "../config/multer_config.js"
import { userDaoMongoDB } from "../daos/indexDAO.js"

export const Login_Render_controller = (req, res) => {
    res.render("login");
}

export const Login_Authenticate_controller = (req, res) => {
    passport.authenticate("login", {
        failureRedirect: "/session/faillogin",
      }),
      () => {
        const user = req.user;
        req.session.user = user;
        res.redirect("/");
    }
} 

export const Register_Render_controller = (req, res) => {
    res.render("register");
}

export const Register_Authenticate_controller = (req, res) => {
    upload.single("image"),
    passport.authenticate("register", {
      failureRedirect: "/session/failregister",
    }),
    () => {
      req.session.destroy((error) => {
        if (error) {
          logger.error(`Error al destruir la session ${error}`);
          return;
        } 
      })
      res.redirect("/session/login");
    }  
}

export const Login_Fail_controller = (req, res) => {
    res.render("failLogin");
}

export const Register_Fail_controller = (req, res) => {
    res.render("failRegister");
}



export const Logout_controller = (req, res) => {
    checkAuthentication(req, res, () => {
      const user = req.session.user;
      req.session.destroy((error) => {
        if (error) {
          logger.error(`Error al destruir la session ${error}`);
          return;
        } else {
          res.render("logout", { user });
        }
      });
      //SE DESCONECTA LA BASE DE DATOS
      userDaoMongoDB.MongoDB_Disconnect();
    });
}
  

export const FindUser_controller = async (email) => {
    await userDaoMongoDB.MongoDB_Connect();
    const user_controller = await userDaoMongoDB.FindUser(email)
    return user_controller
}

export const SaveUser_controller = async (newUser) => {
    await userDaoMongoDB.SaveUser(newUser)
}