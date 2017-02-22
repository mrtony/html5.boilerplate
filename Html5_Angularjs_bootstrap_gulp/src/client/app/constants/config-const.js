
angular.module('app')
.constant('Config', {

  // gulp environment: injects environment vars
  ENV: {
    /*inject-env*/
    'VERSION': '0.1.2',
    'CLERK': '30010',
    'WEBAPI_SERVER': '/dev-webapi-proxy',
    'TA_DOC_SERVER': '/ta-doc-proxy',
    'VS2015_LOCAL': '/vs2015-local-proxy',
    'FEATURE_SWITCHES': {
      'TOKEN': 'q72MfFgjTefdyfPQTVdpsC_bq9P88LLwIHeJrbteTvW-kL2cPJBUTWCAve3zyO7aAe-sZVhcHrxHGjWP1sNI8lFpDmFDhuL-eH9wg2lhWx2jlJJRF9dPwxufq7SZjMk7duMc0e1ch6-yguLjrf8o9jcEk4u_XnoR0JE7CK792zjp84xHUJLkJXtxBnTS_gU4QuaJBbdel0W5zEj2rz7lDFqOhCQQ3idEFKiw7wAbOdXn4tMC8RI83tx04Dd4NDq8',
      'LOGIN': true
    },
    'CONTRACTS': {
      'CTNO451_URL': '/contracts/contract451.html',
      'CTNO451_NOTICE_URL': '/contracts/contract451_notice.html'
    },
    'FAKE_USER': {
      'IDNO': 'E121684314',
      'COMPS': [
        {
          'comp': '8560',
          'sett': '9800413'
        },
        {
          'comp': '8561',
          'sett': '9800613'
        }
      ]
    },
    'WATERMARK': {
      'Font': '14pt Calibri',
      'FontColor': 'red',
      'TextAlpha': 0.5,
      'StockLoanText': '僅供新光證券不限用途借貸開戶'
    }
    /*endinject*/
  },

  // gulp build-vars: injects build vars
  BUILD: {
    /*inject-build*/
    /*endinject*/
  }

});
