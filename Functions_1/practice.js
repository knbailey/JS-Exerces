function sum(num1, num2) {
  return num1 + num2;
}
// console.log(sum(2, 3));

function brendanEichQuote() {
  console.log(`Always bet on JavaScript.`);
}
// brendanEichQuote();

function cite(author, quote) {
  console.log(`${author} said: ${quote}`);
}
// cite('df', 'adfd');

function squaredNum(num) {
  return num ** 2;
}
// console.log(squaredNum(3));

function compareByLength(str1, str2) {
  if (str1.length < str2.length) {
    return -1;
  } else if (str1.length > str2.length) {
    return 1;
  } else {
    return 0;
  }
}
// console.log(compareByLength('for', 'sss'));

function greet(languageCode) {
  switch (languageCode) {
    case 'en':
      return 'Hi!';
    case 'fr':
      return 'Salut!';
    case 'pt':
      return 'Olá!';
    case 'de':
      return 'Hallo!';
    case 'sv':
      return 'Hej!';
    case 'af':
      return 'Haai';
  }
}
// console.log(greet('en')); // 'Hi!'
// console.log(greet('fr')); // 'Salut!'
// console.log(greet('pt')); // 'Olá!'
// console.log(greet('de')); // 'Hallo!'
// console.log(greet('sv')); // 'Hej!'
// console.log(greet('af')); // 'Haai!'

function extractLanguage(locale) {
  return locale.split('_');
}
extractLanguage('en_US.UTF-8');
extractLanguage('en_GB.UTF-8');
extractLanguage('ko_KR.UTF-16');

function extractRegion(locale) {
  return locale.split('.')[0].split('_')[1];
}
// console.log(extractRegion('en_US.UTF-8'));
// console.log(extractRegion('en_GB.UTF-8'));
// console.log(extractRegion('ko_KR.UTF-16'));

function extractLanguage(locale) {
  return locale.split('_')[0];
}
function extractRegion(locale) {
  return locale.split('.')[0].split('_')[1];
}

function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US':
      return 'Hey!';
    case 'GB':
      return 'Hello!';
    case 'AU':
      return 'Howdy!';
    case 'FR':
      return 'Salut!';
    default:
      return greet(language);
  }
}
// console.log(localGreet('en_US.UTF-8'));
// console.log(localGreet('en_GB.UTF-8'));
// console.log(localGreet('en_AU.UTF-8'));

// console.log(localGreet('fr_FR.UTF-8'));
// console.log(localGreet('fr_CA.UTF-8'));
// console.log(localGreet('fr_MA.UTF-8'));
