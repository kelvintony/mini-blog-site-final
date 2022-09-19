import jwt from "jsonwebtoken";
import decode from 'jwt-decode';

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    // console.log(req.headers)
    const token = req?.headers?.authorization?.split(" ")[1];
    const isCustomAuth = token?.length < 500;
    //NB our custom token from backend is lessthan 500 while that coming from google is above 500

    //checking if the token exist
    if (!token ) {
      return res.status(401).json({error:'Not Authenticated'})
    }
    
    //checking if the token has expired or not
    const decodedToken = decode(token);
    if (decodedToken.exp*1000<new Date().getTime()) {
      return res.status(401).json({error:'Token Has Expired'})
    }


    let decodedData;
 
    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);
      req.userId = decodedData?.id;
    }
    next(); 
  } catch (error) {
    res.status(401).json({message:error})
  }
};

export default auth;