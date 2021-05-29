import nodemailer from 'nodemailer';
import { injectable } from 'tsyringe';

@injectable()
export class SendEmailService {
    constructor() {}

    sendEmail(): string {
 
        let result = (async () => await this.mailJob(`aaa`))();
        return `email sent`;//Promise.resolve(result);
    }

    async mailJob(request: string): Promise<string> {

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'nachumsh10@gmail.com',
              pass: '456456Abc@'
            }
          });
          

          /*var transporter = nodemailer.createTransport({
            host: '82.102.174.151'
          });*/

        var mailOptions = {
            from: 'nachumsh5@gmail.com',
            to: 'nachumsh@gmail.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!',
        }

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                return error;
            } else {
                console.log('Email sent: ' + info);
                return 'Email sent: ' + info;
            }
          });

          return `done`;
    }
}
