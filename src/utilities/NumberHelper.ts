type traverseLang = 'EN' | 'FA';
export const traverse = (value: string | number, lang: traverseLang = 'FA') => {
  if (lang == 'EN') {
    const digits: {[key: string]: string} = {
      '۰': '0',
      '۱': '1',
      '۲': '2',
      '۳': '3',
      '۴': '4',
      '۵': '5',
      '۶': '6',
      '۷': '7',
      '۸': '8',
      '۹': '9',
      '.': ',',
    };
    return String(value).replace(/[^0-9.]/g, function(w) {
      return digits[w];
    });
  } else if (lang == 'FA') {
    const digits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return String(value).replace(/[0-9]/g, function(w) {
      return digits[+w];
    });
  } else {
    throw new Error('"lang" is not valid!');
  }
};

export const numberWithComma = (number: string | number) =>
  String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
