const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors") 
const mongodb = require("mongodb")
const UserModel = require("./models/User")



const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://harrm136:West7631@cluster0.pgmci2q.mongodb.net/?retryWrites=true&w=majority");

app.get('/', (req,res) => 
res.send('http get request sent to root api endpoint')
);

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("the password is incorrect")
            }
        } else {
            res.json("No record existed")
        }
    })
})
app.post('/api/users', (req,res) => {
    console.log(req.body);
    res.send(req.body);
}) 

app.post('/api/register', (req, res) => {
UserModel.create(req.body)
.then(users => res.json(users))
.catch(err => res.json(err))
})

app.get('/api/users/:id', async (req, res) => {
    try {
        const post = await UserModel.findById(req.params.id);

        // Make sure the post was found
        if (!post) {
            return res.status(404).json({ msg: 'Post not found'});
        }
        res.json(post);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.delete('/api/users/:id', async (req, res) => {

    try {
        const post = await UserModel.findById(req.params.id);
    
        // Make sure the post was found
        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }
    
    
    
        await post.deleteOne();
    
        res.json({ msg: 'Post removed'});
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
    //console.log(req.params.id)
   // const user = await UserModel.findById(req.params.id);
    //await user.remove();
    //res.json({ msg: 'Post removed'})
   // const data = await mongoose.connect("mongodb+srv://harrm136:West7631@cluster0.pgmci2q.mongodb.net/?retryWrites=true&w=majority");
   // const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
   //res.send(result);
    });

app.listen(3001, () => {
console.log("Server is running")
})