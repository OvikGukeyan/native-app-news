import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { gStyle } from "../styles/style";
import { Ionicons } from "@expo/vector-icons";
import Form from "./Form";

const Main = ({ navigation }) => {
  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Google!!!",
      full: "Google is cool!",
      key: "1",
      img: "https://itproger.com/img/courses/x1538723047.jpg.pagespeed.ic.L-HfIUPTfz.webp",
    },
    {
      name: "Apple",
      anons: "Apple!!!",
      full: "Apple is cool!",
      key: "2",
      img: "https://itproger.com/img/courses/x1551604154.jpg.pagespeed.ic.e6iEbb87eV.webp",
    },
    {
      name: "FaceBook",
      anons: "FaceBook!!!",
      full: "FaceBook is cool!",
      key: "3",
      img: "https://itproger.com/img/news/x1711786424.jpg.pagespeed.ic.UCpm8zHi70.webp",
    },
  ]);

  
  const [visibleModal, setVisibleModal] = useState(false);

  const addArticle = (article) => {
    setNews((prev) => {
        article.key = Math.random().toString()
        return [
            article, ...prev
        ]
    })
    setVisibleModal(false)
  };
  // const loadScene = ( ) => {
  //     navigation.navigate('Contacts')
  // }
  return (
    <View style={gStyle.main}>
      <Modal visible={visibleModal}>
        <View style={gStyle.main}>
          <Ionicons
            onPress={() => setVisibleModal(false)}
            style={styles.iconAdd}
            name="close-circle"
            size={34}
            color={"red"}
          />
          <Text style={gStyle.title}>Add article</Text>
          <Form addArticle={addArticle}/>
        </View>
      </Modal>
      <Ionicons
        onPress={() => setVisibleModal(true)}
        style={styles.iconAdd}
        name="add-circle"
        size={34}
        color={"green"}
      />
      <Text style={[gStyle.title, styles.header]}>Main page</Text>
      {/* <Button title='Open' onPress={loadScene}/> */}

      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Image source={{ uri: item.img }} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  iconAdd: {
    textAlign: "center",
    marginBottom: 15,
  },
  header: {
    marginBottom: 30,
  },
  item: {
    width: "100%",
    marginBottom: 30,
  },
  title: {
    fontFamily: "mt-bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },
  anons: {
    fontFamily: "mt-light",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    color: "#474747",
  },
  image: {
    width: "100%",
    height: 200,
  },
});
