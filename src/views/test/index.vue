<template>
  <section class="section">
    <a @mousedown="handleMousedown">1234123</a>

    <div class="container">
      <table class="table is-bordered">
        <thead>
          <th v-for="key in 5" :key="key">
            测试列表 {{key}}
          </th>
        </thead>
        <tbody>
          <tr v-for="key in 10" :key="key">
            <TableCell
              v-for="key in 5" :key="key"
            />
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import TableCell from '@/components/EditableCell'

export default {
  components: {
    TableCell
  },

  data () {
    return {
      test: 0
    }
  },

  methods: {
    handleMousedown () {
      console.log(1000)
    }
  }
}
</script>
