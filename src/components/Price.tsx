import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import {traverse, numberWithComma} from '../utilities/NumberHelper';
import EStyleSheet from './EStyleSheet';

type Currency = 'Rial' | 'Toman' | false;
export interface PriceProps {
  amount: number;
  currency?: Currency;
  color?: string | false;
}

const Price = ({amount, color = false, currency = 'Rial'}: PriceProps) => {
  const styles = withStyles(color);
  const curr = React.useMemo(
    () =>
      currency
        ? {
            Rial: 'ریال',
            Toman: 'تومان',
          }[currency]
        : false,
    [currency],
  );
  const bigger = React.useMemo(
    () => traverse(numberWithComma(amount).slice(0, -5)),
    [amount],
  );
  const smaller = React.useMemo(
    () => traverse(numberWithComma(amount).slice(-5)),
    [amount],
  );
  return (
    <View style={styles.view}>
      {currency && (
        <View style={styles.currencyBox}>
          <Text style={styles.currency}>{curr}</Text>
        </View>
      )}
      <View style={styles.biggerBox}>
        <Text style={styles.bigger}>{bigger}</Text>
      </View>
      <View style={styles.smallerBox}>
        <Text style={styles.smaller}>{smaller}</Text>
      </View>
    </View>
  );
};
const withStyles = (color: string|false) => EStyleSheet.create({
  view: {
    flexDirection: 'row',
  },
  currencyBox: {
    alignSelf: 'flex-end',
  },
  currency: {
    ...EStyleSheet.value('$fm'),
    fontSize: 15,
    color: color ? color : '$CPriceSecondary',
    marginRight: 5,
    marginBottom: 10,
  },
  biggerBox: {
    alignSelf: 'flex-end',
  },
  bigger: {
    ...EStyleSheet.value('$fb'),
    color: color ? color : '$CPricePrimary',
    fontSize: 36,
  },
  smallerBox: {
    alignSelf: 'center',
  },
  smaller: {
    ...EStyleSheet.value('$fb'),
    color: color ? color : '$CPriceSecondary',
    fontSize: 20,
    alignSelf: 'flex-start',
  },
});
export default Price;
