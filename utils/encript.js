const bcrypt = require('bcrypt');


module.exports.encryptPass = async (password) =>{
    if(!password) return false;

    try {
        const salt =  await bcrypt.genSalt(10)
        console.log('salt', salt);
    
        const hash = await bcrypt.hash(password, salt);
        console.log('hash',hash);
        return hash;

    } catch (error) {
        console.log(error)
        return false
    }
    
    
}

module.exports.matchPassword =  async (password, hash) =>{
    try {
        return await bcrypt.compare(password, hash)
    } catch (error) {
        console.log('Error',error);
        return false;
    }
}