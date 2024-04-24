import { StyleSheet, View, Button, TextInput } from "react-native";
import React from "react";
import { Formik } from "formik";

const Form = ({ addArticle}) => {

  

  return (
    <View>
      <Formik
        initialValues={{ name: "", anons: "", full: "", img: "" }}
        onSubmit={(values, action) => {
            addArticle(values);
            action.resetForm();
        
        }}
      >
        {(props) => (
          <View>
            <TextInput
            style={styles.input}
              value={props.values.name}
              placeholder="enter the name"
              onChangeText={props.handleChange("name")}
            />
            <TextInput
            style={styles.input}
              value={props.values.anons}
              multiline
              placeholder="enter the anons"
              onChangeText={props.handleChange("anons")}
            />
            <TextInput
            style={styles.input}
              value={props.values.full}
              multiline
              placeholder="enter the full"
              onChangeText={props.handleChange("full")}
            />
            <TextInput
            style={styles.input}
              value={props.values.img}
              placeholder="enter the image"
              onChangeText={props.handleChange("img")}
            />
            <Button title="Add" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderWidth: 1,
        marginTop: 15,
        borderRadius: 5,
        borderColor: 'silver'
    }
});
