// import React, { Component } from 'react';
// import { View, Text } from 'react-native';

// class App extends Component {
//   render() {
//     return(
//       <View>asdad</View>

//     )

//   }
// }
// export default App

// import React from 'react';
// import { View, Text } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import Welcome from './src/screens/Welcome';
// import TodoApp from './src/screens/TodoApp';

// const AppNavigator = createStackNavigator({
//   Welcome: {
//     screen: Welcome,
//     navigationOptions: {
//       title: 'Welcome to React Native'
//     }
//   },
//   TodoApp: {
//     screen: TodoApp,
//     navigationOptions: {
//       title: 'TodoApp'
//     }
//   },
// }, {
//   initialRouteName: 'Welcome'
// });

// export default createAppContainer(AppNavigator);



// import React, { Component } from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Hello, world!</Text>
//         <Text>Hello, world!</Text>

//         <Text>Hello, world!</Text>
//         <Text>Hello, world!</Text>
//         <Text>Hello, world!</Text>

//       </View>
//     );
//   }
// }
//////////////////////////////////////////
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';

export default class App extends Component {
  state = {
    categories: [],
    events: []
  }
  componentDidMount() {
    axios.get(`http://10.0.2.2:8080/categories`)
      .then(res => {
        const categories = res.data;
        this.setState({ categories });
        console.log(this.res.data)
      }),
      axios.get(`http://10.0.2.2:8080/events`)
        .then(res => {
          const events = res.data;
          this.setState({ events });
        })
  }
  render() {
    return (

      <View style={{ backgroundColor: "#ffc0cb", margin: 7 }}>
        {/* Header Component */}
        <View style={{ backgroundColor: "#EF4136", paddingBottom: 15, marginBottom: 15, flexDirection: "row", justifyContent: 'space-between' }}>
          <Text style={styles.category, { color:"#FFFFFF",fontSize: 35 }}>DumbTick</Text>
          <View style={{ flexDirection: "row", margin: 5 }}>
            <Button color="#ff6347" title="Login" ></Button>
            <Button color="#ff6347" title="Register"></Button>
          </View>
        </View>
<ScrollView>
        {/* Category Component */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <ScrollView horizontal>
            {this.state.categories.map(category =>
              <View style={styles.category}>
                {/* <Image
          style={{width: 50, height: 50}}
          source={{uri:`${category.imgCategory}`}}
        /> */}
                <Text style={styles.textCategory}>
                  {category.name}
                </Text>
              </View>
            )}
          </ScrollView>
        </View>
        <Text />

        {/* Search Component */}
        <View>
          <TextInput style={{ height: 40 }}
            placeholder="Find an Event Here!"
          />
        </View>

        <View >
          <Text>HOT EVENT</Text>
          <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
            <ScrollView horizontal>
              {this.state.events.map(event =>
                <View style={styles.eventCard}>
                  <Image
                    style={{ width: 180, height: 100 }}
                    source={{ uri: `${event.img}` }}
                  />
                  <Text style={styles.textCategory}>{event.title}</Text>
                </View>
              )}
            </ScrollView>
          </View>
        </View>
        {/*  */}
        <View >
          <Text>Today Event</Text>
          <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
            <ScrollView>
              {this.state.events.map(event =>
                <View style={styles.eventCardDetail}>
                  <Image
                    style={{ width: 370, height: 150 }}
                    source={{ uri: `${event.img}` }}
                  />
                  <Text style={styles.textEventDetail}>{event.title}</Text>
                </View>
              )}
            </ScrollView>
          </View>
        </View>
        </ScrollView>
      </View>



    )
  }
}

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },


  category: {
    width: 120,
    height: 35,
    margin: 10,
    backgroundColor: "#ff6347"
  },
  textCategory: {
    color:"#FFFFFF",
    fontSize: 18,
    textAlign: 'center',
    justifyContent: "center",
  },
  textEventDetail: {
    color:"#000000",
    fontSize: 18,
    textAlign: 'center',
    justifyContent: "center",
  },
  button: {
    margin: 5,
  },
  eventCard: {
    width: 180,
    height: 180,
    margin: 10,
    backgroundColor: "#ff6347",
  },
  eventCardDetail: {
    width: 370,
    height: 240,
    margin: 10,
    backgroundColor: "pink",
  }
});


