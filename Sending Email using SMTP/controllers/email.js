const Sib = require("sib-api-v3-sdk");
const { v4: uuidv4 } = require("uuid");
const saltRounds = 10;



const forgotPassword = async(req, res) => {
    try {
        const email = req.body.email;
        // console.log('==========================================================================>',email)/

        const requestId = uuidv4();
        // console.log('====================================================='.requestId)//





        const client = Sib.ApiClient.instance;
        const apiKey = client.authentications["api-key"];
        apiKey.apiKey = process.env.API_KEY;


        const transEmailApi = new Sib.TransactionalEmailsApi();
        const sender = {
            email: "ajaymorde457@gmail.com",
            name: "Numetry Technologies",
        };
        const receivers = [{
            email: email,
        }, ];
        await transEmailApi.sendTransacEmail({
            sender,
            To: receivers,
            subject: "Get to Know Numetry Technology",
            htmlContent: `<h3>Hi User ,Welcome to Numetry Technology </h3>`


        });

        return res.status(200).json({
            message: "Link for reset the password is successfully sent on your Mail Id!",
        });
    } catch (error) {
        console.log("something error here ----------->error");
        return res.status(409).json({ message: "Failed changing password" });
    }
}





module.exports = {
    forgotPassword,

}