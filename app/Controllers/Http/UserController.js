'use strict'
const User = use('App/Models/User');
const Helpers = use('Helpers');

class UserController {

    async register ({ request, auth }) {
        const { username, email, password } = request.all();
        console.log(request.all());
        const user = new User();
        user.username = username;
        user.email = email;
        user.password = password;
        await user.save();
        return 'Signup successfully';
    }

    async login ({ request, auth }) {
        const { email, password } = request.all()
        await auth.attempt(email, password);
        return 'Login successfully';
    }

    async logout ({ auth }) {
        await auth.logout();
        return 'Logout successfully'; 
    }

    async checkAuth ({ auth }) {
        try {
            // return await auth.getUser();
            return await auth.check();            
        }
        catch (e) {
            return false;
        }
    }

    async upload ({ request }) {
        console.log(request.all());
      const profilePic = request.file('profile_pic', {
        types: ['image'],
        size: '2mb'
      })
    
      await profilePic.move(Helpers.publicPath('uploads'), {
        name: 'custom-name.jpg',
        overwrite: true
      })
    
      if (!profilePic.moved()) {
        return profilePic.error()
      }
      return 'File moved'
    }

}

module.exports = UserController