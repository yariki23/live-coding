/* eslint-disable */

/**lexical environment
 * globalLexEnv
 * {
 * 'environmentRecord': {
 *    'message': ...
 *    'weight': ...
 *    'run': ...
 *    'createMessenger':...
 *  }
 *  'outerLexEnv': globalLexEnv
 * }
 * 
 * creatMessenger()
 * {
 *  'environmentRecord': {
 *    'message': ...
 *    'sender': ...
 *    'sendMessage': ...
 *    'setSender':...
 *    'setMessage':...
 *  }
 *  'outerLexEnv': globalLexEnv
 * }
 * 
 * 
 * 
 */


const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger = createMessenger();
run();


//GLOBAL LEX ENV
// {
//   'enviromentRecord': {
//     'message': 'Test',
//     'weight': 55,
//     'run': {
//         console.log('RUN');
//      },
//      'createMessenger': { ..},
//      'messanger': ....
//   },
//   'outherLexicalEnv': null
// }

// if (false) {
//   function sum(a, b) {
//     return a + b;
//   }
// }
// sum(5, 10); // будет ошибка так как блочная область видимости