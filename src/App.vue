<template>
  <div id="app" class="small-container">
    <h1>Employees</h1>
    <employee-form @add:employee="addEmployee" />
    <employee-table v-bind:employees="employees" @delete:employee="deleteEmployee" @edit:employee="editEmployee" />
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">props & emit</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/v-if">v-if</router-link>
        </li>
      </ul>
    </div>
    <div class="container">
      <transition name="moveInUp">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  //数据表格
  import EmployeeTable from '@/components/EmployeeTable.vue';
  //添加表单组件
  import EmployeeForm from '@/components/EmployeeForm.vue';
  export default {
    name: 'app',
    components: {
      EmployeeTable,
      EmployeeForm
    },
    data() {
      return {
        // employees: [
        //   {
        //     id: 1,
        //     name: 'Richard Hendricks',
        //     email: 'richard@piedpiper.com',
        //   },
        //   {
        //     id: 2,
        //     name: 'Bertram Gilfoyle',
        //     email: 'gilfoyle@piedpiper.com',
        //   },
        //   {
        //     id: 3,
        //     name: 'Dinesh Chugtai',
        //     email: 'dinesh@piedpiper.com',
        //   },
        // ]
        employees: []
      }
    },
    mounted() {
      this.getEmployees()
    },
    methods: {
      async getEmployees() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users')
          const data = await response.json()
          this.employees = data
        } catch (error) {
          console.error(error)
        }
      },
      async addEmployee(employee) {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(employee),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          const data = await response.json()
          this.employees = [...this.employees, data]
        } catch (error) {
          console.error(error)
        }
      },
      async editEmployee(id, updatedEmployee) {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedEmployee),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          const data = await response.json()
          this.employees = this.employees.map(employee => employee.id === id ? data : employee)
        } catch (error) {
          console.error(error)
        }
      },
      async deleteEmployee(id) {
        try {
          await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE'
          })
          this.employees = this.employees.filter(employee => employee.id !== id)
        } catch (error) {
          console.error(error)
        }
      },
      // //添加职业事件
      // addEmployee(employee) {
      //   const lastId =
      //     this.employees.length > 0 ?
      //     this.employees[this.employees.length - 1].id :
      //     0;
      //   const id = lastId + 1;
      //   const newEmployee = { ...employee,
      //     id
      //   };
      //   this.employees = [...this.employees, newEmployee];
      // },
      // //删除
      // deleteEmployee(id) {
      //   this.employees = this.employees.filter(
      //     employee => employee.id !== id
      //   )
      // },
      // //编辑
      // editEmployee(id, updatedEmployee) {
      //   this.employees = this.employees.map(employee =>
      //     employee.id === id ? updatedEmployee : employee
      //   )
      // }
    }
  }
</script>

<style>
  @import "https://unpkg.com/primitive-ui@1.5.0/dist/css/main.css";
  button {
    background: #009435;
    border: 1px solid #009435;
  }
  .small-container {
    max-width: 680px;
  }
</style>