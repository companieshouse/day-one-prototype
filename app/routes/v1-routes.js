const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// V1 Test scenario
router.post('/check-your-answer', function (req, res) {

  // Make a variable and give it the value from 'scenario'
  var scenario = req.session.data['scenario']

  // If 'verified'
  if (scenario == "verified"){
    // Send user to verification version of Check your answers
    res.redirect('/verification/check-your-answer')
  } else {
    // Send user to normal (unverified) version of Check your answers
    res.redirect('/check-your-answer')
  }

})

module.exports=router;

