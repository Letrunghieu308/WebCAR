function logout()
    {
      $.ajax({
         url:'/logout',
          type:'POST',
      })
      .then( data => {
       delete_cookie('token')
         window.location.href="/login"
      })
      .catch(err => {
        res.json('that bai')
      })
    }
    var delete_cookie = function(name) {     document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'; };