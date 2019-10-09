import React from 'react';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {material} from 'react-native-typography';
import Icon from 'react-native-vector-icons/EvilIcons';
import {traverse} from '../../utilities/NumberHelper';
import {Price} from '../../components';

const Change = () => {
  return (
    <View style={styles.change}>
      <View style={styles.changeIconBox}>
        <Icon name={'arrow-up'} style={styles.changeIcon}/>
      </View>
      <View style={styles.changeTextBox}>
        <Text>خرید بیلبیلیک</Text>
        <Text>بانک رسالت - امروز 15:22</Text>
      </View>
      <View style={styles.changeAmountBox}>
        <Price amount={23456} color={'black'} />
      </View>
    </View>
  );
};
const Header = () => {
  return (
    <View style={styles.header}>
      <Icon name={'navicon'} style={styles.navicon} />
      <Text style={styles.title}>دارا</Text>
      <Text style={styles.desc}>به راحتی دخل و خرجت رو مدیریت کن!</Text>
    </View>
  );
};
const Body = () => {
  return (
    <View style={styles.body}>
      <View style={styles.month}>
        <View style={styles.monthTop}>
          <Text style={styles.monthTopRight}>اوضاع این ماه</Text>
          <Text style={styles.monthTopLeft}>آذر ۱۳۹۸</Text>
        </View>
        <View style={styles.monthBottom}>
          {Array(7)
            .fill(true)
            .map((v, i) => {
              const isSelected = i === 4;
              return (
                <View
                  key={i}
                  style={[
                    styles.monthItem,
                    isSelected ? styles.monthItemToday : {},
                  ]}>
                  <Text
                    style={[
                      styles.monthItemWeek,
                      isSelected ? styles.monthItemWeekToday : {},
                    ]}>
                    جمعه
                  </Text>
                  <Text
                    style={[
                      styles.monthItemNumber,
                      isSelected ? styles.monthItemNumberToday : {},
                    ]}>
                    {traverse(i + 1)}
                  </Text>
                </View>
              );
            })}
        </View>
      </View>
      <View style={styles.kpi}>
        <View style={styles.kpi1}>
          <Price amount={450000} currency={false} />
          <Text style={styles.kpiText}>بدست آوردم</Text>
        </View>
        <View style={styles.kpi2}>
          <Price amount={450000} currency={false} />
          <Text style={styles.kpiText}>خرج کردم</Text>
        </View>
        <View style={styles.kpi3}>
          <Price amount={450000} currency={false} />
          <Text style={styles.kpiText}>در مجموع</Text>
        </View>
      </View>
      <View style={styles.last}>
        <View style={styles.lastTextBox}>
          <Text style={styles.lastText}>آخرین بالاپایینا</Text>
        </View>
        <View>
          {Array(20)
            .fill(true)
            .map((v, i) => <Change key={i}/>)}
        </View>
      </View>
    </View>
  );
};
const Main = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
    </View>
  );
};

Main.options = () => {
  return {
    statusBar: {
      backgroundColor: EStyleSheet.value('$CHeader'),
      style: 'light',
    },
    topBar: {
      visible: false,
    },
  };
};

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$CHeader',
    flex: 1,
  },
  header: {
    backgroundColor: '$CHeader',
    flex: 1,
    paddingRight: 40,
    paddingTop: 35,
  },
  navicon: {
    color: 'white',
    fontSize: 36,
    position: 'absolute',
    padding: 25,
  },
  title: {
    ...material.display1WhiteObject,
    ...EStyleSheet.value('$fm'),
    color: 'white',
  },
  desc: {
    ...material.subheadingWhiteObject,
    ...EStyleSheet.value('$f'),
    color: '#eee',
  },
  body: {
    flex: 8,
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingTop: 40,
    paddingHorizontal: 25,
  },

  // REGION TOP
  month: {
    flex: 1,
  },
  monthTop: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  monthTopRight: {
    ...material.titleObject,
    ...EStyleSheet.value('$fm'),
    color: '$CHeader',
  },
  monthTopLeft: {
    ...material.subheadingObject,
    ...EStyleSheet.value('$f'),
    color: '#444',
  },
  monthBottom: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  monthItem: {
    marginTop: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    height: 70,
    borderRadius: 10,
  },
  monthItemToday: {
    backgroundColor: '#4FC0A0',
  },
  monthItemWeek: {
    ...material.captionObject,
    ...EStyleSheet.value('$f'),
    color: '#666',
  },
  monthItemWeekToday: {
    color: 'white',
  },
  monthItemNumber: {
    marginTop: 10,
    ...material.titleObject,
    ...EStyleSheet.value('$f'),
    color: '#444',
  },
  monthItemNumberToday: {
    color: 'white',
  },
  // ENDREGION

  kpi: {
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  kpi1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$CProfit',
    borderRadius: 10,
  },
  kpi2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$CLoss',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  kpi3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$CTotal',
    borderRadius: 10,
  },
  kpiText: {
    ...material.body1WhiteObject,
    ...EStyleSheet.value('$f'),
  },
  last: {
    flex: 4,
  },
  lastTextBox:{
    marginVertical: 20,
  },
  lastText: {
    ...material.titleObject,
    ...EStyleSheet.value('$fm'),
    color: '$CHeader',
  },
  change: {
    flexDirection: 'row-reverse',
    marginBottom: 10,
  },
  changeIconBox:{
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$CProfit',
    borderRadius: 10,
  },
  changeIcon:{
    fontSize: 36,
    color: 'white',
  },
  changeTextBox:{
    flex: 1,
    paddingHorizontal: 15,
  }
});

export default Main;
