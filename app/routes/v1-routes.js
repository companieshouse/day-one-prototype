const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// V1 Test scenario
router.post('/v1/standalone-service/check-your-answer', function (req, res) {

  // Make a variable and give it the value from 'scenario' (test-scenario.html)
  var scenario = req.session.data['scenario']

  // If 'verified'
  if (scenario == "verified"){
    // Send user to verification version of Check your answers
    res.redirect('/v1/standalone-service/verification/check-your-answer')
  } else {
    // Send user to normal (unverified) version of Check your answers
    res.redirect('/v1/standalone-service/check-your-answer')
  }

})

module.exports=router;

