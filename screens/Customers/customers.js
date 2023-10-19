import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Customers() {
  const customerData = [
    {
      name: "Jack Waters",
      state: "KZN",
      customer_since: 16574522323,
      website: "https://example.co.za",
    },
    {
      name: "Emma Johnson",
      state: "GA",
      customer_since: 16574678901,
      website: "https://samplewebsite.com",
    },
    {
      name: "Michael Smith",
      state: "NY",
      customer_since: 16574765432,
      website: "https://testsite.org",
    },
    {
      name: "Olivia Brown",
      state: "CA",
      customer_since: 16574891234,
      website: "https://demo-page.net",
    },
    {
      name: "William Davis",
      state: "TX",
      customer_since: 16574987654,
      website: "https://examplestore.com",
    },
    {
      name: "Sophia Miller",
      state: "FL",
      customer_since: 16575098765,
      website: "https://yourbusiness.org",
    },
    {
      name: "James Wilson",
      state: "PA",
      customer_since: 16575123456,
      website: "https://customsite.co",
    },
    {
      name: "Charlotte Taylor",
      state: "IL",
      customer_since: 16575234567,
      website: "https://samplestore.com",
    },
    {
      name: "Henry Anderson",
      state: "OH",
      customer_since: 16575345678,
      website: "https://testbusiness.org",
    },
    {
      name: "Ava Martin",
      state: "NC",
      customer_since: 16575456789,
      website: "https://examplecompany.com",
    },
    {
      name: "Liam Clark",
      state: "MI",
      customer_since: 16575567890,
      website: "https://yourwebsite.net",
    },
  ];
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        {/*===================================================================================>>>>>>>>>>>>>>>>>>  Content Area*/}
        <View style={styles.navbar}>
          <View style={styles.navLink}>
            <Text style={styles.navLinkText}>***LOGO*</Text>
          </View>
          <View>
            <Text style={styles.navLinkText}>DASHBOARD</Text>
          </View>
          <View>
            <Text style={styles.navLinkText}>SALES</Text>
          </View>
          <View>
            <Text style={styles.navLinkText}>PRODUCT</Text>
          </View>
          <View>
            <Text style={styles.navLinkText}>CUSTOMERS</Text>
          </View>
          <View>
            <Text style={styles.navLinkText}>PROMOTIONS</Text>
          </View>
          <View>
            <Text style={styles.navLinkText}>CMS</Text>
          </View>
          <View>
            <Text style={styles.navLinkText}>REPORTS</Text>
          </View>
          <View>
            <Text style={styles.navLinkText}>STORES</Text>
          </View>
          <View>
            <Text style={styles.navLinkText}>SYSTEMS</Text>
          </View>
        </View>

        {/*===================================================================================>>>>>>>>>>>>>>>>>>  Content Area*/}
        <View style={styles.contentArea}>
          <View style={{ height: "40%" }}>
            <View
              style={{
                width: "100%",
                height: "25%",

                justifyContent: "space-between",
                ...styles.row,
              }}
            >
              <View>
                <Text style={styles.title}>Customers</Text>
              </View>

              <View style={{ ...styles.row }}>
                <View>
                  <Text>*search</Text>
                </View>
                <View>
                  <Text>*nb bell</Text>
                </View>
                <View>
                  <Text>*admin</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                height: "25%",
                ...styles.row,
                justifyContent: "space-between",
                backgroundColor: "#f8f8f8",
              }}
            >
              <View>
                <Text style={{ color: "white" }}>No text</Text>
              </View>

              <TouchableOpacity style={styles.primaryBTN}>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Add New Customer
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                height: "25%",
                ...styles.row,

                justifyContent: "space-between",
              }}
            >
              <View style={{ ...styles.boxBorder, width: "50%" }}>
                <Text>Search by keyword</Text>
              </View>
              <View
                style={{
                  ...styles.row,
                  justifyContent: "space-between",
                  width: "15%",
                }}
              >
                <Text>Default View ▼</Text>

                <Text>Column ▼</Text>
              </View>
            </View>
            <View
              style={{
                height: "25%",
                ...styles.row,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: "25%",
                  ...styles.row,
                  justifyContent: "space-between",
                }}
              >
                <View style={{ ...styles.row }}>
                  <Text style={{ ...styles.boxBorder }}>Action</Text>
                  <Text
                    style={{ ...styles.boxBorder, backgroundColor: "#e3e3e3" }}
                  >
                    ▼
                  </Text>
                </View>
                <View>
                  <Text>28 items found</Text>
                </View>
              </View>

              <View
                style={{
                  width: "45%",
                  ...styles.row,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{ ...styles.row, justifyContent: "space-between" }}
                >
                  <View style={{ ...styles.row }}>
                    <Text style={{ ...styles.boxBorder }}>10</Text>
                    <Text
                      style={{
                        ...styles.boxBorder,
                        backgroundColor: "#e3e3e3",
                      }}
                    >
                      ▼
                    </Text>
                  </View>
                  <View>
                    <Text>per page</Text>
                  </View>
                </View>

                <View style={{ ...styles.row }}>
                  <View>
                    <Text
                      style={{
                        backgroundColor: "#e3e3e3",
                        borderColor: "#bdbdbd",
                        borderWidth: 1,
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                      }}
                    >
                      &lt;
                    </Text>
                  </View>
                  <View style={{ ...styles.row }}>
                    <Text style={styles.boxBorder}>1</Text>
                    <Text>of 2</Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        backgroundColor: "#e3e3e3",
                        borderColor: "#bdbdbd",
                        borderWidth: 1,
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                      }}
                    >
                      &gt;
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{ height: "60%", borderColor: "#bdbdbd", borderWidth: 1 }}
          >
            <View
              style={{
                backgroundColor: "#524a43",
                padding: 10,
                borderBottomColor: "#bdbdbd",
                borderBottomWidth: 1,
              }}
            >
              <View style={{ ...styles.row }}>
                <Text
                  style={{
                    ...styles.boxBorder,
                    backgroundColor: "white",
                    color: "white",
                  }}
                >
                  all
                </Text>
                <Text
                  style={{ ...styles.boxBorder, backgroundColor: "#e3e3e3" }}
                >
                  ▼
                </Text>
              </View>
              <View></View>
              <View></View>
              <View></View>
              <View></View>
              <View></View>
              <View></View>
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
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  navbar: { backgroundColor: "#373330", width: "10%" },
  navLinkText: { color: "white", fontWeight: "bold" },
  navLink: {},
  contentArea: {
    width: "90%",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    color: "#373330",
  },
  boxBorder: {
    borderColor: "#bdbdbd",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  row: { display: "flex", flexDirection: "row", alignItems: "center" },
  primaryBTN: {
    padding: 20,
    backgroundColor: "#eb5308",
  },
});
