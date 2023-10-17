import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { BsFillCameraFill } from "react-icons/bs";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/pexels-matheus-natan-3297593.jpg")}
          style={styles.headerImage}
        />
        <TouchableOpacity style={styles.headerTextContainer}>
          <Text style={styles.headerText}>
            <BsFillCameraFill size={20} color="gray" />
            Change Cover
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.leftCard}>
          <View style={styles.sideContainer}>
            <Image
              source={require("../assets/dp.jpg")}
              style={styles.profileScreenImage}
            />
            <View style={styles.nameContainer}>
              <Text style={styles.name}>Jane Doe</Text>
              <Text style={styles.role}>User</Text>
            </View>

            <View style={styles.menuItems}>
              <View style={styles.menuItemBox}>
                <Text style={styles.menuItem}>Account</Text>
              </View>
              <View style={styles.menuItemBox}>
                <Text style={styles.menuItem}>Orders</Text>
              </View>
              <View style={styles.menuItemBox}>
                <Text style={styles.menuItem}>Payment History</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.rightCard}>
          <View style={styles.titleContainer}>
            <Text style={styles.sectionTitle}>Account Settings</Text>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.formGroup}>
              <View style={styles.formInput}>
                <Text style={styles.label}>Name:</Text>
                <TextInput style={styles.input} placeholder="Enter your name" />
              </View>
              <View style={styles.formInput}>
                <Text style={styles.label}>Surname:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your surname"
                />
              </View>
            </View>
            <View style={styles.formGroup}>
              <View style={styles.formInput}>
                <Text style={styles.label}>Email:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                />
              </View>
              <View style={styles.formInput}>
                <Text style={styles.label}>Phone:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your phone"
                />
              </View>
            </View>

            <View style={styles.formGroup}>
              <View style={styles.formInput}>
                <Text style={styles.label}>City:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your address"
                />
              </View>
              <View style={styles.formInput}>
                <Text style={styles.label}>Province:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your address"
                />
              </View>
            </View>

            <View style={styles.formGroup}>
              <View style={styles.formInput}>
                <Text style={styles.label}>Postcode:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your address"
                />
              </View>
              <View style={styles.formInput}>
                <Text style={styles.label}>Country:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your address"
                />
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "lightblue",
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    height: "100%",
    width: "100%",
  },
  headerTextContainer: {
    position: "absolute",
    top: 16,
    right: "10%",
    justifyContent: "flex-end",
    zIndex: 1,
    color: "white",
    borderWidth: 1,
  },
  headerText: {
    fontSize: 14,
    padding: 12,
    color: "lightgray",
  },
  cardContainer: {
    flexDirection: "row",
    // backgroundColor: 'purple',
    justifyContent: "space-evenly",
    width: "80%",
    height: "80%",
    marginTop: "-5%",
  },
  leftCard: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "20%",
    height: "80%",
  },
  sideContainer: {
    width: "115%",
    // backgroundColor: "gray",
    justifyContent: "center",
    alignSelf: "center",
  },
  rightCard: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "70%",
    height: "95%",
  },
  profileScreenImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
  },
  nameContainer: {
    alignSelf: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 20,
  },
  role: {
    color: "gray",
    textAlign: "center",
  },
  menuItemBox: {
    width: "100%",
    borderTopWidth: 2,
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },

  menuItems: {
    marginTop: 30,
  },
  menuItem: {
    fontSize: 18,
    marginTop: 10,
    padding: 4,
  },
  titleContainer: {
    borderBottomWidth: 2,
    borderColor: "lightgray",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputContainer: {
    marginTop: "5%",
  },
  formGroup: {
    flexDirection: "row",
  },
  formInput: {
    flex: 1,
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    // backgroundColor: 'green',
    borderTopWidth: 2,
    marginTop: "17%",
    borderColor: "lightgray",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: "4%",
    width: 200,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});
