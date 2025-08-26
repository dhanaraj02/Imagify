import jwt from 'jsonwebtoken'; 

// User authentication middleware
const authUser = async (req, res, next) => {
    // Extract the token from headers
    const { token } = req.headers;
    console.log("Auth Middleware - Received Token:", token); // For debugging

    // Check if the token is missing
    if (!token) {
        console.log("Auth Middleware - No token provided."); // For debugging
        return res.json({ success: false, message: 'Not Authorized. Login Again' });
    }

    try {
        // Verify the token using the secret key
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Auth Middleware - Decoded Token:", tokenDecode); // For debugging

        // Check if the decoded token contains a user ID
        if (tokenDecode.id) {
            // *** THIS IS THE CRITICAL LINE TO ENSURE IS CORRECT ***
            req.userId = tokenDecode.id; 
            console.log("Auth Middleware - userId attached to req.userId:", req.userId); // For debugging
        } else {
            console.log("Auth Middleware - Token decoded but no ID found."); // For debugging
            return res.json({ success: false, message: 'Not Authorized. Login Again' });
        }

        // Call the next function in the stack
        next();
    } catch (error) {
        console.error("Auth Middleware - JWT Verification Error:", error.message); // For debugging
        res.json({ success: false, message: error.message });
    }
};

// Export the middleware
export default authUser;
