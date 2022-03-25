<template>
  <form>
    <div>
      <div class="regForm">
        <h4>Information Covid-19</h4>
        <!--date-->
        <label for="date">วันที่</label> :
        <input type="date" v-model="date" name="date" required /> <br />
        <!--first_name-->
        <label for="name">ชื่อ</label> :
        <input type="text" v-model="name" required /><br />
        <!--last_name-->
        <label for="last_name">สกุล</label> :
        <input type="text" v-model="last_name" required /> <br />
        <!--test-->
        <label for="test">ผลตรวจ (+ / -)</label> :
        <input type="text" v-model="test" required /> <br />
        <!--tel-->
        <label for="tel">เบอร์</label> :
        <input type="tel" v-model="tel" required /> <br />
        <!--email-->
        <label for="email">E-mail</label> :
        <input type="email" v-model="email" required /> <br />
        <button @click="saveData()" class="btn btn-primary">Save Data</button>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">วันที่</th>
            <th scope="col">ชื่อ</th>
            <th scope="col">สกุล</th>
            <th scope="col">ผลตรวจ</th>
            <th scope="col">เบอร์</th>
            <th scope="col">E-mail</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(data, index) in dataList" :key="index">
            <td>{{ data.date }}</td>
            <td>{{ data.name }}</td>
            <td>{{ data.last_name }}</td>
            <td>{{ data.test }}</td>
            <td>{{ data.tel }}</td>
            <td>{{ data.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </form>
</template>

<script>
import { db } from "../plugins/firebaseInit";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default {
  mounted() {
    this.ReadData();
  },

  data: () => ({
    date: "",
    name: "",
    last_name: "",
    test: "",
    tel: "",
    email: "",
    dataList: [],
  }),
  methods: {
    async addData() {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          date: this.date,
          name: this.name,
          last_name: this.last_name,
          test: this.test,
          tel: this.tel,
          email: this.email,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    async ReadData() {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.dataList.push(doc.data());
      });
    },
  },
};
</script>

<style>
.regForm {
  width: 120px;
}
.table {
  margin: 40px;
  padding: 20px;
}

</style>
