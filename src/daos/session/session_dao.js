import ContainerMongoDB from "../containers/containerMongoDB.js";
import {user_Model} from "../../models/user_model.js"

class UserDaoMongoDB extends ContainerMongoDB {
  constructor() {
    super(user_Model);
  }
}

export default UserDaoMongoDB