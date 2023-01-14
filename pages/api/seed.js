import dbConnect from '../../lib/dbConnect'
import data from '../../lib/utils/data'
import User from '../../lib/User'


export default async function handler(req,res){
    await dbConnect();
    await User.deleteMany();
    await User.insertMany(data.users); 
    res.send({message : 'seeding successfully'})

}

