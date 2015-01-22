module.exports = {
  upload:{
    options: {
      host: '<%= sshlogininfo.host %>',
      username: '<%= sshlogininfo.username %>',
      password: '<%= sshlogininfo.password %>',
      path:'/'
    },
    files:{'./':'**/*.html'} 
  }
}



 