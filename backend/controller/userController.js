import User from "../modal/schema.js";



export const addUser = async (request, response) => {
  const user = request.body;
  const validatedUser = new User(user);

  try {
    await validatedUser.save();
    response.status(201).json(validatedUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const getUsers = async (request, response) => {

  try {
       const users = await User.find({});
       response.status(209).json(users)
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getUser = async (request, response) => {
  

  try {
        // const User = await User.find({_id: request.params.id });
        const user = await User.findById(request.params.id);
         response.status(209).json(user)
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};


export const editUser = async (request, response) => {
  const user = request.body;
  const editUser = new User(user);

  try {
         await User.updateOne({_id:  request.params.id},editUser);
         response.status(209).json(editUser)
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const deleteUser = async (request, response) => {
  const user = request.body;
  const editUser = new User(user);

  try {
         await User.deleteOne({_id:  request.params.id},editUser);
         response.status(209).json(editUser)
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
