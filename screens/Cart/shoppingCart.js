import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import itemImage from "./assets/images/mockTshirt.png";

export default function ShoppingCart() {
  const items = [1, 2, 3, 4, 5, 6, 7];

  return (
    <View style={styles.background}>
      <View style={{ ...styles.container }}>
        {/*================================================================================ CART */}
        <View style={{ ...styles.cart, ...styles.card }}>
          <View
            style={{
              ...styles.spaceBetween,
              ...styles.bottomBorder,
              alignItems: "center",
              height: "15%",
            }}
          >
            <Text style={{ ...styles.title }}>Shopping Cart</Text>
            <Text style={styles.boldGrey}>3 items</Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={items}
              renderItem={({ item }) => (
                <View
                  style={{ ...styles.cartItemsCard, ...styles.bottomBorder }}
                >
                  <View>
                    <Image source={itemImage} style={styles.image} />
                  </View>
                  <View>
                    <Text style={{ ...styles.boldGrey }}>Shirt</Text>
                    <Text style={{ ...styles.boldBlack }}>Cotton T-shirt</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ ...styles.boldBlack, fontSize: 20 }}>-</Text>
                    <Text
                      style={{
                        ...styles.boxBorder,
                        paddingHorizontal: 5,
                        marginHorizontal: 5,
                        ...styles.boldBlack,
                      }}
                    >
                      1
                    </Text>
                    <Text style={{ ...styles.boldBlack, fontSize: 20 }}>+</Text>
                  </View>
                  <View>
                    <Text style={{ ...styles.boldBlack }}>R 44.00</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 20 }}>x</Text>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.toString()}
            />
          </ScrollView>

          <View
            style={{
              height: "10%",
              justifyContent: "center",
            }}
          >
            <Text style={{ ...styles.boldGrey }}>← Back to shop</Text>
          </View>
        </View>

        {/*================================================================================ SUMMARY */}
        <View
          style={{
            ...styles.summary,
            ...styles.card,
          }}
        >
          <View
            style={{
              ...styles.bottomBorder,
              height: "15%",
              justifyContent: "center",
            }}
          >
            <Text style={{ ...styles.title }}>Summary</Text>
          </View>

          <View
            style={{
              ...styles.spaceBetween,
              height: "7%",
              alignItems: "center",
            }}
          >
            <Text style={styles.boldGrey}>ITEMS 3</Text>
            <Text style={styles.boldGrey}>R 132.00</Text>
          </View>

          <ScrollView
            contentContainerStyle={{
              ...styles.bottomBorder,
              height: "100%",
            }}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ marginBottom: 30 }}>
              <Text style={{ ...styles.boldGrey, marginBottom: 20 }}>
                SHIPPING
              </Text>
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: "white",
                  flex: 1,
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text>Standard-Delivery-R35.00</Text>
                <Text>▼</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 30 }}>
              <Text style={{ ...styles.boldGrey, marginBottom: 20 }}>
                GIVE CODE
              </Text>
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: "white",
                  flex: 1,
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text>Enter your code</Text>
                <Text>→</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <View
            style={{
              height: "25%",
              justifyContent: "space-between",
              paddingVertical: 40,
            }}
          >
            <View style={{ ...styles.spaceBetween, marginBottom: 30 }}>
              <Text style={styles.boldGrey}>TOTAL PRICE</Text>
              <Text style={styles.boldGrey}>R 137.00</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.whiteOnBlackBTN}>
                <Text style={{ color: "white" }}>CHECKOUT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "lightgrey",
    flex: 1,
    padding: 20,
  },
  container: {
    flexDirection: "row",
    flex: 1,
  },
  cart: {
    backgroundColor: "white",
    width: "65%",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 30,
  },
  summary: {
    backgroundColor: "gainsboro",
    width: "35%",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 30,
  },
  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#404040",
  },
  subtitle: {
    fontSize: 12,
  },
  boldGrey: {
    color: "grey",
    fontWeight: "bold",
  },
  boldBlack: {
    color: "black",
    fontWeight: "bold",
  },
  whiteOnBlackBTN: {
    flex: 1,
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Android shadow
  },
  cartItemsCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  boxBorder: {
    borderColor: "#808080",
    borderWidth: 1,
  },
  bottomBorder: {
    borderBottomColor: "#B2BEB5",
    borderBottomWidth: 2,
  },
});
