export class MailService {
    sendEmail() {
        this.authenticate()
        this.connect()
        //send email
        this.disconnect()

    }

    private connect() {
        console.log('connected to mail server.')
    }

    private disconnect() {
        console.log('disconnected from mail server.')
    }

    private authenticate() {
        console.log('authenticated.')
    }
}